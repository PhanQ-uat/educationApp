import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight,
  Award,
  BarChart3,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  FlaskConical,
  GraduationCap,
  Heart,
  LineChart,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Microscope,
  Phone,
  PartyPopper,
  School,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  Users,
  X,
} from 'lucide-react';
import './styles.css';

const navItems = ['Trang chủ', 'Khóa học', 'Lộ trình', 'Giáo viên', 'Lịch học', 'Học phí', 'Liên hệ'];

const contact = {
  phone: '0384359411',
  zalo: '0384359411',
  email: 'chocolatecandydt@gmail.com',
  facebook: 'https://www.facebook.com/thuthuy.phan.146',
  address: 'Trường THCS Nguyễn Văn Trỗi - Krông Păk - Đăk Lăk',
  addressUrl:
    'https://www.facebook.com/TruongTHCSNVT?__cft__[0]=AZZrhUZCNDDsa_-k4LgirwEPbh9GVxZZ_MeU-rt_kMis_n_z1ytIgbOv9au-DHsOld4FcvsFzM6s8HDx93XL6-H9JRnRj_Quay0c5XKfvP1yMD8BaAe-9K1EJa8IYdvxg29sPxTE04EVoQ7cN2iCIw_qwOUiZW6Tabz1_Jgaev458lg6J1XQ50jleoTluzfBEQ2RjEo4L_DrIwLs9JAQfglOKwjm77dLRoCzZm7kG53EZw&__tn__=-]C%2CP-y-R',
};

const badges = ['Luyện đề sát chương trình', 'Theo sát từng học sinh', 'Phù hợp mất gốc & nâng cao'];

const problems = [
  ['Mất gốc kiến thức KHTN/Hóa', BookOpen],
  ['Học trên lớp chưa hiểu sâu', School],
  ['Làm bài tập chậm, sai nhiều', ClipboardCheck],
  ['Sợ kiểm tra, thiếu kỹ năng làm đề', ShieldCheck],
  ['Không biết học theo lộ trình nào', Target],
  ['Cần người kèm và theo sát tiến bộ', Users],
];

const courses = [
  {
    title: 'KHTN lớp 6-9',
    icon: Microscope,
    theme: 'green',
    description: 'Củng cố nền tảng, bám sát SGK và luyện đề kiểm tra theo từng chuyên đề.',
    points: [
      'Củng cố kiến thức nền tảng',
      'Bám sát chương trình SGK',
      'Luyện bài tập theo chuyên đề',
      'Luyện đề giữa kỳ, cuối kỳ',
      'Phù hợp mất gốc, trung bình khá, khá giỏi',
    ],
  },
  {
    title: 'Hóa Học lớp 10-12',
    icon: FlaskConical,
    theme: 'blue',
    description: 'Học chắc lý thuyết, rèn phương pháp giải bài và chuẩn bị kiểm tra, thi cử.',
    points: [
      'Học chắc lý thuyết trọng tâm',
      'Rèn phương pháp giải bài tập',
      'Luyện đề theo từng chuyên đề',
      'Chuẩn bị kiểm tra, học kỳ, tốt nghiệp',
      'Hỗ trợ lấy lại gốc và nâng cao điểm số',
    ],
  },
];

const learningPath = [
  ['Kiểm tra đầu vào', 'Đánh giá nhanh kiến thức hiện tại, thói quen học và mục tiêu điểm số.'],
  ['Xác định điểm yếu', 'Chỉ ra lỗ hổng theo chương, dạng bài và kỹ năng làm đề.'],
  ['Học theo chuyên đề', 'Củng cố lý thuyết, luyện bài tập từ cơ bản đến nâng cao.'],
  ['Luyện đề và theo dõi tiến bộ', 'Làm đề định kỳ, chữa lỗi sai và cập nhật kết quả cho phụ huynh.'],
];

