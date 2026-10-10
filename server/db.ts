import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_DIR = path.resolve(__dirname, '../data');
const DB_FILE = path.join(DATA_DIR, 'academy_store.json');

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

export interface UserAccount {
  id: string;
  name: string;
  urduName?: string;
  email: string;
  role: 'student' | 'parent' | 'teacher' | 'admin';
  passwordHash: string; // demo pin or password
  studentId?: string;
  teacherId?: string;
  parentId?: string;
  avatarUrl: string;
  phone: string;
  createdAt: string;
}

export interface AttendanceItem {
  id: string;
  studentId: string;
  studentName: string;
  classId: string;
  courseName: string;
  teacherName: string;
  date: string;
  time: string;
  status: 'present' | 'absent' | 'late' | 'excused';
  remarks: string;
}

export interface AudioSubmission {
  id: string;
  studentId: string;
  studentName: string;
  courseName: string;
  surahName: string;
  ayahRange: string;
  audioDataUrl: string;
  durationSeconds: number;
  submittedAt: string;
  status: 'pending' | 'reviewed';
  studentNotes?: string;
  teacherFeedback?: {
    teacherName: string;
    audioDataUrl?: string;
    writtenRemarks: string;
    makharijScore: number;
    tajweedScore: number;
    reviewedAt: string;
  };
}

export interface HomeworkItem {
  id: string;
  studentId: string;
  title: string;
  courseName: string;
  surahOrTopic: string;
  ayahRange?: string;
  assignedDate: string;
  dueDate: string;
  status: 'pending' | 'submitted' | 'graded';
  description: string;
  audioReferenceUrl?: string;
  submittedAudioUrl?: string;
  submittedNotes?: string;
  submittedDate?: string;
  teacherGrade?: string;
  teacherRemarks?: string;
}

export interface FeeRecord {
  id: string;
  invoiceNumber: string;
  studentId: string;
  studentName: string;
  planName: string;
  amount: number;
  currency: string;
  status: 'paid' | 'pending' | 'overdue';
  dueDate: string;
  paidDate?: string;
  paymentMethod?: string;
}

export interface NotificationItem {
  id: string;
  userId: string;
  title: string;
  message: string;
  type: 'class' | 'homework' | 'feedback' | 'fee' | 'system';
  read: boolean;
  createdAt: string;
  link?: string;
}

export interface LearningPath {
  studentId: string;
  studentName: string;
  ageGroup: string;
  currentLevel: 'Beginner (Qaida)' | 'Intermediate (Nazra & Tajweed)' | 'Advanced (Hifz & Tafsir)' | 'New Muslim Foundation';
  primaryGoal: string;
  daysPerWeek: number;
  recommendedCourse: string;
  stage: string;
  milestones: {
    id: string;
    title: string;
    duration: string;
    status: 'completed' | 'in-progress' | 'upcoming';
    description: string;
  }[];
  updatedAt: string;
}

export interface AcademyStore {
  users: UserAccount[];
  attendance: AttendanceItem[];
  audioSubmissions: AudioSubmission[];
  homework: HomeworkItem[];
  feeRecords: FeeRecord[];
  notifications: NotificationItem[];
  learningPaths: Record<string, LearningPath>;
  announcements: {
    id: string;
    title: string;
    message: string;
    date: string;
    priority: 'normal' | 'urgent';
  }[];
}

