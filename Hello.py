#printing hello world 

print ("hello-world")


def ask_age():
    try:
        age = float(input("Enter your age: "))

        if age <= 0:
            print("Please enter a valid age!")
            ask_age()  # ask again

        elif age >= 18:
            print("You can drive")
        else:
            print("Underage! You cannot drive")

    except ValueError:
        print("Please enter a valid number!")
        ask_age()  # ask again

# Call the function
ask_age()