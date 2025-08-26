import random
from typing import List

def stage_1():
    print("=" * 60)
    print("ÉTAPE 1: Version simplifiée (2 couleurs, 4 choix)")
    print("=" * 60)
    
    possibles_colors = ["rouge", "bleu", "vert", "jaune"]
    secret_code = ["bleu", "rouge"]
    max_try = 12
    
    def validate_try(proposal: List[str]) -> bool:
        if len(proposal) != 2:
            return False
        return all(color in possibles_colors for color in proposal)
    
    def found_combination(proposal: List[str], code: List[str]) -> bool:
        return proposal == code
    
    def setup_game() -> bool:
        print(f"Couleurs possibles: {possibles_colors}")
        print(f"Vous avez {max_try} essais pour trouver la combinaison de 2 couleurs!")
        print()
        
        number_of_try = 1
        while number_of_try <= max_try:
            print(f"Essai {number_of_try}/{max_try}")
            
            try:
                enter = input("Votre proposition (ex: rouge bleu): ").strip().lower()
                proposal = enter.split()
                
                if len(proposal) != 2:
                    print("Erreur: Vous devez proposer exactement 2 couleurs!")
                    continue
                    
                if not validate_try(proposal):
                    print(f"Erreur: Utilisez seulement ces couleurs: {possibles_colors}")
                    continue
                
                if found_combination(proposal, secret_code):
                    print(f"Bravo! Vous avez trouvé en {number_of_try} essai(s)!")
                    return True
                else:
                    print("Ce n'est pas la bonne combinaison. Essayez encore!")
                    number_of_try += 1
                    
            except KeyboardInterrupt:
                print("\nPartie interrompue!")
                return False
        
        print(f"Dommage! Le code était: {secret_code}")
        return False
    
    setup_game()

if __name__ == "__main__":
    stage_1()