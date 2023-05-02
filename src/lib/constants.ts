import {
  AccordionItemProps,
  RecentVisitorsI,
} from '../components/Accordion/Accordion.interface'
import {
  AcademicCapIcon,
  AndroidIcon,
  ArrowTrendingUpIcon,
  BoltIcon,
  BriefCaseIcon,
  CommentIcon,
  CubeIcon,
  DashboardImage,
  DesignWizardBadge1Image,
  DesignWizardBadge2Image,
  FlutterIcon,
  GithubIcon,
  GithubProfileViewImage,
  HandRaisedIcon,
  HeroIcon,
  HomeIcon,
  InboxIcon,
  IterateIcon,
  LifeBuoyIcon,
  NodeJSIcon,
  PHPIcon,
  PythonIcon,
  RubyIcon,
  SignImage,
  ThumbsUpIcon,
  TrophyIcon,
  ViewerStatsIcon,
} from '../components/Icons'
import { BugIcon } from '../components/Icons/BugIcon'
import {
  AssessmentProps,
  FundamentalsMetricsItemProps,
} from '../components/Metrics/Metrics.interface'

export const COLORS = {
  BLUE: '#3366FF',
  BORDER_GRAY: '#D8DAE5',
  TEXT_BLUE: '#23B3E8',
  GREEN: '#429777',
  ORANGE: '#F15832',
  DARK_ORANGE: '#DB6837',
  PROGRESS_BLUE_STROKE: '#23B3E8',
  PROGRESS_BLUE_TRAIL: '#23B3E826',
  PROGRESS_GREEN_STROKE: '#46EAAC',
  PROGRESS_GREEN_TRAIL: '#4297771A',
  PROGRESS_PURPLE_STROKE: '#7833EA',
  PROGRESS_PURPLE_TRAIL: '#7833EA26',
  PROGRESS_GRAY_STROKE: '#696F8C80',
  PROGRESS_GRAY_TRAIL: '#696F8C1A',
} as const

export const TIMELINE_ITEMS = [
  {
    badgeColor: 'bg-zeedas-lightpurple',
    badgeText: 'Launched a side project',
    badgeTextColor: 'text-zeedas-purple',
    date: '19 Jan, 2023',
    captionText: 'Obsidian',
    captionSubtext:
      'Built a no-code analytics platform that adheres to the GDPR guidelines and can be easily setup by any business.',
    icon: BriefCaseIcon,
    iconColor: COLORS.PROGRESS_PURPLE_STROKE,
    imageSrc: DashboardImage,
  },
  {
    badgeColor: 'bg-zeedas-lightgreen',
    badgeText: 'Earned a certificate',
    badgeTextColor: 'text-zeedas-green',
    date: '17 Jan, 2023',
    captionText: 'Udacity · Introduction to machine learning',
    captionSubtext:
      'Completed the course and earned a certificate of excellence for finishing top five in the cohort with one of the highest grades.',
    icon: AcademicCapIcon,
    iconColor: COLORS.PROGRESS_GREEN_STROKE,
    imageSrc: SignImage,
  },
  {
    badgeColor: 'bg-zeedas-lightblue',
    badgeText: 'Earned a badge',
    badgeTextColor: 'text-zeedas-blue',
    date: '14 Jan, 2023',
    captionText: 'Code review ninja',
    captionSubtext: 'Achieved 3,000 code review hours.',
    icon: TrophyIcon,
    iconColor: COLORS.PROGRESS_BLUE_STROKE,
    imageSrc: DesignWizardBadge2Image,
  },
  {
    badgeColor: 'bg-zeedas-lightorange',
    badgeText: 'Made an open source contribution',
    badgeTextColor: 'text-zeedas-darkorange',
    date: '19 Dec 2022',
    captionText: '',
    captionSubtext: '',
    icon: GithubIcon,
    iconColor: COLORS.ORANGE,
    imageSrc: GithubProfileViewImage,
  },
  {
    badgeColor: 'bg-zeedas-lightblue',
    badgeText: 'Earned a badge',
    badgeTextColor: 'text-zeedas-blue',
    date: '05 Nov 2022',
    captionText: 'Code wrangler',
    captionSubtext: 'Milestone: written a 1,000,000 lines of code',
    icon: TrophyIcon,
    iconColor: COLORS.PROGRESS_BLUE_STROKE,
    imageSrc: DesignWizardBadge1Image,
  },
] as const

export const NAV_LINKS = [
  {
    id: 1,
    to: '/',
    label: 'Home',
    icon: HomeIcon,
  },
  {
    id: 2,
    to: '/resume',
    label: 'Resume',
    icon: HeroIcon,
  },
  {
    id: 3,
    to: '/viewer-stats',
    label: 'Viewer Stats',
    icon: ViewerStatsIcon,
  },
] as const

