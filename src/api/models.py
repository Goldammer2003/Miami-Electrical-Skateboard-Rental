from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(20), unique=False, nullable=False)
    firstName= db.Column(db.String(25), nullable=False)
    lastName= db.Column(db.String(25), nullable=False)
    dob= db.Column(db.String(10), )
    address= db.Column(db.String(120), nullable=False )
    address2= db.Column(db.String(120) )
    city= db.Column(db.String(25) , nullable=False )
    state= db.Column(db.String(25), nullable=False  )
    country= db.Column(db.String(25) , nullable=False )
    zipcode= db.Column(db.String(100), nullable=False )

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
       
            "id": self.id,
            "email": self.email,
            "firstName": self.firstName,
            "lastName": self.lastName,
            "name":self.firstName+ " "+self.lastName,
            "dob": self.dob,
            "address": self.address,
            "address2" :self.address2,
            "city": self.city,
            "state": self.state,
            "country": self.country,
            "zipcode": self.zipcode,
            "userName":self.userName,



            
            # do not serialize the password, its a security breach
        }