const benefits = [
  ['Lộ trình cá nhân hóa', Target],
  ['Giáo viên theo sát từng học sinh', Users],
  ['Bài tập và đề luyện thường xuyên', ClipboardCheck],
  ['Báo cáo tiến độ cho phụ huynh', LineChart],
  ['Học chắc nền tảng trước khi nâng cao', GraduationCap],
  ['Tập trung vào kết quả thực tế', Award],
];

const formats = [
  {
    title: 'Lớp nhóm nhỏ',
    text: 'Phù hợp học sinh cần tương tác nhiều, được chữa bài và hỏi đáp thường xuyên.',
  },
  {
    title: 'Lớp online',
    text: 'Linh hoạt cho học sinh bận lịch, vẫn có bài tập, điểm danh và theo dõi tiến độ.',
  },
  {
    title: 'Lớp offline',
    text: 'Phù hợp học sinh cần môi trường học tập tập trung và giáo viên kèm sát trực tiếp.',
  },
  {
    title: 'Lớp luyện đề cấp tốc',
    text: 'Tập trung vào kỹ năng làm bài, hệ thống lỗi sai và chiến thuật trước kỳ kiểm tra.',
  },
];

const schedules = [
  ['KHTN 6-7', 'Thứ 3, Thứ 5', '18:00 - 19:30', 'Nhóm nhỏ'],
  ['KHTN 8-9', 'Thứ 2, Thứ 6', '19:45 - 21:15', 'Online/Offline'],
  ['Hóa 10-11', 'Thứ 4, Chủ nhật', '18:30 - 20:00', 'Chuyên đề'],
  ['Hóa 12', 'Thứ 7, Chủ nhật', '08:30 - 10:30', 'Luyện đề'],
];

const tuition = [
  ['Nhóm nhỏ', 'Từ 300.000đ/tháng', '2 buổi/tuần'],
  ['Online', 'Từ 350.000đ/tháng', '2 buổi/tuần'],
  ['Luyện đề cấp tốc', 'Theo khóa', '4-8 buổi/khóa'],
];

const testimonials = [
  ['Con hiểu bài hơn sau 2 tháng, đặc biệt là phần bài tập vận dụng.', 'Phụ huynh học sinh lớp 8'],
  ['Giáo viên theo sát và báo tiến độ rõ ràng, gia đình dễ nắm tình hình.', 'Phụ huynh học sinh lớp 10'],
  ['Đề luyện sát với bài kiểm tra trên lớp nên em tự tin hơn khi làm bài.', 'Học sinh lớp 12'],
];

const celebrationMoments = [
  ['Liên hoan cuối khóa', 'Không khí lớp học ấm áp, học sinh được ghi nhận sau mỗi chặng cố gắng.'],
  ['Chia tay học sinh cuối cấp', 'Lưu lại kỷ niệm đẹp trước khi các em bước vào kỳ thi quan trọng.'],
  ['Vui mừng khi nâng điểm', 'Cùng chúc mừng những tiến bộ nhỏ nhưng rất đáng tự hào của từng học sinh.'],
];

const studentLove = [
  ['/students/hs10.jpg', 'Lớp học đông vui nhưng cô vẫn theo sát từng bạn, ai chưa hiểu đều được hỏi lại.'],
  ['/students/hs8.jpg', 'Những buổi liên hoan với cô lúc nào cũng ấm áp và nhiều kỷ niệm dễ thương.'],
  ['/students/hs7.jpg', 'Cô vừa nghiêm túc vừa gần gũi, học Hóa với cô không còn áp lực như trước.'],
  ['/students/hs6.jpg', 'Em cảm ơn cô vì đã kiên nhẫn chỉ bài và động viên tụi em cố gắng mỗi ngày.'],
  ['/students/hs5.jpg', 'Sau những giờ luyện đề căng thẳng là những bữa liên hoan vui hết nấc.'],
  ['/students/hs4.jpg', 'Lớp cô có cảm giác như một gia đình nhỏ, học nghiêm túc mà vẫn rất vui.'],
  ['/students/hs3.jpg', 'Cô giảng kỹ từng dạng bài nên em biết mình sai ở đâu và sửa nhanh hơn.'],
  ['/students/hs2.jpg', 'Bảng đầy công thức nhưng cô giải thích rất dễ hiểu, càng học càng tự tin.'],
  ['/students/hs1.jpg', 'Cô luôn nhắc tụi em học chắc kiến thức trước, rồi mới luyện đề nâng điểm.'],
];

