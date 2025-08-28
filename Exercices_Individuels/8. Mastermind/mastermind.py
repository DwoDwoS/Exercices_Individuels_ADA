import customtkinter as ctk
import random

ctk.set_appearance_mode("dark")
ctk.set_default_color_theme("blue")

class MainMenu(ctk.CTk):
    def __init__(self):
        super().__init__()
        self.stage_window = None
        self.title("🅜🅐🅢🅣🅔🅡🅜🅘🅝🅓 - Menu")
        self.geometry("500x400+200+100")

        ctk.CTkLabel(self, text="MASTERMIND PYTHON", font=("Arial", 24, "bold")).pack(pady=30)

        self.stage_buttons = []
        for i, stage_name in enumerate(["Stage 1:\n Version Simplifiée\n (2 couleurs différentes, 4 couleurs disponibles)", "Stage 2:\n Version Étendue\n (4 couleurs différentes, 8 couleurs disponibles)", "Stage 3:\n Avec Répétitions\n(4 couleurs, répétitions autorisées)", "Stage 4:\n Code Aléatoire\n(Configuration avancée)"]):
            btn = ctk.CTkButton(self, text=stage_name, width=200,
                                command=lambda s=i+1: self.open_stage(s))
            btn.pack(pady=10)
            self.stage_buttons.append(btn)

        self.stage_window = None

    def open_stage(self, stage_number: int):
        if self.stage_window is not None and self.stage_window.winfo_exists():
            self.stage_window.lift()
            return

        if stage_number == 1:
            self.stage_window = Stage1App(self)
        elif stage_number == 2:
            self.stage_window = Stage2App(self)
        elif stage_number == 3:
            self.stage_window = Stage3App(self)
        elif stage_number == 4:
            self.stage_window = Stage4App(self)

        self.stage_window.protocol("WM_DELETE_WINDOW", self.on_stage_close)

    def on_stage_close(self):
        if self.stage_window is not None:
            self.stage_window.destroy()
            self.stage_window = None
        else: 
            self.stage_window.focus()

class Stage1App(ctk.CTkToplevel):
    def __init__(self, master):
        super().__init__(master)
        self.title("Stage 1 - Simplifié")
        self.geometry("600x400")
        self.master = master

        self.colors = ["Rouge", "Bleu", "Vert", "Jaune"]
        self.secret_code = ["Rouge", "Bleu"]
        self.max_try = 6
        self.try_number = 0

        self.create_widgets()

    def create_widgets(self):
        ctk.CTkLabel(self, text="Stage 1 - Mastermind Simplifié", font=("Arial", 20, "bold")).pack(pady=20)

        self.feedback_text = ctk.CTkTextbox(self, width=550, height=200, font=("Consolas", 14))
        self.feedback_text.pack(pady=10)
        self.feedback_text.insert("end", "Bienvenue ! Trouvez le code.\n")
        self.feedback_text.configure(state="disabled")

        self.entries = []
        frame_choices = ctk.CTkFrame(self)
        frame_choices.pack(pady=10)
        for i in range(2):
            combo = ctk.CTkComboBox(frame_choices, values=self.colors)
            combo.set(self.colors[0])
            combo.grid(row=0, column=i, padx=10)
            self.entries.append(combo)

        btn_frame = ctk.CTkFrame(self)
        btn_frame.pack(pady=10)

        self.button_validate = ctk.CTkButton(btn_frame, text="Valider", command=self.check_proposal)
        self.button_validate.grid(row=0, column=0, padx=10)

        self.button_replay = ctk.CTkButton(btn_frame, text="Rejouer", command=self.replay_game)
        self.button_replay.grid(row=0, column=1, padx=10)

        self.button_menu = ctk.CTkButton(btn_frame, text="Retour au menu", command=self.return_to_menu)
        self.button_menu.grid(row=0, column=2, padx=10)

    def log_feedback(self, msg):
        self.feedback_text.configure(state="normal")
        self.feedback_text.insert("end", msg + "\n")
        self.feedback_text.see("end")
        self.feedback_text.configure(state="disabled")

    def check_proposal(self):
        if self.try_number >= self.max_try:
            self.log_feedback("Nombre max d'essais atteint !")
            self.button_validate.configure(state="disabled")
            return
        proposal = [c.get() for c in self.entries]
        self.try_number += 1

        well_placed = sum(p == c for p, c in zip(proposal, self.secret_code))
        wrong_placed = sum(min(proposal.count(color), self.secret_code.count(color)) for color in set(proposal)) - well_placed

        if well_placed == len(self.secret_code):
            self.log_feedback(f"Bravo ! Code trouvé {self.secret_code} en {self.try_number} essais")
            self.button_validate.configure(state="disabled")
        else:
            self.log_feedback(f"Essai {self.try_number}/{self.max_try} : {proposal}\n{well_placed} bien placée(s), {wrong_placed} mal placée(s)")
            if self.try_number >= self.max_try:
                self.log_feedback(f"Perdu ! Le code était {self.secret_code}")
                self.button_validate.configure(state="disabled")

    def replay_game(self):
        self.try_number = 0
        self.secret_code = ["Rouge", "Bleu"]
        self.feedback_text.configure(state="normal")
        self.feedback_text.delete("0.0", "end")
        self.feedback_text.insert("end", "Nouvelle partie !\n")
        self.feedback_text.configure(state="disabled")
        self.button_validate.configure(state="normal")
        for c in self.entries:
            c.set(self.colors[0])

    def return_to_menu(self):
        self.destroy()

