import random
from typing import List, Tuple

def stage_4():
    print("=" * 60)
    print("ÉTAPE 4: Code généré aléatoirement")
    print("=" * 60)
    
    possibles_colors = ["rouge", "bleu", "vert", "jaune", "violet", "orange", "rose", "cyan"]
    code_length = 4
    max_try = 12
    same_color_authorization = True
    
    def secret_code_generator(length: int, colors: List[str], repetitions: bool = True) -> List[str]:
        if not repetitions and length > len(colors):
            raise ValueError("Impossible de générer un code sans répétitions plus long que le nombre de couleurs!")
        
        if repetitions:
            return [random.choice(colors) for _ in range(length)]
        else:
            return random.sample(colors, length)
    
    def validate_proposal(proposal: List[str], colors: List[str], length: int) -> bool:
        if len(proposal) != length:
            return False
        return all(color in colors for color in proposal)
    
    def founded_combination(proposal: List[str], code: List[str]) -> bool:
        return proposal == code
    
    def calculated_feedback(proposal: List[str], code: List[str]) -> Tuple[int, int]:
        code_copy = code[:]
        prop_copy = proposal[:]
        well_placed = 0
        for i in range(len(prop_copy)):
            if prop_copy[i] == code_copy[i]:
                well_placed += 1
                code_copy[i] = None
                prop_copy[i] = None
        
        wrong_placed = 0
        for i in range(len(prop_copy)):
            if prop_copy[i] is not None:
                for j in range(len(code_copy)):
                    if code_copy[j] == prop_copy[i]:
                        wrong_placed += 1
                        code_copy[j] = None
                        break
        
        return well_placed, wrong_placed
    
    def setup_game() -> bool:
        secret_code = secret_code_generator(code_length, possibles_colors, same_color_authorization)
        print(f"Couleurs possibles: {possibles_colors}")
        print(f"Longueur: {code_length}, Répétitions: {'Oui' if same_color_authorization else 'Non'}")
        print()
        
        historical = []
        
        for number_of_try in range(1, max_try + 1):
            print(f"Essai {number_of_try}/{max_try}")
            
            try:
                enter = input(f"Votre proposition ({code_length} couleurs): ").strip().lower()
                proposal = enter.split()
                
                if not validate_proposal(proposal, possibles_colors, code_length):
                    print(f"Erreur: {code_length} couleurs parmi: {possibles_colors}")
                    continue
                
                well_placed, wrong_placed = calculated_feedback(proposal, secret_code)
                historical.append((number_of_try, proposal[:], well_placed, wrong_placed))
                
                if founded_combination(proposal, secret_code):
                    print(f"Victoire! Code trouvé en {number_of_try} essai(s)!")
                    print(f"Le code secret était: {secret_code}")
                    return True
                else:
                    print(f"Feedback: {well_placed} bien placée(s), {wrong_placed} mal placée(s)")
                    
                    if number_of_try > 1:
                        show_historical = input("Voir l'historique? (o/n): ").strip().lower()
                        if show_historical == 'o':
                            print("\n--- Historique ---")
                            for h_try, h_prop, h_wellp, h_wrongp in historical:
                                print(f"Essai {h_try}: {h_prop} → {h_wellp}✅ {h_wrongp}⚠️")
                            print("----------------\n")
                    
            except KeyboardInterrupt:
                print("\nPartie interrompue!")
                print(f"Le code secret était: {secret_code}")
                return False
        
        print(f"Défaite! Le code secret était: {secret_code}")
        return False
    
    setup_game()

if __name__ == "__main__":
    stage_4()
