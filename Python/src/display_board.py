def print_helper(val):
    if val==-10:
        return '_'
    elif val==0:
        return 'O'
    elif val==1:
        return  'X'

def display_board(board):
    for row in board:
        col1, col2, col3 = print_helper(row[0]), print_helper(row[1]), print_helper(row[2])
        print(col1, col2, col3)

