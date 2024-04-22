from app import create_app
import os

app = create_app()

if __name__ == '__main__':
    app.run(port=os.environ.get('PORT'), debug=os.environ.get('DEBUG'))