const faqs = [
  ['Lớp có phù hợp với học sinh mất gốc không?', 'Có. Học sinh sẽ được kiểm tra đầu vào, xác định lỗ hổng và học lại nền tảng trước khi luyện nâng cao.'],
  ['Có kiểm tra đầu vào không?', 'Có. Bài kiểm tra giúp giáo viên tư vấn lớp, lộ trình và mục tiêu học phù hợp.'],
  ['Có lớp online không?', 'Có. Lớp online vẫn có bài tập, chữa bài, điểm danh và cập nhật tiến độ.'],
  ['Phụ huynh có được cập nhật tiến độ không?', 'Có. Phụ huynh được thông tin về chuyên cần, bài tập, điểm luyện đề và nhận xét định kỳ.'],
  ['Học phí như thế nào?', 'Học phí phụ thuộc lớp, sĩ số và hình thức học. Bảng trên là mức tham khảo để phụ huynh dễ dự tính.'],
  ['Có học thử không?', 'Có thể đăng ký học thử hoặc nhận tư vấn trước khi xếp lớp chính thức.'],
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [leadForm, setLeadForm] = useState({
    name: '',
    phone: '',
    grade: '',
    subject: '',
    goal: '',
  });

  const closeMenu = () => setMenuOpen(false);
  const updateLeadField = (field, value) => {
    setLeadForm((current) => ({ ...current, [field]: value }));
  };
  const handleLeadSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent('Đăng ký tư vấn lộ trình học - KHTN & Hóa Master Cô Thuỷ');
    const body = encodeURIComponent(
      [
        'Thông tin đăng ký tư vấn:',
        `Họ tên phụ huynh/học sinh: ${leadForm.name || 'Chưa nhập'}`,
        `Số điện thoại: ${leadForm.phone || 'Chưa nhập'}`,
        `Lớp hiện tại: ${leadForm.grade || 'Chưa chọn'}`,
        `Môn quan tâm: ${leadForm.subject || 'Chưa chọn'}`,
        `Mục tiêu học tập: ${leadForm.goal || 'Chưa nhập'}`,
      ].join('\n')
    );

    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="site-shell">
      {/* Header / Navigation */}
      <header className="site-header">
        <a className="brand" href="#trang-chu" onClick={closeMenu} aria-label="Trang chủ">
          <span className="brand-mark">
            <FlaskConical size={22} />
          </span>
          <span>
            <strong>KHTN & Hóa Master - Cô Thuỷ</strong>
            <small>Lớp 6-12</small>
          </span>
        </a>

        <nav className={menuOpen ? 'nav is-open' : 'nav'} aria-label="Điều hướng chính">
          {navItems.map((item) => (
            <a key={item} href={`#${slugify(item)}`} onClick={closeMenu}>
              {item}
            </a>
          ))}
        </nav>

        <a className="btn btn-primary header-cta" href="#lien-he">
          Đăng ký tư vấn
        </a>

        <button className="menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Mở menu">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero section" id="trang-chu">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">
                <Sparkles size={16} />
                Tuyển sinh lớp KHTN 6-9 & Hóa Học 10-12
              </p>
              <h1>Lớp KHTN 6-9 & Hóa Học 10-12 giúp học sinh nắm chắc kiến thức, luyện đề hiệu quả, nâng điểm rõ rệt</h1>
              <p className="hero-subtitle">
                Lộ trình học rõ ràng cho học sinh mất gốc, cần củng cố, luyện đề kiểm tra hoặc học nâng cao. Giáo viên theo sát từng học sinh và cập nhật tiến độ cho phụ huynh.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary btn-large" href="#lien-he">
                  Đăng ký học thử <ArrowRight size={18} />
                </a>
                <a className="btn btn-secondary btn-large" href="#khoa-hoc">
                  Xem khóa học
                </a>
              </div>
              <div className="badge-row">
                {badges.map((badge) => (
                  <span key={badge}>
                    <CheckCircle2 size={16} />
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            <div className="hero-visual" aria-label="Minh họa lớp học khoa học và hóa học">
              <div className="visual-card main-illustration">
                <div className="board">
                  <span>H2SO4 + BaCl2</span>
                  <strong>BaSO4↓ + 2HCl</strong>
                </div>
                <div className="student-row">
                  <div className="student-card">
                    <BookOpen size={30} />
                    <span>Luyện đề</span>
                  </div>
                  <div className="student-card accent">
                    <BarChart3 size={30} />
                    <span>Theo dõi điểm</span>
                  </div>
                </div>
              </div>
              <div className="floating-note note-one">KHTN 6-9</div>
              <div className="floating-note note-two">Hóa 10-12</div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="section" id="kho-khan">
          <div className="container">
            <SectionHeading eyebrow="Vấn đề thường gặp" title="Con đang gặp khó khăn gì?" text="Các lớp học được thiết kế để xử lý đúng điểm nghẽn: mất gốc, thiếu phương pháp, làm bài chậm hoặc chưa biết luyện đề như thế nào." />
            <div className="problem-grid">
              {problems.map(([text, Icon]) => (
                <article className="problem-card" key={text}>
                  <Icon size={24} />
                  <h3>{text}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Course Section */}
        <section className="section section-soft" id="khoa-hoc">
          <div className="container">
            <SectionHeading eyebrow="Khóa học" title="Chọn đúng lớp theo cấp học và mục tiêu" text="Hai nhóm khóa học chính, bám sát chương trình trên lớp nhưng vẫn đủ linh hoạt cho học sinh cần lấy lại gốc hoặc luyện nâng cao." />
            <div className="course-grid">
              {courses.map((course) => (
                <article className={`course-card ${course.theme}`} key={course.title}>
                  <div className="course-icon">
                    <course.icon size={34} />
                  </div>
                  <h3>{course.title}</h3>
                  <p>{course.description}</p>
                  <ul>
                    {course.points.map((point) => (
                      <li key={point}>
                        <CheckCircle2 size={18} />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <a className="text-link" href="#lien-he">
                    Xem chi tiết <ArrowRight size={16} />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Learning Path Section */}
        <section className="section" id="lo-trinh">
          <div className="container">
            <SectionHeading eyebrow="Lộ trình" title="Lộ trình học rõ ràng" text="Phụ huynh và học sinh luôn biết đang học gì, vì sao cần học phần đó và tiến bộ được đo bằng cách nào." />
            <div className="timeline">
              {learningPath.map(([title, text], index) => (
                <article className="timeline-item" key={title} style={{ '--step-delay': `${index * 120}ms` }}>
                  <span className="step-number">{index + 1}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section section-soft">
          <div className="container">
            <SectionHeading eyebrow="Điểm khác biệt" title="Vì sao nên chọn lớp học này?" text="Tập trung vào sự tiến bộ thực tế: hiểu bài, làm bài đúng hơn, luyện đề đều và phụ huynh nắm được quá trình học." />
            <div className="benefit-grid">
              {benefits.map(([text, Icon]) => (
                <article className="benefit-card" key={text}>
                  <Icon size={24} />
                  <span>{text}</span>
                </article>
              ))}
            </div>
            <div className="inline-cta">
              <div>
                <strong>Chưa biết con nên bắt đầu từ đâu?</strong>
                <p>Nhận tư vấn lộ trình và đề kiểm tra đầu vào miễn phí.</p>
              </div>
              <a className="btn btn-primary" href="#lien-he">
                Nhận đề kiểm tra đầu vào
              </a>
            </div>
          </div>
        </section>

        {/* Teacher Section */}
        <section className="section" id="giao-vien">
          <div className="container teacher-grid">
            <div>
              <p className="eyebrow">Giáo viên</p>
              <h2>Giảng dạy dễ hiểu, kiên nhẫn và theo sát từng học sinh</h2>
              <p>
                Cô Phan Thị Thuy Thuỷ chuyên giảng dạy Hóa học lớp 8, 9, 10, 11, 12; chuyên luyện thi cấp tốc, luyện thi THPT Quốc gia và củng cố nền tảng cho học sinh mất gốc. Với gần 15 năm trong nghề, cô luôn cống hiến hết mình cho sự nghiệp giáo dục và tương lai của từng thế hệ học sinh.
              </p>
              <p>
                Bài giảng của cô chú trọng bản chất, phương pháp giải nhanh và cách trình bày rõ ràng. Kiến thức mới luôn được cô cập nhật, chọn lọc và chuyển hóa thành lộ trình học dễ hiểu. Cô thấu hiểu tâm lý học sinh và phụ huynh, từ đó đưa ra kế hoạch cá nhân phù hợp để từng em tiến bộ vững chắc, tự tin bước vào kiểm tra, thi học kỳ và các kỳ thi quan trọng.
              </p>
              <div className="teacher-points">
                <span><CheckCircle2 size={18} /> Gần 15 năm kinh nghiệm giảng dạy Hóa học THCS & THPT</span>
                <span><CheckCircle2 size={18} /> Chuyên luyện thi cấp tốc, luyện thi THPT Quốc gia</span>
                <span><CheckCircle2 size={18} /> Cá nhân hóa lộ trình theo mục tiêu điểm số của từng học sinh</span>
                <span><CheckCircle2 size={18} /> Dạy dễ hiểu, gần gũi, kiên nhẫn và luôn giải đáp tận tâm</span>
              </div>
              <div className="teacher-contact">
                <a href={contact.facebook} target="_blank" rel="noreferrer">
                  <MessageCircle size={18} /> Facebook cô Thuỷ
                </a>
                <a href={`tel:${contact.phone}`}>
                  <Phone size={18} /> {contact.phone}
                </a>
                <a href={`https://zalo.me/${contact.zalo}`} target="_blank" rel="noreferrer">
                  <MessageCircle size={18} /> Zalo {contact.zalo}
                </a>
                <a href={contact.addressUrl} target="_blank" rel="noreferrer">
                  <MapPin size={18} /> {contact.address}
                </a>
              </div>
            </div>
            <article className="teacher-card">
              <div className="teacher-avatar teacher-photo">
                <img src="/teacher/co.jpg" alt="Cô Phan Thị Thuỷ" />
              </div>
              <h3>Cô Phan Thị Thuy Thuỷ</h3>
              <p>Giáo viên Hóa học 8-12, định hướng học chắc nền tảng, luyện đề sát mục tiêu và đồng hành bền bỉ cùng từng học sinh.</p>
              <div className="rating">
                {[1, 2, 3, 4, 5].map((item) => (
                  <Star key={item} size={18} fill="currentColor" />
                ))}
              </div>
              <div className="teacher-stats">
                <span><strong>15</strong> năm kinh nghiệm</span>
                <span><strong>8-12</strong> lớp Hóa học</span>
                <span><strong>1:1</strong> theo sát mục tiêu</span>
              </div>
            </article>
          </div>
        </section>

        {/* Celebration & Student Moments Section */}
        <section className="section section-soft">
          <div className="container">
            <SectionHeading eyebrow="Khoảnh khắc lớp học" title="Không chỉ học kiến thức, các em còn có kỷ niệm đẹp" text="Bên cạnh các buổi học và luyện đề nghiêm túc, lớp còn có những buổi liên hoan, chia tay cuối khóa và chúc mừng khi học sinh đạt tiến bộ." />
            <div className="moment-grid">
              {celebrationMoments.map(([title, text]) => (
                <article className="moment-card" key={title}>
                  <PartyPopper size={28} />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
            <div className="gallery-intro">
              <p className="eyebrow">
                <Heart size={16} fill="currentColor" />
                Hãy đến với cô
              </p>
              <h2>Chất Lượng - Uy Tín - Kiến Thức Vững</h2>
              <p>Những hình ảnh lớp học, buổi liên hoan và lời nhắn đáng yêu từ học sinh là minh chứng rõ nhất cho một môi trường học nghiêm túc, gần gũi và đầy động lực.</p>
            </div>
            <div className="student-marquee" aria-label="Hình ảnh và bình luận đáng yêu của học sinh">
              <div className="marquee-track">
                {[...studentLove, ...studentLove].map(([image, comment], index) => (
                  <article className="student-love-card" key={`${comment}-${index}`}>
                    <img src={image} alt="Khoảnh khắc học sinh trong lớp cô Thuỷ" loading="lazy" />
                    <p><Heart size={16} fill="currentColor" /> {comment}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Class Format Section */}
        <section className="section section-soft">
          <div className="container">
            <SectionHeading eyebrow="Hình thức học" title="Linh hoạt theo nhu cầu của từng học sinh" text="Chọn lớp nhóm nhỏ, online, offline hoặc luyện đề cấp tốc tùy mục tiêu, lịch học và mức độ cần kèm sát." />
            <div className="format-grid">
              {formats.map((format) => (
                <article className="format-card" key={format.title}>
                  <CalendarDays size={26} />
                  <h3>{format.title}</h3>
                  <p>{format.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Schedule & Tuition Section */}
        <section className="section" id="lich-hoc">
          <div className="container">
            <SectionHeading eyebrow="Lịch học & học phí" title="Thông tin mẫu để phụ huynh dễ tham khảo" text="Lịch học và học phí sẽ được tư vấn lại theo lớp, trình độ và hình thức học phù hợp với học sinh." />
            <div className="table-grid">
              <DataTable title="Lịch học mẫu" headers={['Lớp', 'Ngày học', 'Giờ học', 'Hình thức']} rows={schedules} />
              <DataTable title="Học phí mẫu" headers={['Hình thức', 'Học phí', 'Tần suất']} rows={tuition} />
            </div>
            <p className="note">Học phí có thể thay đổi theo lớp và hình thức học.</p>
            <div className="center-action">
              <a className="btn btn-primary btn-large" href="#lien-he">
                Liên hệ để nhận lịch học phù hợp
              </a>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="section section-soft">
          <div className="container">
            <SectionHeading eyebrow="Feedback" title="Phụ huynh và học sinh nói gì?" text="Một số phản hồi mẫu thể hiện kết quả mà landing page hướng tới: hiểu bài hơn, có tiến độ rõ và luyện đề sát chương trình." />
            <div className="testimonial-grid">
              {testimonials.map(([quote, author]) => (
                <article className="testimonial-card" key={quote}>
                  <div className="stars">★★★★★</div>
                  <p>“{quote}”</p>
                  <strong>{author}</strong>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section" id="faq">
          <div className="container faq-layout">
            <div>
              <p className="eyebrow">FAQ</p>
              <h2>Câu hỏi thường gặp</h2>
              <p>Những thông tin phụ huynh thường cần trước khi đăng ký tư vấn hoặc cho con học thử.</p>
            </div>
            <div className="faq-list">
              {faqs.map(([question, answer], index) => (
                <article className="faq-item" key={question}>
                  <button type="button" onClick={() => setOpenFaq(openFaq === index ? -1 : index)}>
                    {question}
                    <ChevronDown className={openFaq === index ? 'rotate' : ''} size={20} />
                  </button>
                  {openFaq === index && <p>{answer}</p>}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="section final-cta" id="lien-he">
          <div className="container cta-grid">
            <div>
              <p className="eyebrow">Đăng ký tư vấn</p>
              <h2>Đăng ký tư vấn lộ trình học phù hợp cho con</h2>
              <p>
                Điền thông tin để được tư vấn lớp học, nhận đề kiểm tra đầu vào và lịch học phù hợp. Khi bấm gửi, website sẽ mở email soạn sẵn gửi tới {contact.email}.
              </p>
              <div className="contact-strip">
                <a href={`tel:${contact.phone}`}><Phone size={18} /> {contact.phone}</a>
                <a href={`https://zalo.me/${contact.zalo}`} target="_blank" rel="noreferrer"><MessageCircle size={18} /> Zalo {contact.zalo}</a>
                <a href={contact.facebook} target="_blank" rel="noreferrer"><MessageCircle size={18} /> Facebook cô Thuỷ</a>
                <a href={`mailto:${contact.email}`}><Mail size={18} /> {contact.email}</a>
              </div>
            </div>
            <form className="lead-form" onSubmit={handleLeadSubmit}>
              <label>
                Họ tên phụ huynh/học sinh
                <input type="text" placeholder="Ví dụ: Nguyễn Minh Anh" value={leadForm.name} onChange={(event) => updateLeadField('name', event.target.value)} />
              </label>
              <label>
                Số điện thoại
                <input type="tel" placeholder="0384 359 411" value={leadForm.phone} onChange={(event) => updateLeadField('phone', event.target.value)} />
              </label>
              <label>
                Lớp hiện tại
                <select value={leadForm.grade} onChange={(event) => updateLeadField('grade', event.target.value)}>
                  <option value="" disabled>Chọn lớp</option>
                  {['Lớp 6', 'Lớp 7', 'Lớp 8', 'Lớp 9', 'Lớp 10', 'Lớp 11', 'Lớp 12'].map((grade) => (
                    <option key={grade}>{grade}</option>
                  ))}
                </select>
              </label>
              <label>
                Môn quan tâm
                <select value={leadForm.subject} onChange={(event) => updateLeadField('subject', event.target.value)}>
                  <option value="" disabled>Chọn môn</option>
                  <option>KHTN lớp 6-9</option>
                  <option>Hóa học lớp 10-12</option>
                  <option>Luyện đề cấp tốc</option>
                </select>
              </label>
              <label className="full">
                Mục tiêu học tập
                <textarea placeholder="Ví dụ: lấy lại gốc, nâng điểm kiểm tra, luyện đề học kỳ..." value={leadForm.goal} onChange={(event) => updateLeadField('goal', event.target.value)} />
              </label>
              <button className="btn btn-primary btn-large full" type="submit">
                Gửi thông tin tư vấn
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <strong>KHTN & Hóa Master - Cô Thuỷ</strong>
            <p>Lớp học KHTN 6-9 và Hóa học 10-12 tập trung củng cố kiến thức, luyện đề và nâng điểm.</p>
          </div>
          <div>
            <span>Số điện thoại</span>
            <p>{contact.phone}</p>
          </div>
          <div>
            <span>Địa chỉ</span>
            <a href={contact.addressUrl} target="_blank" rel="noreferrer">{contact.address}</a>
          </div>
          <div>
            <span>Kênh liên hệ</span>
            <p>Facebook/Zalo: {contact.zalo}</p>
            <a href={contact.facebook} target="_blank" rel="noreferrer">Facebook cô Thuỷ</a>
            <a href="#lien-he">Chính sách & thông tin liên hệ</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

function DataTable({ title, headers, rows }) {
  return (
    <article className="table-card">
      <h3>{title}</h3>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              {headers.map((header) => (
                <th key={header}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.join('-')}>
                {row.map((cell) => (
                  <td key={cell}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </article>
  );
}

function slugify(value) {
  const map = {
    'Trang chủ': 'trang-chu',
    'Khóa học': 'khoa-hoc',
    'Lộ trình': 'lo-trinh',
    'Giáo viên': 'giao-vien',
    'Lịch học': 'lich-hoc',
    'Học phí': 'lich-hoc',
    'Liên hệ': 'lien-he',
  };

  return map[value] || value;
}

createRoot(document.getElementById('root')).render(<App />);
