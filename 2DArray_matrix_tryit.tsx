#print the upper triangle 
n1 = int(input("Enter the number of rows:"))		#input statements[matrix row size input]
n2 = int(input("Enter the number of columns:"))	#input statement2[matrix col size input]
# Initialize matrix
matrix = []
print("Enter the entries rowwise:")			#matrix values input[full value) --> msg only
  
# For user input
for i in range(n1):         
    a =[]
    for j in range(n2):      
         a.append(int(input()))			# matrix value input 
    matrix.append(a)					#matrix value 2Dimensional append
  
# For printing the matrix
for i in range(n1):		
    for j in range(i+1):
        print(matrix[i][j],end=" ")	# 2Dimensional matrix print [using 2 loop statements]
    print()

============================================================================================================
#searching of 2D Array

n1 = int(input("Enter the number of rows:"))		#input statements[matrix row size input]
n2 = int(input("Enter the number of columns:"))	#input statement2[matrix col size input]
# Initialize matrix
matrix = []
print("Enter the entries rowwise:")			#matrix values input[full value) --> msg only
  
# For user input
for i in range(n1):         
    a =[]
    for j in range(n2):      
         a.append(int(input()))			# matrix value input 
    matrix.append(a)					#matrix value 2Dimensional append
sno = int(input("Enter searching No:"))
# For printing the matrix
for i in range(n1):		
    for j in range(n1):
        if(sno==matrix[i][j]):
            print("Found at Position:",i+1,j+1)
            break
    print()