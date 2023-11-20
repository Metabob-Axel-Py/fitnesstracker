from flask import Flask, render_template
from models import db, User, Workout, Goal

app = Flask(__name__)
app.config['SECRET_KEY'] = 'your_secret_key'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///fitness.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Initialize the database
db.init_app(app)

# ... other routes and logic

if __name__ == '__main__':
    with app.app_context():
        # Create tables if they do not exist
        db.create_all()
    app.run(debug=True)
