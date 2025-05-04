// backend/auth/authController.js
import { registerStudent, loginStudent } from './authService.js';
// import StudentModel from '../models/StudentModel.js';
export async function register(req, res) {
  try {
    const { email,name,password } = req.body;
    if(!email || !name || !password){
      res.status(400).json({
        message:"All the fileds are required"
      })
    }
    const existingUser = await StudentModel.findOne({email});

    // Prevent duplicate email registration (in service or here)
    res.status(201).json({ message: 'Student registered', student: newStudent });
  } catch (err) {
    console.error('Registration error:', err);
    res.status(400).json({ error: err.message });
  }
}
export async function login(req, res) {
  try {
    const { email, password } = req.body;
    const result = await loginStudent(email, password);

    if (!result) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    res.status(200).json({ token: result.token, studentId: result.student._id });

  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ error: err.message });
  }
}