class Stage2App(ctk.CTkToplevel):
    def __init__(self, master):
        super().__init__(master)
        self.title("Stage 2 - Version étendue")
        self.geometry("650x500")
        self.master = master

        self.colors = ["Rouge", "Bleu", "Vert", "Jaune", "Violet", "Orange", "Rose", "Cyan"]
        self.secret_code = ["Bleu", "Vert", "Rouge", "Violet"]
        self.max_try = 12
        self.try_number = 0

        self.create_widgets()

    def create_widgets(self):
        ctk.CTkLabel(self, text="Stage 2 - 4 couleurs différentes", font=("Arial", 20, "bold")).pack(pady=20)

        self.feedback_text = ctk.CTkTextbox(self, width=600, height=250, font=("Consolas", 14))
        self.feedback_text.pack(pady=10)
        self.feedback_text.insert("end", "Trouvez le code avec 4 couleurs différentes !\n")
        self.feedback_text.configure(state="disabled")

        self.entries = []
        frame_choices = ctk.CTkFrame(self)
        frame_choices.pack(pady=10)
        for i in range(4):
            combo = ctk.CTkComboBox(frame_choices, values=self.colors)
            combo.set(self.colors[i])
            combo.grid(row=0, column=i, padx=10)
            self.entries.append(combo)

        btn_frame = ctk.CTkFrame(self)
        btn_frame.pack(pady=10)

        self.button_validate = ctk.CTkButton(btn_frame, text="Valider", command=self.check_proposal)
        self.button_validate.grid(row=0, column=0, padx=10)

        self.button_replay = ctk.CTkButton(btn_frame, text="Rejouer", command=self.replay_game)
        self.button_replay.grid(row=0, column=1, padx=10)

        self.button_menu = ctk.CTkButton(btn_frame, text="Retour au menu", command=self.return_to_menu)
        self.button_menu.grid(row=0, column=2, padx=10)

    def log_feedback(self, msg):
        self.feedback_text.configure(state="normal")
        self.feedback_text.insert("end", msg + "\n")
        self.feedback_text.see("end")
        self.feedback_text.configure(state="disabled")

    def check_proposal(self):
        if self.try_number >= self.max_try:
            self.log_feedback("Nombre max d'essais atteint !")
            self.button_validate.configure(state="disabled")
            return
        proposal = [c.get() for c in self.entries]
        if len(set(proposal)) != len(proposal):
            self.log_feedback("Toutes les couleurs doivent être différentes !")
            return

        self.try_number += 1
        well_placed = sum(p == c for p, c in zip(proposal, self.secret_code))
        wrong_placed = len(set(proposal) & set(self.secret_code)) - well_placed

        if well_placed == 4:
            self.log_feedback(f"Bravo ! Code trouvé {self.secret_code} en {self.try_number} essais")
            self.button_validate.configure(state="disabled")
        else:
            self.log_feedback(f"Essai {self.try_number}/{self.max_try} : {proposal}\n{well_placed} bien placée(s), {wrong_placed} mal placée(s)")
            if self.try_number >= self.max_try:
                self.log_feedback(f"Perdu ! Le code était {self.secret_code}")
                self.button_validate.configure(state="disabled")

    def replay_game(self):
        self.try_number = 0
        self.feedback_text.configure(state="normal")
        self.feedback_text.delete("0.0", "end")
        self.feedback_text.insert("end", "Nouvelle partie !\n")
        self.feedback_text.configure(state="disabled")
        self.button_validate.configure(state="normal")
        for i, c in enumerate(self.entries):
            c.set(self.colors[i])

    def return_to_menu(self):
        self.destroy()