// Initial seed data
const initialData: AcademyStore = {
  users: [
    {
      id: 'usr-student-1',
      name: 'Zaid Khan',
      urduName: 'زید خان',
      email: 'zaid@student.noorulhuda.com',
      role: 'student',
      passwordHash: '123456',
      studentId: 'NUH-8421',
      avatarUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=150&auto=format&fit=crop&q=80',
      phone: '+44 7911 123456',
      createdAt: '2024-01-15'
    },
    {
      id: 'usr-student-2',
      name: 'Maryam Khan',
      urduName: 'مریم خان',
      email: 'maryam@student.noorulhuda.com',
      role: 'student',
      passwordHash: '123456',
      studentId: 'NUH-9102',
      avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      phone: '+44 7911 123456',
      createdAt: '2024-02-01'
    },
    {
      id: 'usr-parent-1',
      name: 'Brother Tariq Khan',
      urduName: 'طارق خان',
      email: 'tariq.khan@parent.noorulhuda.com',
      role: 'parent',
      passwordHash: '123456',
      parentId: 'PAR-402',
      avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      phone: '+44 7911 123456',
      createdAt: '2024-01-15'
    },
    {
      id: 'usr-teacher-1',
      name: 'Sheikh Omar Al-Azhari',
      urduName: 'الشیخ عمر الازہری',
      email: 'omar@teacher.noorulhuda.com',
      role: 'teacher',
      passwordHash: '123456',
      teacherId: 'TCH-101',
      avatarUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80',
      phone: '+92 313 0958451',
      createdAt: '2023-08-10'
    },
    {
      id: 'usr-admin-1',
      name: 'Administrator (Director)',
      urduName: 'مدیر اکیڈمی',
      email: 'admin@noorulhuda.com',
      role: 'admin',
      passwordHash: 'admin123',
      avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80',
      phone: '+92 313 0958451',
      createdAt: '2023-01-01'
    }
  ],
  attendance: [
    {
      id: 'att-1',
      studentId: 'NUH-8421',
      studentName: 'Zaid Khan',
      classId: 'cls-101',
      courseName: 'Tajweed-ul-Quran & Makharij',
      teacherName: 'Sheikh Omar Al-Azhari',
      date: '2026-09-24',
      time: '18:00 - 18:30 GMT',
      status: 'present',
      remarks: 'Excellent focus on Ghunnah rules in Surah Al-Mulk.'
    },
    {
      id: 'att-2',
      studentId: 'NUH-8421',
      studentName: 'Zaid Khan',
      classId: 'cls-102',
      courseName: 'Tajweed-ul-Quran & Makharij',
      teacherName: 'Sheikh Omar Al-Azhari',
      date: '2026-09-22',
      time: '18:00 - 18:30 GMT',
      status: 'present',
      remarks: 'Reviewed Al-Ikhfa Ash-Shafawi.'
    },
    {
      id: 'att-3',
      studentId: 'NUH-8421',
      studentName: 'Zaid Khan',
      classId: 'cls-103',
      courseName: 'Tajweed-ul-Quran & Makharij',
      teacherName: 'Sheikh Omar Al-Azhari',
      date: '2026-09-20',
      time: '18:00 - 18:30 GMT',
      status: 'late',
      remarks: 'Joined 5 mins late; completed all exercises satisfactorily.'
    },
    {
      id: 'att-4',
      studentId: 'NUH-8421',
      studentName: 'Zaid Khan',
      classId: 'cls-104',
      courseName: 'Tajweed-ul-Quran & Makharij',
      teacherName: 'Sheikh Omar Al-Azhari',
      date: '2026-09-17',
      time: '18:00 - 18:30 GMT',
      status: 'present',
      remarks: 'Surah Al-Qalam Ayah 1-15 recitation passed.'
    },
    {
      id: 'att-5',
      studentId: 'NUH-9102',
      studentName: 'Maryam Khan',
      classId: 'cls-201',
      courseName: 'Noorani Qaida & Basic Arabic',
      teacherName: 'Ustadha Fatima Al-Zahra',
      date: '2026-09-24',
      time: '17:00 - 17:30 GMT',
      status: 'present',
      remarks: 'Lesson 8: Tanween completed with high accuracy.'
    }
  ],
  audioSubmissions: [
    {
      id: 'aud-sub-1',
      studentId: 'NUH-8421',
      studentName: 'Zaid Khan',
      courseName: 'Tajweed-ul-Quran & Makharij',
      surahName: 'Surah Al-Mulk',
      ayahRange: 'Ayah 1 - 10',
      audioDataUrl: '',
      durationSeconds: 94,
      submittedAt: '2026-09-24T19:30:00Z',
      status: 'reviewed',
      studentNotes: 'Practiced Ikhfa and heavy letters (Kh, Ssa, Dhad).',
      teacherFeedback: {
        teacherName: 'Sheikh Omar Al-Azhari',
        writtenRemarks: 'MashaAllah, very melodious and fluent! Pay careful attention to the elongation of Madd Munfasil in Ayah 4 (4 counts).',
        makharijScore: 92,
        tajweedScore: 95,
        reviewedAt: '2026-09-24T21:15:00Z'
      }
    },
    {
      id: 'aud-sub-2',
      studentId: 'NUH-8421',
      studentName: 'Zaid Khan',
      courseName: 'Quran Memorization (Hifz)',
      surahName: 'Surah An-Naba',
      ayahRange: 'Ayah 1 - 20 (Sabaq)',
      audioDataUrl: '',
      durationSeconds: 120,
      submittedAt: '2026-09-25T01:00:00Z',
      status: 'pending',
      studentNotes: 'Daily new memorization portion submitted for teacher review.'
    }
  ],
  homework: [
    {
      id: 'hw-1',
      studentId: 'NUH-8421',
      title: 'Recite Surah Al-Mulk (Ayah 1-10)',
      courseName: 'Tajweed-ul-Quran & Makharij',
      surahOrTopic: 'Surah Al-Mulk',
      ayahRange: '1-10',
      assignedDate: '2026-09-24',
      dueDate: '2026-09-26',
      status: 'submitted',
      description: 'Record audio focusing on clear pronunciation of heavy letters and noon saakin rules.',
      submittedNotes: 'Uploaded recitation recording in the audio practice section.',
      submittedDate: '2026-09-24',
      teacherGrade: 'A (94%)',
      teacherRemarks: 'Excellent effort. Clear articulation of throat letters.'
    },
    {
      id: 'hw-2',
      studentId: 'NUH-8421',
      title: 'Memorize Surah An-Naba (Ayah 1-20)',
      courseName: 'Quran Memorization (Hifz)',
      surahOrTopic: 'Surah An-Naba',
      ayahRange: '1-20',
      assignedDate: '2026-09-25',
      dueDate: '2026-09-27',
      status: 'pending',
      description: 'Daily Sabaq: Repeat 20 times before bedtime and recite by heart to parents.',
    },
    {
      id: 'hw-3',
      studentId: 'NUH-8421',
      title: 'Write Definitions: Izhar vs Ikhfa',
      courseName: 'Tajweed Theory',
      surahOrTopic: 'Noon Saakin Rules',
      assignedDate: '2026-09-23',
      dueDate: '2026-09-25',
      status: 'graded',
      description: 'Summarize the letters of Izhar Halqi and give 2 Quranic examples.',
      submittedNotes: 'Izhar letters are Hamzah, Ha, Ain, Hha, Ghain, Kha. Example: Man Aamana.',
      submittedDate: '2026-09-24',
      teacherGrade: 'A+ (98%)',
      teacherRemarks: 'Accurate examples and scholarly formatting!'
    }
  ],
  feeRecords: [
    {
      id: 'inv-2026-09-01',
      invoiceNumber: 'INV-NUH-8421-SEP26',
      studentId: 'NUH-8421',
      studentName: 'Zaid Khan',
      planName: 'Standard Plan (3 Classes/Week)',
      amount: 59,
      currency: 'USD',
      status: 'paid',
      dueDate: '2026-09-05',
      paidDate: '2026-09-03',
      paymentMethod: 'Credit Card (Stripe / Bank Remittance)'
    },
    {
      id: 'inv-2026-10-01',
      invoiceNumber: 'INV-NUH-8421-OCT26',
      studentId: 'NUH-8421',
      studentName: 'Zaid Khan',
      planName: 'Standard Plan (3 Classes/Week)',
      amount: 59,
      currency: 'USD',
      status: 'pending',
      dueDate: '2026-10-05'
    },
    {
      id: 'inv-2026-09-02',
      invoiceNumber: 'INV-NUH-9102-SEP26',
      studentId: 'NUH-9102',
      studentName: 'Maryam Khan',
      planName: 'Basic Plan (2 Classes/Week)',
      amount: 40,
      currency: 'USD',
      status: 'paid',
      dueDate: '2026-09-05',
      paidDate: '2026-09-04',
      paymentMethod: 'PayPal / Bank Remittance'
    }
  ],
  notifications: [
    {
      id: 'notif-1',
      userId: 'usr-student-1',
      title: 'Upcoming Class Reminder',
      message: 'Your live Tajweed class with Sheikh Omar Al-Azhari begins tomorrow at 18:00 GMT.',
      type: 'class',
      read: false,
      createdAt: '2026-09-25T01:00:00Z',
      link: '#classroom'
    },
    {
      id: 'notif-2',
      userId: 'usr-student-1',
      title: 'Teacher Feedback Ready',
      message: 'Sheikh Omar evaluated your recitation of Surah Al-Mulk. Score: 95/100.',
      type: 'feedback',
      read: false,
      createdAt: '2026-09-24T21:16:00Z',
      link: '#homework'
    },
    {
      id: 'notif-3',
      userId: 'usr-student-1',
      title: 'New Assignment Posted',
      message: 'New Sabaq: Memorize Surah An-Naba (Ayah 1-20) due Sep 27.',
      type: 'homework',
      read: true,
      createdAt: '2026-09-25T00:30:00Z',
      link: '#homework'
    },
    {
      id: 'notif-4',
      userId: 'usr-parent-1',
      title: 'Weekly Student Report Ready',
      message: 'Zaid Khan achieved 95% attendance and 94% average homework score this week.',
      type: 'system',
      read: false,
      createdAt: '2026-09-24T22:00:00Z'
    }
  ],
  learningPaths: {
    'NUH-8421': {
      studentId: 'NUH-8421',
      studentName: 'Zaid Khan',
      ageGroup: 'Youth (12-16)',
      currentLevel: 'Intermediate (Nazra & Tajweed)',
      primaryGoal: 'Master full Quran Tajweed & Memorize Juz Amma and Juz Tabarak',
      daysPerWeek: 3,
      recommendedCourse: 'Tajweed-ul-Quran & Makharij Masterclass',
      stage: 'Stage 3: Advanced Rules & Juz 29-30 Mastery',
      milestones: [
        {
          id: 'ms-1',
          title: 'Arabic Makharij (Articulations) Certification',
          duration: '4 Weeks',
          status: 'completed',
          description: 'Throat, tongue, lip, and nasal cavity letter classifications.'
        },
        {
          id: 'ms-2',
          title: 'Noon & Meem Saakin Rules Mastery',
          duration: '3 Weeks',
          status: 'completed',
          description: 'Izhar, Idgham (with/without Ghunnah), Iqlab, and Ikhfa.'
        },
        {
          id: 'ms-3',
          title: 'Madd Rules (Natural, Obligatory, Permissible)',
          duration: '4 Weeks',
          status: 'in-progress',
          description: 'Timing counts for 2, 4, 5, and 6 Harakat across Surah Al-Mulk.'
        },
        {
          id: 'ms-4',
          title: 'Hifz of Juz Amma (Complete 37 Surahs)',
          duration: '12 Weeks',
          status: 'in-progress',
          description: 'Fluency, flawless Tajweed, and retention with Sabak/Sabqi/Manzil.'
        },
        {
          id: 'ms-5',
          title: 'Waqf & Ibtida (Stopping & Starting Rules)',
          duration: '4 Weeks',
          status: 'upcoming',
          description: 'Correct pauses to preserve sacred meanings of Quranic verses.'
        }
      ],
      updatedAt: '2026-09-25T02:00:00Z'
    }
  },
  announcements: [
    {
      id: 'ann-1',
      title: '🌙 International Quran Recitation Competition Announced',
      message: 'Noor Ul Huda students are invited to register for the Annual Virtual Tilawat Contest. Prizes and Ijazah certificates awarded by Al-Azhar scholars.',
      date: '2026-09-20',
      priority: 'urgent'
    },
    {
      id: 'ann-2',
      title: '✨ 24/7 Digital Classroom Upgrade Live',
      message: 'Our digital classroom now features high-speed WebRTC audio/video and interactive Mushaf with colored Tajweed verses.',
      date: '2026-09-24',
      priority: 'normal'
    }
  ]
};

