def row_wise_win_check(board):
    # player 1 wins if sum is 0 and player 2 wins if sum is 3
    for row in board:
        if sum(row) == 3:
            print('row wise win')
            return 2
        elif sum(row) == 0:
            print('row wise win')
            return 1
    return False


def col_wise_win_check(board):
    # player 1 wins if sum is 0 and player 2 wins if sum is 3
    cols = [0, 0, 0]
    for row in board:
        for col in range(len(row)):
            cols[col] += row[col]

    for col in cols:
        if col == 3:
            print('col wise win')
            return 2
        elif col == 0:
            print('col wise win')
            return 1
    return False

def diagonal_wise_win_check(board):
    # player 1 wins if sum is 0 and player 2 wins if sum is 3
    diagonal1 = 0
    for i in range(3):
        diagonal1 += board[i][i]

    if diagonal1 == 3:
        print('diag wise win 3')
        return 2
    elif diagonal1 == 0:
        print('diag wise win 0')
        return 1

    diagonal2 = 0
    for i in range(3):
        diagonal2 += board[2 - i][i]

    if diagonal2 == 3:
        print('diag 2 wise win 3')
        return 2
    elif diagonal2 == 0:
        print('diag 2 wise win 0')
        return 1

    return False


def check_win(board,number_of_moves_left): #Returns an Integer Value

    row_wise_check_result = row_wise_win_check(board)
    if row_wise_check_result: return row_wise_check_result

    col_wise_check_result = col_wise_win_check(board)
    if col_wise_check_result:return  col_wise_check_result

    diagonal_wise_check_result = diagonal_wise_win_check(board)
    if diagonal_wise_check_result: return diagonal_wise_check_result

    if number_of_moves_left > 0:
        return False
    elif number_of_moves_left <= 0:
        return 3