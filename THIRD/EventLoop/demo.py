def f3():
    print("Third 1")
    print("Third 2")
def f2():
    print("Second 1")
    f3()
    print("Second 2")
def f1():
    print("FIRST 1")
    f2()
    print("FIRST 2")

if __name__=="__main__":
    f1()