class DatabaseManager {
  private data: AcademyStore;

  constructor() {
    this.data = this.loadData();
  }

  private loadData(): AcademyStore {
    try {
      if (fs.existsSync(DB_FILE)) {
        const raw = fs.readFileSync(DB_FILE, 'utf-8');
        return JSON.parse(raw);
      }
    } catch (err) {
      console.warn('Could not read existing database file, initializing seed data:', err);
    }
    this.saveData(initialData);
    return initialData;
  }

  private saveData(dataToSave: AcademyStore) {
    try {
      fs.writeFileSync(DB_FILE, JSON.stringify(dataToSave, null, 2), 'utf-8');
    } catch (err) {
      console.error('Failed to write database file:', err);
    }
  }

  // Users
  getUserByEmail(email: string) {
    return this.data.users.find(u => u.email.toLowerCase() === email.toLowerCase());
  }

  getUserById(id: string) {
    return this.data.users.find(u => u.id === id);
  }

  getUserByStudentId(studentId: string) {
    return this.data.users.find(u => u.studentId === studentId);
  }

  getAllUsers() {
    return this.data.users;
  }

  addUser(user: UserAccount) {
    this.data.users.push(user);
    this.saveData(this.data);
    return user;
  }

  // Attendance
  getAttendanceForStudent(studentId: string) {
    return this.data.attendance.filter(a => a.studentId === studentId);
  }

