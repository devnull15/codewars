jk = [0]
ak = [1]

def john(n):
    global jk
    global ak
    
    for i in xrange(1,n+1):
        t = jk[i-1]
        print "jk is now: " + str(jk)
        ## Check if ak has been computed, if not compute
        try: temp = ak[t]
        except:
            print "Except! Running ann(" + str(t) + ")"
            ann(t)
        print "setting temp..."
        temp = ak[t]
        jk.append(i-temp)
        
    return jk
    
def ann(n):
    global jk
    global ak
    
    for i in xrange(1,n+1):
        t = ak[i-1]
        print "ak is now: " + str(ak)

        ## Check if ak has been computed, if not compute
        try: temp = jk[t]
        except: john(t)
        temp = jk[t]
        ak.append(i-temp)
        
    return ak
    
    
def sum_john(n):
    return 0
    
def sum_ann(n):
    return 0