class Stage3App(ctk.CTkToplevel):
    def __init__(self, master):
        super().__init__(master)
        self.title("Stage 3 - Répétitions autorisées")
        self.geometry("650x500")
        self.master = master

        self.colors = ["Rouge", "Bleu", "Vert", "Jaune", "Violet", "Orange", "Rose", "Cyan"]
        self.secret_code = ["Bleu", "Bleu", "Vert", "Rouge"]
        self.max_try = 12
        self.try_number = 0

        self.create_widgets()

    def create_widgets(self):
        ctk.CTkLabel(self, text="Stage 3 - Répétitions autorisées", font=("Arial", 20, "bold")).pack(pady=20)

        self.feedback_text = ctk.CTkTextbox(self, width=600, height=250, font=("Consolas", 14))
        self.feedback_text.pack(pady=10)
        self.feedback_text.insert("end", "Trouvez le code (répétitions autorisées) !\n")
        self.feedback_text.configure(state="disabled")
        self.code_length = 4

        self.entries = []
        frame_choices = ctk.CTkFrame(self)
        frame_choices.pack(pady=10)
        for i in range(self.code_length):
            combo = ctk.CTkComboBox(frame_choices, values=self.colors)
            combo.set(self.colors[i])
            combo.grid(row=0, column=i, padx=10)
            self.entries.append(combo)

        btn_frame = ctk.CTkFrame(self)
        btn_frame.pack(pady=10)

        self.button_validate = ctk.CTkButton(btn_frame, text="Valider", command=self.check_proposal)
        self.button_validate.grid(row=0, column=0, padx=10)

        self.button_replay = ctk.CTkButton(btn_frame, text="Rejouer", command=self.replay_game)
        self.button_replay.grid(row=0, column=1, padx=10)

        self.button_menu = ctk.CTkButton(btn_frame, text="Retour au menu", command=self.return_to_menu)
        self.button_menu.grid(row=0, column=2, padx=10)

    def log_feedback(self, msg):
        self.feedback_text.configure(state="normal")
        self.feedback_text.insert("end", msg + "\n")
        self.feedback_text.see("end")
        self.feedback_text.configure(state="disabled")

    def check_proposal(self):
        if self.try_number >= self.max_try:
            self.log_feedback("Nombre max d'essais atteint !")
            self.button_validate.configure(state="disabled")
            return
        proposal = [c.get() for c in self.entries]
        self.try_number += 1

        code_copy = self.secret_code[:]
        prop_copy = proposal[:]
        well_placed = 0
        for i in range(len(prop_copy)):
            if prop_copy[i] == code_copy[i]:
                well_placed += 1
                code_copy[i] = None
                prop_copy[i] = None
        wrong_placed = 0
        for i in range(len(prop_copy)):
            if prop_copy[i] is not None and prop_copy[i] in code_copy:
                wrong_placed += 1
                code_copy[code_copy.index(prop_copy[i])] = None

        if well_placed == 4:
            self.log_feedback(f"Bravo ! Code trouvé {self.secret_code} en {self.try_number} essais")
            self.button_validate.configure(state="disabled")
        else:
            self.log_feedback(f"Essai {self.try_number}/{self.max_try} : {proposal}\n{well_placed} bien placée(s), {wrong_placed} mal placée(s)")
            if self.try_number >= self.max_try:
                self.log_feedback(f"Perdu ! Le code était {self.secret_code}")
                self.button_validate.configure(state="disabled")

    def replay_game(self):
        self.try_number = 0
        self.feedback_text.configure(state="normal")
        self.feedback_text.delete("0.0", "end")
        self.feedback_text.insert("end", "Nouvelle partie !\n")
        self.feedback_text.configure(state="disabled")
        self.button_validate.configure(state="normal")
        for i, c in enumerate(self.entries):
            c.set(self.colors[i])

    def return_to_menu(self):
        self.destroy()