export const PROGRAMMING_SKILLS = [
  {
    id: 1,
    languageRating: 'PHP · 85%',
    icon: PHPIcon,
    color: 'bg-zeedas-php',
  },
  {
    id: 2,
    languageRating: 'Android · 90%',
    icon: AndroidIcon,
    color: 'bg-zeedas-android',
  },
  {
    id: 3,
    languageRating: 'Python · 76%',
    icon: PythonIcon,
    color: 'bg-zeedas-python',
  },
  {
    id: 4,
    languageRating: 'NodeJS · 92%',
    icon: NodeJSIcon,
    color: 'bg-zeedas-nodejs',
  },
  {
    id: 5,
    languageRating: 'Flutter · 54%',
    icon: FlutterIcon,
    color: 'bg-zeedas-flutter',
  },
  {
    id: 6,
    languageRating: 'Ruby · 88%',
    icon: RubyIcon,
    color: 'bg-zeedas-ruby',
  },
] as const

export const CODING_ASSESSMENTS: Array<AssessmentProps> = [
  {
    id: 1,
    percent: 90,
    percentile: 99,
    score: 8.5,
    title: 'Mid Level Full-stack Developer Part I',
  },
  {
    id: 2,
    percent: 66,
    percentile: 25,
    score: 7.3,
    title: 'Mid Level Full-stack Developer Part II',
  },
]

export const SUBMIT_FUNDAMENTALS: Array<FundamentalsMetricsItemProps> = [
  {
    id: 1,
    icon: IterateIcon,
    metric: 'Iterated PRs',
    metricUnit: '%',
    value: 50,
    data: [
      {
        date: 'Nov 2022',
        value: 0.1,
      },
      {
        date: 'Dec 2022',
        value: 0.4,
      },
      {
        date: 'Jan 2023',
        value: 0.33,
      },
      {
        date: 'Feb 2023',
        value: 0.5,
      },
    ],
  },
  {
    id: 2,
    icon: CommentIcon,
    metric: 'Comments addressed',
    metricUnit: '%',
    value: 80,
    data: [
      {
        date: 'Nov 2022',
        value: 0.5,
      },
      {
        date: 'Dec 2022',
        value: 0.2,
      },
      {
        date: 'Jan 2023',
        value: 0.3,
      },
      {
        date: 'Feb 2023',
        value: 0.1,
      },
    ],
  },
  {
    id: 3,
    icon: ThumbsUpIcon,
    metric: 'PRs merged',
    metricUnit: '%',
    value: 42,
    data: [
      {
        date: 'Nov 2022',
        value: 0.3,
      },
      {
        date: 'Dec 2022',
        value: 0.45,
      },
      {
        date: 'Jan 2023',
        value: 0.43,
      },
      {
        date: 'Feb 2023',
        value: 0.5,
      },
    ],
  },
  {
    id: 4,
    icon: InboxIcon,
    metric: 'Unreviewed PRs',
    metricUnit: '%',
    value: 19,
    data: [
      {
        date: 'Nov 2022',
        value: 0.15,
      },
      {
        date: 'Dec 2022',
        value: 0.5,
      },
      {
        date: 'Jan 2023',
        value: 0.2,
      },
      {
        date: 'Feb 2023',
        value: 0.27,
      },
    ],
  },
  {
    id: 5,
    icon: BoltIcon,
    metric: 'Responsiveness',
    value: 0.25,
    data: [
      {
        date: 'Nov 2022',
        value: 0.4,
      },
      {
        date: 'Dec 2022',
        value: 0.5,
      },
      {
        date: 'Jan 2023',
        value: 0.15,
      },
      {
        date: 'Feb 2023',
        value: 0.47,
      },
    ],
  },
]

export const REVIEW_FUNDAMENTALS: Array<FundamentalsMetricsItemProps> = [
  {
    id: 1,
    icon: LifeBuoyIcon,
    metric: 'Reaction time',
    metricUnit: '',
    value: 0.4,
    data: [
      {
        date: 'Nov 2022',
        value: 0.23,
      },
      {
        date: 'Dec 2022',
        value: 0.2,
      },
      {
        date: 'Jan 2023',
        value: 0.3,
      },
      {
        date: 'Feb 2023',
        value: 0.5,
      },
    ],
  },
  {
    id: 2,
    icon: HandRaisedIcon,
    metric: 'Involvement',
    metricUnit: '%',
    value: 31,
    data: [
      {
        date: 'Nov 2022',
        value: 0.5,
      },
      {
        date: 'Dec 2022',
        value: 0.2,
      },
      {
        date: 'Jan 2023',
        value: 0.33,
      },
      {
        date: 'Feb 2023',
        value: 0.4,
      },
    ],
  },
  {
    id: 3,
    icon: BugIcon,
    metric: 'Bug let through',
    metricUnit: '%',
    value: 9,
    data: [
      {
        date: 'Nov 2022',
        value: 0.2,
      },
      {
        date: 'Dec 2022',
        value: 0.45,
      },
      {
        date: 'Jan 2023',
        value: 0.1,
      },
      {
        date: 'Feb 2023',
        value: 0.5,
      },
    ],
  },
  {
    id: 4,
    icon: CubeIcon,
    metric: 'Coverage',
    metricUnit: '%',
    value: 17,
    data: [
      {
        date: 'Nov 2022',
        value: 0.3,
      },
      {
        date: 'Dec 2022',
        value: 0.1,
      },
      {
        date: 'Jan 2023',
        value: 0.05,
      },
      {
        date: 'Feb 2023',
        value: 0.5,
      },
    ],
  },
  {
    id: 5,
    icon: ArrowTrendingUpIcon,
    metric: 'Improvements',
    value: 33,
    data: [
      {
        date: 'Nov 2022',
        value: 0.1,
      },
      {
        date: 'Dec 2022',
        value: 0.5,
      },
      {
        date: 'Jan 2023',
        value: 0.33,
      },
      {
        date: 'Feb 2023',
        value: 0.27,
      },
    ],
  },
]

