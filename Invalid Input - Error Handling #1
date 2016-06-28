def get_count(*words):

    # default return value
    ret = {"vowels":0,"consonants":0}
    
    vowels = {'a','e','i','o','u'}
    consonants = {'b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q','r','s','t','v','w','x','y','z'}
    
    # Test for None
    if words is None:
        return ret
    
    # Loop through all words
    for word in words:
        try:
            word = str.lower(word)
        except TypeError:
            return ret
        #Loop through all letters
        for c in word:
            if c in vowels:
                ret['vowels'] += 1
            if c in consonants:
                ret['consonants'] += 1
    return ret
