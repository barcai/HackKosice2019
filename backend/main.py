database = MySQLDatabase('my_app', user='app', password='db_password', host='10.1.0.8', port=3316)

class BaseModel(Model):
    class Meta:
        database = database

class User(BaseModel):
    username = CharField(unique=True)
    password = CharField()
    experience = BigIntegerField()

class AccountData(BaseModel):
    username = CharField()
   	debit_credit = CharField()
    date = DateField()
    amount = FloatField()
    merchant_type = CharField()


def http(request):
    """Responds to any HTTP request.
    Args:
        request (flask.Request): HTTP request object.
    Returns:
        The response text or any set of values that can be turned into a
        Response object using
        `make_response <http://flask.pocoo.org/docs/1.0/api/#flask.Flask.make_response>`.
    """
    return f'Hello World!'

def getTopExpense():

	import mysql.connector

	mydb = mysql.connector.connect(
	  host="localhost",
	  user="yourusername",
	  passwd="yourpassword",
	  database="mydatabase"
	)

	mycursor = mydb.cursor()

	mycursor.execute("select distinct Merchant_type from data")

	categories = mycursor.fetchall()

	monthlyExpenses = {}

	for category in categories

		mycursor.execute("SELECT SUM(Amount) as Total FROM data GROUP BY YEAR(Date), MONTH(Date) WHERE Merchant_Type = '" + category + "' and Date>add_months(sysdate,-6)")
		monthlySum = mycursor.fetchall()

		allEqual = len(set(monthlySum)) <= 1

		if(allEqual) monthlyExpenses.append(category)

	mycursor.execute("SELECT Merchant_Type, SUM (Amount) FROM data GROUP BY Merchant_Type WHERE Debit/Credit = 'Debit' and Date>timestampadd(month, -6, sysdate())")
	catSums = mycursor.fetchall()

	[catSums.pop(x) for x in monthlyExpenses if x in catSums.keys()]

	topExpense = max(catSums key=catSums.get)

	mycursor.execute("SELECT SUM(Amount) FROM data GROUP BY YEAR(Date), MONTH(Date) WHERE Merchant_Type = '" + topExpense + "' order by YEAR(Date), MONTH(Date) desc limit 6")
	topExpenseMonthly = mycursor.fetchall()

	mycursor.execute("SELECT SUM(Amount) FROM data GROUP BY YEAR(Date), MONTH(Date) WHERE Merchant_Type = '" + topExpense + "' order by YEAR(Date), MONTH(Date) desc limit 1")
	current = mycursor.fetchall()

	average = sum(topExpenseMonthly) / len(topExpenseMonthly) 

	if(average>current){

	sql = "UPDATE users SET experience = experience + 50"

	mycursor.execute(sql)

	mydb.commit()


	return [DRAW GRAPH AND GIVE FEEDBACK]
	}
	else if(current - average > 50){

	[GIVE WARNING]

	}
	else return

def initDB():