export const RAISING_PROGRESS_SIZE: Array<[number, number, number]> = [
  [7, 11, 0],
  [7, 14, 10],
  [7, 18, 20],
  [7, 21, 30],
  [7, 25, 40],
  [7, 28, 50],
  [7, 32, 60],
  [7, 35, 70],
  [7, 39, 80],
  [7, 43, 90],
]

export const VISITS = [
  { id: 1, metric: 'Total number of visits', value: 18 },
  { id: 2, metric: 'Day most visited', value: 'Tuesdays' },
  { id: 3, metric: 'Time most visited', value: '4PM' },
  { id: 4, metric: 'Avg. time spent', value: '10:44s' },
  { id: 5, metric: 'Avg. read', value: '64%' },
]

export const TIME_SPENT_ON_SECTION_METRICS = [
  { id: 1, metric: 'Personal details', time: '259 hrs (54%)', percent: 54 },
  { id: 2, metric: 'Coding assessments', time: '176 hrs (32%)', percent: 32 },
  { id: 3, metric: 'Submit fundamentals', time: '84 hrs (15%)', percent: 15 },
  { id: 4, metric: 'Review fundamentals', time: '32 hrs (9%)', percent: 9 },
  { id: 5, metric: 'Speed & accuracy', time: '15 hrs (5%)', percent: 5 },
  { id: 5, metric: 'Task awareness...', time: '9 hrs (3%)', percent: 3 },
]

export const RECENT_VISITORS: Array<RecentVisitorsI> = [
  {
    id: 1,
    bg: 'bg-[#1B7AB0]',
    color: 'text-white',
    name: 'Marcus Brown',
    email: 'marcus@paystack.com',
    date: '01 Feb 2023',
    time: '04:55 PM',
    location: 'Lagos, Nigeria',
    device: 'MacOS, Safari',
    timeSpent: '02:54s',
    readPercent: 90,
  },
  {
    id: 2,
    bg: 'bg-[#7833EA]',
    color: 'text-white',
    name: 'Cynthia Jobs',
    email: 'cynthia@microsoft.com',
    date: '29 Jan 2023',
    time: '11:40 AM',
    location: 'Boston, US',
    device: 'iOS, Chrome',
    timeSpent: '08:33s',
    readPercent: 84,
  },
  {
    id: 3,
    bg: 'bg-[#DB6837]',
    color: 'text-white',
    name: 'Stephen Nelly',
    email: 'stephen@facebook.com',
    date: '22 Jan 2023',
    time: '09:33 PM',
    location: 'San Francisco, US',
    device: 'Windows, Arc',
    timeSpent: '11:43s',
    readPercent: 50,
  },
  {
    id: 4,
    bg: 'bg-[#429777]',
    color: 'text-white',
    name: 'Randy George',
    email: 'randy@apple.com',
    date: '22 Jan 2023',
    time: '08:11 PM',
    location: 'Cupertino, US',
    device: 'MacOS, Arc',
    timeSpent: '13:15s',
    readPercent: 70,
  },
  {
    id: 5,
    bg: 'bg-[#25CBD6]',
    color: 'text-[#101840]',
    name: 'Cheyenne Saris',
    email: 'cheyenne.saris@ge.com',
    date: '18 Jan 2023',
    time: '04:33 AM',
    location: 'Berlin, Germany',
    device: 'Windows, Brave',
    timeSpent: '01:34s',
    readPercent: 10,
  },
]

export const CHART_DATA1 = [
  {
    x: 1,
    y: 0.7,
  },
  {
    x: 6,
    y: 2.7,
  },
  {
    x: 14,
    y: 3,
  },
  {
    x: 14,
    y: 2.8,
  },
  {
    x: 14,
    y: 2.4,
  },
  {
    x: 14.1,
    y: 2.4,
  },
  {
    x: 14.1,
    y: 2.2,
  },
  {
    x: 14.1,
    y: 1.2,
  },
  {
    x: 14.15,
    y: 0.9,
  },
  {
    x: 14.2,
    y: 1.2,
  },
  {
    x: 14.4,
    y: 2.4,
  },
  {
    x: 14.5,
    y: 2.6,
  },
  {
    x: 14.6,
    y: 2.4,
  },
  {
    x: 14.95,
    y: 2,
  },
  {
    x: 14.95,
    y: 2,
  },
  {
    x: 15,
    y: 1.9,
  },
  {
    x: 15.2,
    y: 0.7,
  },
  {
    x: 15.3,
    y: 0.9,
  },
]
