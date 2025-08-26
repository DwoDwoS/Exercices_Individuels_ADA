import random
from typing import List, Tuple

# def stage_1():
#     print("=" * 60)
#     print("ÉTAPE 1: Version simplifiée (2 couleurs, 4 choix)")
#     print("=" * 60)
    
#     possibles_colors = ["rouge", "bleu", "vert", "jaune"]
#     secret_code = ["bleu", "rouge"]
#     max_try = 12
    
#     def validate_try(proposal: List[str]) -> bool:
#         return len(proposal) == 2 and all(color in possibles_colors for color in proposal)
    
#     def evaluate(proposal: List[str], code: List[str]) -> Tuple[int, int]:
#         well_placed = sum(p == c for p, c in zip(proposal, code))
#         common_colors = 0
#         code_temp = code.copy()
        
#         for color in proposal:
#             if color in code_temp:
#                 common_colors += 1
#                 code_temp.remove(color)
        
#         wrong_placed = common_colors - well_placed
#         return well_placed, wrong_placed
    
#     def setup_game() -> bool:
#         print(f"Couleurs possibles: {possibles_colors}")
#         print(f"Vous avez {max_try} essais pour trouver la combinaison de 2 couleurs!")
#         print(f"Dans le résultat, le premier chiffre correspond au nombre de couleurs bien placées, et le second correspond aux bonnes couleurs mais mal placées !")
#         print()
        
#         number_of_try = 1
#         while number_of_try <= max_try:
#             print(f"Essai {number_of_try}/{max_try}")
            
#             try:
#                 enter = input("Votre proposition (ex: rouge bleu): ").strip().lower()
#                 proposal = enter.split()
                
#                 if not validate_try(proposal):
#                     print(f"Erreur: Vous devez proposer exactement 2 couleurs parmi {possibles_colors}")
#                     continue
                
#                 well_placed, wrong_placed = evaluate(proposal, secret_code)
                
#                 if well_placed == 2:
#                     print(f"Bravo! Vous avez trouvé le code en {number_of_try} essai(s)!")
#                     return True
#                 else:
#                     print(f"Résultat: [{well_placed}, {wrong_placed}]")
#                     number_of_try += 1
                    
#             except KeyboardInterrupt:
#                 print("\nPartie interrompue!")
#                 return False
        
#         print(f"Dommage! Le code était: {secret_code}")
#         return False
    
#     setup_game()

# if __name__ == "__main__":
#     stage_1()

def stage_2():
    print("=" * 60)
    print("ÉTAPE 2: Version étendue (4 couleurs, 8 choix)")
    print("=" * 60)
    
    possibles_colors = ["rouge", "bleu", "vert", "jaune", "violet", "orange", "rose", "cyan"]
    secret_code = ["bleu", "vert", "rouge", "violet"]
    max_try = 12
    
    def validate_try(proposal: List[str]) -> bool:
        if len(proposal) != 4:
            return False
        if not all(color in possibles_colors for color in proposal):
            return False
        return len(set(proposal)) == len(proposal)
    
    def found_combination(proposal: List[str], code: List[str]) -> bool:
        return proposal == code
    
    def calculate_feedback(proposal: List[str], code: List[str]) -> Tuple[int, int]:
        well_placed = sum(1 for i, color in enumerate(proposal) if color == code[i])
        proposal_colors = set(proposal)
        code_colors = set(code)
        commons_colors = len(proposal_colors & code_colors)
        wrong_placed = commons_colors - well_placed
        
        return well_placed, wrong_placed
    
    def setup_game() -> bool:
        print(f"Couleurs possibles: {possibles_colors}")
        print("Vous devez trouver 4 couleurs DIFFÉRENTES dans le bon ordre!")
        print()
        
        number_of_try = 1
        while number_of_try <= max_try:
            print(f"Essai {number_of_try}/{max_try}")
            
            try:
                enter = input("Votre proposition (4 couleurs différentes): ").strip().lower()
                proposal = enter.split()
                
                if not validate_try(proposal):
                    print("Erreur: 4 couleurs différentes parmi:", possibles_colors)
                    continue
                
                if found_combination(proposal, secret_code):
                    print(f"Parfait! Trouvé en {number_of_try} essai(s)!")
                    return True
                else:
                    well_placed, wrong_placed = calculate_feedback(proposal, secret_code)
                    print(f"Feedback: {well_placed} bien placée(s), {wrong_placed} mal placée(s)")
                    number_of_try += 1
                    
            except KeyboardInterrupt:
                print("\nPartie interrompue!")
                return False
        
        print(f"Échec! Le code était: {secret_code}")
        return False

    setup_game()

if __name__ == "__main__":
    stage_2()