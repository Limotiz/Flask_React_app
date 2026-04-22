from flask import Flask, request,jsonify

app = Flask(__name__)


# CRUD  students
class Student:
    def __init__(self, id, name,course=None):
        self.id=id
        self.name=name
        self.course=course

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "course": self.course
        }    
# In-memeory data

students = [
    Student(1, "David Musembi", "Software Development"),
    Student(2, "Limotiz Bill", "Cyber Security")
]
 #Looping

def find_student(student_id):
    for student in students:
        if student.id == student_id:
            return student
    return None

# Create
@app.route('/student', methods=["POST"])
def create_student():
    data = request.json

    new_student = Student(id="id", name="name", course="course")
    students.append(new_student)
    return jsonify(new_student.to_dict()), 201

# GET
@app.route("/students/<int:student_id>", methods=["GET"])
def fetch_student(student_id):
    student = find_student(student_id)

    if not student:
        return jsonify({"error": "Student not found"}), 404

    return jsonify(student.to_dict()), 200

@app.route("/students/<int:student_id>", methods=["PUT"])
def update_student(student_id):
    student = find_student(student_id)

    if not student:
        return jsonify({"error": "Student not found"}), 404

    data = request.get_json()

    if not data:
        return jsonify({"error": "No data provided"}), 400

    student.name = data.get("name", student.name)
    student.course = data.get("course", student.course)

    return jsonify(student.to_dict()), 200

#Delete
@app.route("/students/<int:student_id>", methods=["DELETE"])
def delete_student(student_id):
    student = find_student(student_id)

    if not student:
        return jsonify({"error": "Student not found"}), 404

    students.remove(student)

    return jsonify({"message": "Student deleted successfully"}), 200


if __name__ == "__main__":
    app.run(debug=True, port=5000)