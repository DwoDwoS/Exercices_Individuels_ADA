import random
from typing import List, Tuple

def stage_1():
    print("=" * 60)
    print("ÉTAPE 1: Version simplifiée (2 couleurs, 4 choix)")
    print("=" * 60)
    
    possibles_colors = ["rouge", "bleu", "vert", "jaune"]
    secret_code = ["bleu", "rouge"]
    max_try = 12
    
    def validate_try(proposal: List[str]) -> bool:
        return len(proposal) == 2 and all(color in possibles_colors for color in proposal)
    
    def evaluate(proposal: List[str], code: List[str]) -> Tuple[int, int]:
        well_placed = sum(p == c for p, c in zip(proposal, code))
        common_colors = 0
        code_temp = code.copy()
        
        for color in proposal:
            if color in code_temp:
                common_colors += 1
                code_temp.remove(color)
        
        wrong_placed = common_colors - well_placed
        return well_placed, wrong_placed
    
    def setup_game() -> bool:
        print(f"Couleurs possibles: {possibles_colors}")
        print(f"Vous avez {max_try} essais pour trouver la combinaison de 2 couleurs!")
        print(f"Dans le résultat, le premier chiffre correspond au nombre de couleurs bien placées, et le second correspond aux bonnes couleurs mais mal placées !")
        print()
        
        number_of_try = 1
        while number_of_try <= max_try:
            print(f"Essai {number_of_try}/{max_try}")
            
            try:
                enter = input("Votre proposition (ex: rouge bleu): ").strip().lower()
                proposal = enter.split()
                
                if not validate_try(proposal):
                    print(f"Erreur: Vous devez proposer exactement 2 couleurs parmi {possibles_colors}")
                    continue
                
                well_placed, wrong_placed = evaluate(proposal, secret_code)
                
                if well_placed == 2:
                    print(f"Bravo! Vous avez trouvé le code en {number_of_try} essai(s)!")
                    return True
                else:
                    print(f"Résultat: [{well_placed}, {wrong_placed}]")
                    number_of_try += 1
                    
            except KeyboardInterrupt:
                print("\nPartie interrompue!")
                return False
        
        print(f"Dommage! Le code était: {secret_code}")
        return False
    
    setup_game()

if __name__ == "__main__":
    stage_1()