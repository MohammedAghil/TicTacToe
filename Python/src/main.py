from abc import abstractmethod
from display_board import display_board
from check_win import check_win

class TicTacToe:
    def __init__(self):
        self.board = [[-10 for i in range(3)] for i in range(3)]
        self.number_of_moves_left = 9

    """
    checks if the position is already occupied , if it is then it returns False
    else it changes the value according to the player and the position and finally 
    changes the number of moves by decrementing it by 1
    """
    def check_input(self,player,row,col):
        if self.board[row][col]!=-10:
            return False
        if not player:
            self.board[row][col] = 0
        else:
            self.board[row][col] = 1

        self.number_of_moves_left -= 1
        return True

    def run(self):
        player = False
        while not check_win(self.board,self.number_of_moves_left):
            display_board(self.board)
            row, col = map(int,input('Select a row and col : ').split(','))
            if not self.check_input(player,row,col):
                print('Invalid input')
                continue

            player = not player

        display_board(self.board)
        if check_win(self.board,self.number_of_moves_left) == 3:
            print('It is a Draw')
        else:
            print('Player',check_win(self.board,self.number_of_moves_left),'Won!')

game = TicTacToe()
game.run()