  getAllAttendance() {
    return this.data.attendance;
  }

  markAttendance(record: Omit<AttendanceItem, 'id'>) {
    // Prevent duplicate attendance for same student on same class/date
    const existingIndex = this.data.attendance.findIndex(
      a => a.studentId === record.studentId && (a.classId === record.classId || a.date === record.date)
    );
    const newId = `att-${Date.now()}`;
    const newRecord: AttendanceItem = { id: newId, ...record };

    if (existingIndex >= 0) {
      this.data.attendance[existingIndex] = { ...this.data.attendance[existingIndex], ...record };
      this.saveData(this.data);
      return this.data.attendance[existingIndex];
    } else {
      this.data.attendance.unshift(newRecord);
      this.saveData(this.data);
      return newRecord;
    }
  }

  // Audio Submissions
  getAudioSubmissions(studentId?: string) {
    if (studentId) {
      return this.data.audioSubmissions.filter(s => s.studentId === studentId);
    }
    return this.data.audioSubmissions;
  }

  addAudioSubmission(submission: Omit<AudioSubmission, 'id' | 'submittedAt' | 'status'>) {
    const newRecord: AudioSubmission = {
      id: `aud-${Date.now()}`,
      ...submission,
      submittedAt: new Date().toISOString(),
      status: 'pending'
    };
    this.data.audioSubmissions.unshift(newRecord);
    this.saveData(this.data);
    return newRecord;
  }

