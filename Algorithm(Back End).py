
Candidates ={"Biden":[5,5,5,5,3], "Trump":[1,1,1,5,5], "Kennedy":[3,1,5,4,1] }
weights = [5,4,3,2,1]
user_responses={"Jennifer":[5,5,4,5,4]}

def calculate_weighted_distance(user_responses, candidate_positions, weights):
    distance = 0
    for user_response, candidate_position, weight in zip(user_responses, candidate_positions, weights):
        # Calculate the absolute difference and apply the weight
        distance += weight * abs(user_response - candidate_position)
    return distance

def recommend_candidates(users, candidates, weights):
    recommendations = {}
    for user_id, user_responses in users.items():
        best_score = float('inf')
        best_candidate = None
        for candidate_id, candidate_positions in candidates.items():
            distance = calculate_weighted_distance(user_responses, candidate_positions, weights)
            if distance < best_score:
                best_score = distance
                best_candidate = candidate_id
        recommendations[user_id] = best_candidate
        user, candidate = list(recommendations.items())[0]
    return f"{user} based on your responses the candidate that fits you best is {candidate}"
    # return recommendations


print(recommend_candidates(user_responses,Candidates,weights))