import json
from typing import Dict, List, Any

TRAITS = [
    "analytical",
    "creative",
    "social",
    "leadership",
    "hands_on",
    "structure",
    "risk_tolerance",
    "independence",
    "math_focus",
    "outdoor",
    "empathy",
]

TRAIT_LABELS = {
    "analytical": "analytical thinking",
    "creative": "creativity",
    "social": "social interaction",
    "leadership": "leadership",
    "hands_on": "hands-on work",
    "structure": "structured work",
    "risk_tolerance": "comfort with risk",
    "independence": "independence",
    "math_focus": "math and data focus",
    "outdoor": "outdoor activity",
    "empathy": "empathy",
}


def _clamp(value: float, low: float = 0.0, high: float = 100.0) -> float:
    return max(low, min(high, value))


def _safe_num(value: Any, default: float = 50.0) -> float:
    try:
        return float(value)
    except (TypeError, ValueError):
        return default


def _fit_score(answers: Dict[str, Any], weights: Dict[str, Any]) -> float:
    alignments: List[float] = []
    for trait in TRAITS:
        user_val = _safe_num(answers.get(trait, 50.0))
        career_val = _safe_num(weights.get(trait, 50.0))
        # Perfect alignment is 100, opposite is 0.
        alignments.append(100.0 - abs(user_val - career_val))

    base_score = sum(alignments) / len(alignments)

    top_user = sorted(TRAITS, key=lambda t: _safe_num(answers.get(t, 50.0)), reverse=True)[:4]
    top_career = sorted(TRAITS, key=lambda t: _safe_num(weights.get(t, 50.0)), reverse=True)[:4]
    overlap = len(set(top_user).intersection(top_career))

    # Small bonus when strengths line up strongly.
    return _clamp(base_score + (overlap * 2.5))


def _build_why_matched(answers: Dict[str, Any], weights: Dict[str, Any]) -> str:
    ranked_traits = sorted(
        TRAITS,
        key=lambda t: (
            100.0 - abs(_safe_num(answers.get(t, 50.0)) - _safe_num(weights.get(t, 50.0)))
        ),
        reverse=True,
    )

    preferred = []
    for trait in ranked_traits:
        user_val = _safe_num(answers.get(trait, 50.0))
        career_val = _safe_num(weights.get(trait, 50.0))
        if user_val >= 55 and career_val >= 55:
            preferred.append(trait)
        if len(preferred) == 3:
            break

    if len(preferred) < 2:
        preferred = ranked_traits[:3]

    labels = [TRAIT_LABELS.get(t, t.replace("_", " ")) for t in preferred]

    if len(labels) >= 3:
        return (
            f"You scored high in {labels[0]}, {labels[1]}, and {labels[2]}, "
            "which aligns with this career's core strengths."
        )

    if len(labels) == 2:
        return (
            f"You scored high in {labels[0]} and {labels[1]}, "
            "which aligns well with this career's strengths."
        )

    return (
        f"Your profile aligns with this role, especially around {labels[0] if labels else 'key work traits'}."
    )


def score(answers: Dict[str, Any], careers: List[Dict[str, Any]]) -> List[Dict[str, Any]]:
    scored: List[Dict[str, Any]] = []

    for career in careers:
        weights = career.get("weights", {})
        fit = round(_fit_score(answers, weights), 1)
        why = _build_why_matched(answers, weights)

        item = dict(career)
        item["fit_score"] = fit
        item["why_matched"] = why
        scored.append(item)

    scored.sort(
        key=lambda c: (
            c.get("fit_score", 0),
            c.get("salary", {}).get("med", 0),
            c.get("salary", {}).get("high", 0),
        ),
        reverse=True,
    )

    for idx, career in enumerate(scored, start=1):
        career["rank"] = idx

    return scored


def score_json(answers_json: str, careers_json: str) -> str:
    answers = json.loads(answers_json)
    careers = json.loads(careers_json)
    ranked = score(answers, careers)
    return json.dumps(ranked)