  reviewAudioSubmission(id: string, feedback: NonNullable<AudioSubmission['teacherFeedback']>) {
    const item = this.data.audioSubmissions.find(s => s.id === id);
    if (item) {
      item.status = 'reviewed';
      item.teacherFeedback = feedback;
      this.saveData(this.data);
      return item;
    }
    return null;
  }

  // Homework
  getHomework(studentId?: string) {
    if (studentId) {
      return this.data.homework.filter(h => h.studentId === studentId);
    }
    return this.data.homework;
  }

  submitHomework(id: string, notes: string, audioUrl?: string) {
    const hw = this.data.homework.find(h => h.id === id);
    if (hw) {
      hw.status = 'submitted';
      hw.submittedNotes = notes;
      if (audioUrl) hw.submittedAudioUrl = audioUrl;
      hw.submittedDate = new Date().toISOString().split('T')[0];
      this.saveData(this.data);
      return hw;
    }
    return null;
  }

  gradeHomework(id: string, grade: string, remarks: string) {
    const hw = this.data.homework.find(h => h.id === id);
    if (hw) {
      hw.status = 'graded';
      hw.teacherGrade = grade;
      hw.teacherRemarks = remarks;
      this.saveData(this.data);
      return hw;
    }
    return null;
  }

  createHomework(hw: Omit<HomeworkItem, 'id' | 'status' | 'assignedDate'>) {
    const newItem: HomeworkItem = {
      id: `hw-${Date.now()}`,
      ...hw,
      assignedDate: new Date().toISOString().split('T')[0],
      status: 'pending'
    };
    this.data.homework.unshift(newItem);
    this.saveData(this.data);
    return newItem;
  }