class Stage4App(ctk.CTkToplevel):
    def __init__(self, master):
        super().__init__(master)
        self.title("Stage 4 - Code aléatoire")
        self.geometry("650x500")
        self.master = master

        self.colors = ["Rouge", "Bleu", "Vert", "Jaune", "Violet", "Orange", "Rose", "Cyan"]
        self.code_length = 4
        self.max_try = 12
        self.allow_repetitions = True
        self.secret_code = []
        self.try_number = 0

        self.create_widgets()
        self.generate_code()

    def create_widgets(self):
        ctk.CTkLabel(self, text="Stage 4 - Code aléatoire", font=("Arial", 20, "bold")).pack(pady=20)

        self.feedback_text = ctk.CTkTextbox(self, width=600, height=250, font=("Consolas", 14))
        self.feedback_text.pack(pady=10)
        self.feedback_text.insert("end", "Trouvez le code généré aléatoirement !\n")
        self.feedback_text.configure(state="disabled")

        self.entries = []
        frame_choices = ctk.CTkFrame(self)
        frame_choices.pack(pady=10)
        for i in range(self.code_length):
            combo = ctk.CTkComboBox(frame_choices, values=self.colors)
            combo.set(self.colors[0])
            combo.grid(row=0, column=i, padx=10)
            self.entries.append(combo)

        btn_frame = ctk.CTkFrame(self)
        btn_frame.pack(pady=10)

        self.button_validate = ctk.CTkButton(btn_frame, text="Valider", command=self.check_proposal)
        self.button_validate.grid(row=0, column=0, padx=10)

        self.button_replay = ctk.CTkButton(btn_frame, text="Rejouer", command=self.replay_game)
        self.button_replay.grid(row=0, column=1, padx=10)

        self.button_menu = ctk.CTkButton(btn_frame, text="Retour au menu", command=self.return_to_menu)
        self.button_menu.grid(row=0, column=2, padx=10)

    def generate_code(self):
        if self.allow_repetitions:
            self.secret_code = random.choices(self.colors, k=self.code_length)
        else:
            self.secret_code = random.sample(self.colors, k=self.code_length)

    def log_feedback(self, msg):
        self.feedback_text.configure(state="normal")
        self.feedback_text.insert("end", msg + "\n")
        self.feedback_text.see("end")
        self.feedback_text.configure(state="disabled")

    def check_proposal(self):
        if self.try_number >= self.max_try:
            self.log_feedback("Nombre max d'essais atteint !")
            self.button_validate.configure(state="disabled")
            return
        proposal = [c.get() for c in self.entries]
        self.try_number += 1

        code_copy = self.secret_code[:]
        prop_copy = proposal[:]
        well_placed = 0
        for i in range(len(prop_copy)):
            if prop_copy[i] == code_copy[i]:
                well_placed += 1
                code_copy[i] = None
                prop_copy[i] = None
        wrong_placed = 0
        for i in range(len(prop_copy)):
            if prop_copy[i] is not None and prop_copy[i] in code_copy:
                wrong_placed += 1
                code_copy[code_copy.index(prop_copy[i])] = None

        if well_placed == self.code_length:
            self.log_feedback(f"Bravo ! Code trouvé {self.secret_code} en {self.try_number} essais")
            self.button_validate.configure(state="disabled")
        else:
            self.log_feedback(f"Essai {self.try_number}/{self.max_try} : {proposal}\n{well_placed} bien placée(s), {wrong_placed} mal placée(s)")
            if self.try_number >= self.max_try:
                self.log_feedback(f"Perdu ! Le code était {self.secret_code}")
                self.button_validate.configure(state="disabled")

    def replay_game(self):
        self.try_number = 0
        self.generate_code()
        self.feedback_text.configure(state="normal")
        self.feedback_text.delete("0.0", "end")
        self.feedback_text.insert("end", "Nouvelle partie !\n")
        self.feedback_text.configure(state="disabled")
        self.button_validate.configure(state="normal")
        for c in self.entries:
            c.set(self.colors[0])

    def return_to_menu(self):
        self.destroy()

if __name__ == "__main__":
    app = MainMenu()
    app.mainloop()