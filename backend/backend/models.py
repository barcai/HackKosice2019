import peewee

database = peewee.MySQLDatabase('my_app', user='app', password='db_password', host='10.1.0.8', port=3316)


class BaseModel(peewee.Model):
    class Meta:
        database = database


class User(BaseModel):
    username = peewee.CharField(unique=True)
    password = peewee.CharField()
    experience = peewee.BigIntegerField(default=0)


class Merchant(BaseModel):
    name = peewee.CharField(primary_key=True)
    type = peewee.CharField(null=False)

    @classmethod
    def fetch_distinct_types(cls):
        return [item.type for item in cls.select(cls.type).distinct()]


class Transfer(BaseModel):
    user = peewee.ForeignKeyField(User, backref='user')
    type = peewee.CharField()
    debit_credit = peewee.CharField()
    date = peewee.DateField()
    amount = peewee.FloatField()
    location = peewee.CharField()
    merchant = peewee.ForeignKeyField(Merchant, backref='merchant', null=True)
    description = peewee.TextField(null=True)

    @classmethod
    def x(cls):
        categories = Merchant.fetch_distinct_types()
        (cls.select(peewee.fn.SUM(cls.amount))
                 .where(cls.merchant.is_null(False))
                 .group_by(categories))