  // Fees
  getFeeRecords(studentId?: string) {
    if (studentId) {
      return this.data.feeRecords.filter(f => f.studentId === studentId);
    }
    return this.data.feeRecords;
  }

  updateFeeStatus(id: string, status: 'paid' | 'pending' | 'overdue', paymentMethod?: string) {
    const fee = this.data.feeRecords.find(f => f.id === id);
    if (fee) {
      fee.status = status;
      if (status === 'paid') {
        fee.paidDate = new Date().toISOString().split('T')[0];
        if (paymentMethod) fee.paymentMethod = paymentMethod;
      }
      this.saveData(this.data);
      return fee;
    }
    return null;
  }

  // Notifications
  getNotifications(userId: string) {
    return this.data.notifications.filter(n => n.userId === userId || n.userId === 'all');
  }

  markNotificationAsRead(id: string) {
    const notif = this.data.notifications.find(n => n.id === id);
    if (notif) {
      notif.read = true;
      this.saveData(this.data);
      return notif;
    }
    return null;
  }

  addNotification(notif: Omit<NotificationItem, 'id' | 'createdAt' | 'read'>) {
    const newNotif: NotificationItem = {
      id: `notif-${Date.now()}`,
      ...notif,
      read: false,
      createdAt: new Date().toISOString()
    };
    this.data.notifications.unshift(newNotif);
    this.saveData(this.data);
    return newNotif;
  }

  // Learning Paths
  getLearningPath(studentId: string) {
    return this.data.learningPaths[studentId] || null;
  }

  saveLearningPath(pathData: LearningPath) {
    this.data.learningPaths[pathData.studentId] = pathData;
    this.saveData(this.data);
    return pathData;
  }

  // Announcements
  getAnnouncements() {
    return this.data.announcements;
  }

  // Academy metrics summary
  getAdminMetrics() {
    const totalStudents = this.data.users.filter(u => u.role === 'student').length;
    const totalTeachers = this.data.users.filter(u => u.role === 'teacher').length;
    const totalParents = this.data.users.filter(u => u.role === 'parent').length;
    const activeSubmissions = this.data.audioSubmissions.length;
    const pendingReviews = this.data.audioSubmissions.filter(s => s.status === 'pending').length;
    const paidFees = this.data.feeRecords
      .filter(f => f.status === 'paid')
      .reduce((sum, f) => sum + f.amount, 0);
    const pendingFees = this.data.feeRecords
      .filter(f => f.status === 'pending' || f.status === 'overdue')
      .reduce((sum, f) => sum + f.amount, 0);

    return {
      totalStudents,
      totalTeachers,
      totalParents,
      activeSubmissions,
      pendingReviews,
      paidFees,
      pendingFees,
      recentAttendanceCount: this.data.attendance.length
    };
  }
}

export const db = new DatabaseManager();
