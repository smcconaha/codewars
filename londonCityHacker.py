#You are given a sequence of a journey in London, UK. The sequence will contain bus numbers and TFL tube names as strings e.g.
#['Northern', 'Central', 243, 1, 'Victoria']
#Journeys will always only contain a combination of tube names and bus numbers. Each tube journey costs £2.40 and each bus journey costs £1.50. If 
#   there are 2 or more adjacent bus journeys, the bus fare is capped for sets of two adjacent buses and calculated as one bus fare for each set.
#For example: 'Piccadilly', 56, 93, 243, 20, 14 -> "£6.90"
#Your task is to calculate the total cost of the journey and return the cost rounded to 2 decimal places in the format (where x is a number): £x.xx

def london_city_hacker(journey): 
    #define a busCount variable
    bus_count = int(0)
    sum = float(0)
    #loop through the list
    for travel_type in journey:
        print(type(travel_type))
    #IF type is string
        if type(travel_type) == str:
#             print('this is int')
        #  THEN sum is increased by $2.40
            sum = sum + 2.4
            bus_count = 0
#             print(sum)
        elif type(travel_type) == int:
#             print('this is str')
        #   IF count is equal to two
            if bus_count == 2:
        #       THEN no change to SUM
        #       AND count is zeroized
                bus_count = 0
        #   ELSE count is not equal to two
            elif bus_count < 2:
        #       THEN sum is increased by $1.50
                sum = sum + 1.50
        #       AND count is increased by one
                bus_count = bus_count + 2
    #round sum to the nearest tenth
    return f"£{'{0:.2f}'.format(sum)}"