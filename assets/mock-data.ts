export const mockCursos = [
  {
    id: 1,
    name: 'Tópicos Avançados em Ciência da Computação	',
    code: 'CS301',
    teacher: 'Dr. Sarah Johnson',
    room: 'L205',
    schedule: [
      { day: 'Monday', time: '09:00-11:00' },
      { day: 'Wednesday', time: '09:00-11:00' },
      { day: 'Friday', time: '09:00-11:00' }
    ],
    maxAbsences: 15,
    currentAbsences: 3,
    semester: '2025.2',
    finalTests: {
      midterm: { score: 7.5, maxScore: 10 },
      final: { score: null, maxScore: 10 }
    }
  },
  {
    id: 2,
    name: 'Banco de Dados',
    code: 'CS302',
    teacher: 'Prof. Michael Brown',
    room: 'L301',
    schedule: [
      { day: 'Tuesday', time: '14:00-16:00' },
      { day: 'Thursday', time: '14:00-16:00' }
    ],
    maxAbsences: 10,
    currentAbsences: 1,
    semester: '2025.2',
    finalTests: {
      midterm: { score: 9.0, maxScore: 10 },
      final: { score: null, maxScore: 10 }
    }
  },
  {
    id: 3,
    name: 'Engenharia de Software',
    code: 'CS303',
    teacher: 'Dr. Emily Davis',
    room: 'Room 102',
    schedule: [
      { day: 'Monday', time: '14:00-17:00' },
      { day: 'Wednesday', time: '14:00-17:00' }
    ],
    maxAbsences: 20,
    currentAbsences: 7,
    semester: 'Spring 2024',
    finalTests: {
      midterm: { score: 7.8, maxScore: 10 },
      final: { score: null, maxScore: 10 }
    }
  },
  {
    id: 4,
    name: 'Redes de computadores',
    code: 'CS304',
    teacher: 'Prof. James Wilson',
    room: 'Room 203',
    schedule: [
      { day: 'Tuesday', time: '10:00-12:00' },
      { day: 'Thursday', time: '10:00-12:00' }
    ],
    maxAbsences: 15,
    currentAbsences: 12,
    semester: '2025.2',
    finalTests: {
      midterm: { score: 5.0, maxScore: 10 },
      final: { score: null, maxScore: 10 }
    }
  },
  {
    id: 5,
    name: 'Machine Learning',
    code: 'CS305',
    teacher: 'Dr. Lisa Garcia',
    room: 'Room 401',
    schedule: [
      { day: 'Friday', time: '14:00-17:00' }
    ],
    maxAbsences: 10,
    currentAbsences: 2,
    semester: 'Spring 2024',
    finalTests: {
      midterm: { score: 9.75, maxScore: 10 },
      final: { score: null, maxScore: 10 }
    }
  }
];

export const currentStudent = {
  enroll: "2025123456",
  name: "João Silva",
  course: "Ciência da Computação",
  period: "2025.2",
  period_absolute: "6º período",
  shift: "Manhã",
  course_chief: "Dr. Carlos Alberto",
}