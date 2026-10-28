import { intake, site } from '@/lib/site'

// Documents asked for with every application
export const requiredDocuments = [
  'Your CNIC, or B-Form if you don’t have a CNIC yet',
  'Your father’s or guardian’s CNIC',
  'Admission letter and latest fee voucher (challan)',
  'Matric and Intermediate result cards, and your latest transcript',
  'Proof of family income',
  'A recent electricity bill',
  'A passport-size photo',
]

// Each answer is a list of blocks: a string is a paragraph, { list } is a
// bulleted list. Keep answers short and in plain language.
export const faqGroups = [
  {
    id: 'eligibility',
    title: 'Eligibility',
    items: [
      {
        question: 'Who can apply for the Ramzan Talent Scholarship?',
        answer: [
          'Students anywhere in Pakistan who have admission at a recognised institution for a diploma (including DAE), bachelor’s or master’s programme, and who need financial support to continue their studies.',
        ],
      },
      {
        question:
          'Do I have to be from Gujrat, or can students from any city apply?',
        answer: [
          'You can apply from any city, town or village in Pakistan. You don’t need to be from Gujrat.',
        ],
      },
      {
        question: 'Which levels of study does the scholarship cover?',
        answer: [
          'Diploma (including DAE), bachelor’s and master’s programmes. It does not cover school or intermediate (FA/FSc) education.',
        ],
      },
      {
        question: 'Is there a family income limit?',
        answer: [
          'There is no fixed income limit. Priority goes to students from families with lower incomes.',
        ],
      },
      {
        question: 'Is there a minimum percentage or grade?',
        answer: [
          'No. There is no minimum percentage. Selection considers both your academic results and your financial need, so good results help your application.',
        ],
      },
      {
        question:
          'Can I apply if I already get another scholarship (PEEF, HEC, Benazir/Ehsaas, Zakat or any other)?',
        answer: [
          'No. If you are already receiving a scholarship from another institution or organisation, you are not eligible.',
        ],
      },
      {
        question: 'I am in my second, third or fourth year. Can I still apply?',
        answer: [
          'Yes. Students in any year of their programme can apply, including those who already received the scholarship last year. Apply again each year with your updated CGPA and latest results.',
        ],
      },
      {
        question: 'I am still waiting for my admission. Can I apply?',
        answer: [
          `You need confirmed admission to apply. If your admission comes through before ${intake.deadlineLabel}, you can apply for this year’s intake.`,
        ],
      },
      {
        question: 'Can girls apply?',
        answer: [
          'Yes. Girls are encouraged to apply and are given preference.',
        ],
      },
      {
        question: 'Are orphan students given priority?',
        answer: ['Yes. Orphan students are given priority in selection.'],
      },
    ],
  },
  {
    id: 'documents',
    title: 'Documents',
    items: [
      {
        question: 'What documents do I need?',
        answer: [
          'Keep these ready before you start your application:',
          { list: requiredDocuments },
          'All documents must be attested and uploaded as clear photos or scans.',
        ],
      },
      {
        question:
          'My father is a daily-wage worker, farmer or shopkeeper and has no salary slip. What income proof should I give?',
        answer: [
          'Submit any document that shows the nature of your father’s or guardian’s work and income. A salary slip is not required.',
        ],
      },
      {
        question: 'My father has passed away. What should I submit?',
        answer: [
          'Submit your father’s death certificate, along with your mother’s or guardian’s CNIC.',
        ],
      },
      {
        question: 'I don’t have a CNIC yet. Is my B-Form enough?',
        answer: ['Yes. If you don’t have a CNIC, you can provide your B-Form.'],
      },
      {
        question: 'Do my documents need to be attested?',
        answer: [
          'Yes. Documents must be attested, and the photos or scans you upload must be clear and easy to read.',
        ],
      },
      {
        question: 'Do I need an affidavit or stamp paper?',
        answer: ['No. No affidavit or stamp paper is required.'],
      },
    ],
  },
  {
    id: 'applying',
    title: 'Applying online',
    items: [
      {
        question: 'How do I apply?',
        answer: [
          `Apply online at ${site.applyHost}. Create an account, fill in the form and upload your documents.`,
        ],
      },
      {
        question: 'When is the last date to apply?',
        answer: [
          intake.open
            ? `The last date for the ${intake.year} intake is ${intake.deadlineLabel}.`
            : 'Applications are currently closed. Keep an eye on our news page for the next intake.',
        ],
      },
      {
        question: 'Can I apply from my phone?',
        answer: [
          'Yes. The application portal works on phones, so you can apply from your smartphone. You don’t need a computer.',
        ],
      },
      {
        question: 'Is there any fee to apply?',
        answer: ['No. Applying is completely free.'],
      },
      {
        question: 'Can someone else fill in the form for me?',
        answer: [
          'Yes. A family member, teacher or internet café can fill in the form for you, but all documents must be the applicant’s own.',
        ],
      },
      {
        question: 'I made a mistake. Can I change my application?',
        answer: [
          'Yes. You can edit your application as many times as you need until you submit it. After you submit, contact our support team on WhatsApp or by email if something needs to change.',
        ],
      },
      {
        question: 'Is the application form available in Urdu?',
        answer: [
          'The form is currently in English only. If you need help understanding any part of it, contact us on WhatsApp.',
        ],
      },
    ],
  },
  {
    id: 'selection',
    title: 'Selection & results',
    items: [
      {
        question: 'How are students selected?',
        answer: [
          'Our selection board reviews every application, looking at both academic results and financial need. Shortlisted students are invited to a short interview, after which awards are approved.',
        ],
      },
      {
        question: 'How will I find out the result?',
        answer: [
          'We contact students by phone call, email and WhatsApp, so make sure the details in your application are correct.',
        ],
      },
      {
        question: 'If I am not selected this year, can I apply again?',
        answer: ['Yes. You are welcome to apply again next year.'],
      },
    ],
  },
  {
    id: 'award',
    title: 'The award',
    items: [
      {
        question: 'What does the scholarship cover, and how much is it?',
        answer: [
          'The scholarship covers tuition fees only. The selection board decides the amount for each student, from 25% up to 100% of tuition.',
        ],
      },
      {
        question: 'How is the money paid?',
        answer: [
          'The scholarship is paid into a valid account in your guardian’s name: a bank account, JazzCash or Easypaisa. Make sure your guardian has one of these ready.',
        ],
      },
      {
        question: 'Is it for my whole degree?',
        answer: [
          'Each award is for one year. To continue, apply again each year with your latest GPA and results.',
        ],
      },
      {
        question: 'Do I have to pay it back?',
        answer: [
          'No. It is a scholarship, not a loan. You never have to pay it back.',
        ],
      },
    ],
  },
  {
    id: 'safety',
    title: 'Trust & safety',
    items: [
      {
        question: 'Will anyone ask me for money to process my scholarship?',
        answer: [
          'Never. We do not charge any fee at any stage: not to apply, not to “process” your application and not to “guarantee” a scholarship.',
          'Fake scholarship calls and WhatsApp messages are common. If anyone asks you for money in our name, do not pay. Report it to us straight away.',
        ],
      },
      {
        question: 'Who runs and funds the scholarship?',
        answer: [
          'The Ramzan Talent Scholarship is funded personally by the Qazi Family and run by the sons of Muhammad Asghar Qazi. It began in 2012 from the family’s welfare work in Gujrat.',
        ],
      },
      {
        question: 'How do I contact you?',
        answer: [
          `Message us on WhatsApp at ${site.whatsappLabel} or email ${site.email}.`,
        ],
      },
    ],
  },
]

export function answerToText(answer) {
  return answer
    .map((block) =>
      typeof block === 'string' ? block : block.list.join('; ') + '.',
    )
    .join(' ')
}
