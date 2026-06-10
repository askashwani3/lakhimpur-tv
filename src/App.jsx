import { useState } from "react";
import { Link, Routes, Route, useParams, useLocation } from "react-router-dom";

const menu = [
  ["🏠", "होम", "/"],
  ["📰", "खबरें", "/news"],
  ["🎓", "शिक्षा", "/shiksha"],
  ["📚", "तथ्य", "/tathya"],
  ["💡", "मोटिवेशन", "/motivation"],
  ["☁️", "मौसम", "/mausam"],
  ["🔯", "राशिफल", "/rashifal"],
  ["📸", "गैलरी", "/gallery"],
  ["🎥", "वीडियो", "/videos"],
  ["🛒", "स्टोर", "/store"],
  ["❤️", "स्वास्थ्य", "/health"],
  ["🎬", "मनोरंजन", "/manoranjan"],
  ["✍️", "कविताएं", "/kavitaye"],
  ["📞", "संपर्क", "/contact"],
  ["ℹ️", "हमारे बारे में", "/about"],
];
const defaultNewsData = [
  {
    id: 1,
    title: "दुधवा नेशनल पार्क: लखीमपुर की शान",
    category: "पर्यटन",
    desc: "दुधवा नेशनल पार्क लखीमपुर खीरी की पहचान है, जहां बाघ, गैंडा, बारहसिंगा और 400+ पक्षी प्रजातियां पाई जाती हैं।",
    image: "https://images.unsplash.com/photo-1549366021-9f761d450615",
    content: [
      "🌳 उत्तर प्रदेश के लखीमपुर खीरी जिले में स्थित दुधवा नेशनल पार्क राज्य का प्रसिद्ध राष्ट्रीय उद्यान है।",
      "🐅 यहां बाघ, तेंदुआ, हाथी, गैंडा, बारहसिंगा और कई दुर्लभ वन्यजीव पाए जाते हैं।",
      "🦜 दुधवा में 400 से अधिक पक्षी प्रजातियां पाई जाती हैं।",
      "📍 दुधवा केवल पर्यटन स्थल नहीं बल्कि लखीमपुर खीरी की पहचान है।"
    ],
    facts: [
      "स्थापना वर्ष — 1977",
      "स्थान — लखीमपुर खीरी",
      "प्रसिद्धि — बाघ, गैंडा और बारहसिंगा",
      "पक्षी प्रजातियां — 400+"
    ]
  },
  {
    id: 2,
    title: "लखीमपुर खीरी का इतिहास: तराई से आज तक का सफर",
    category: "इतिहास",
    desc: "लखीमपुर खीरी का इतिहास प्राचीन काल, स्वतंत्रता संग्राम और कृषि विकास से जुड़ा हुआ है।",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b",
    content: [
      "📜 लखीमपुर खीरी उत्तर प्रदेश के सबसे बड़े जिलों में शामिल है।",
      "🏛️ यह क्षेत्र पुराने समय में तराई, जंगलों और स्थानीय शासकों के प्रभाव वाला क्षेत्र रहा।",
      "⚔️ 1857 के स्वतंत्रता संग्राम में भी इस क्षेत्र की भूमिका मानी जाती है।",
      "🌾 आज लखीमपुर खीरी कृषि, गन्ना उत्पादन और दुधवा नेशनल पार्क के लिए जाना जाता है।"
    ],
    facts: [
      "उत्तर प्रदेश का बड़ा जिला",
      "तराई क्षेत्र में स्थित",
      "गन्ना उत्पादन के लिए प्रसिद्ध",
      "दुधवा नेशनल पार्क यहीं है"
    ]
  },
  {
    id: 3,
    title: "गोला गोकर्णनाथ: छोटी काशी की अनोखी पहचान",
    category: "धार्मिक स्थल",
    desc: "गोला गोकर्णनाथ भगवान शिव के प्रसिद्ध मंदिर के लिए जाना जाता है और इसे छोटी काशी कहा जाता है।",
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da",
    content: [
      "🛕 गोला गोकर्णनाथ भगवान शिव के प्रसिद्ध मंदिर के लिए जाना जाता है।",
      "🙏 धार्मिक महत्व के कारण इसे छोटी काशी भी कहा जाता है।",
      "🚩 सावन और महाशिवरात्रि पर बड़ी संख्या में श्रद्धालु यहां आते हैं।",
      "📍 यह स्थान धार्मिक पर्यटन और स्थानीय व्यापार के लिए भी महत्वपूर्ण है।"
    ],
    facts: [
      "उपनाम — छोटी काशी",
      "प्रसिद्ध — शिव मंदिर",
      "स्थान — गोला गोकर्णनाथ",
      "प्रमुख पर्व — सावन और महाशिवरात्रि"
    ]
  },
  {
    id: 4,
    title: "लखीमपुर खीरी: गन्ना उत्पादन का प्रमुख केंद्र",
    category: "कृषि",
    desc: "लखीमपुर खीरी उत्तर प्रदेश के प्रमुख गन्ना उत्पादक जिलों में शामिल है।",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854",
    content: [
      "🌾 लखीमपुर खीरी कृषि प्रधान जिला है।",
      "🏭 यहां कई चीनी मिलें संचालित हैं।",
      "🚜 हजारों किसान गन्ना खेती और उससे जुड़े व्यवसायों पर निर्भर हैं।",
      "📈 गन्ना उत्पादन जिले की अर्थव्यवस्था में बड़ी भूमिका निभाता है।"
    ],
    facts: [
      "प्रमुख फसल — गन्ना",
      "अर्थव्यवस्था का आधार — कृषि",
      "चीनी मिलों के लिए प्रसिद्ध",
      "किसानों की आय का बड़ा स्रोत"
    ]
  },
  {
    id: 5,
    title: "मेढक मंदिर: लखीमपुर का अनोखा धार्मिक स्थल",
    category: "पर्यटन",
    desc: "ओयल स्थित मेढक मंदिर अपनी अनोखी वास्तुकला और धार्मिक महत्व के लिए प्रसिद्ध है।",
    image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963",
    content: [
      "🐸 लखीमपुर खीरी के ओयल क्षेत्र में स्थित मेढक मंदिर अपनी अनोखी बनावट के लिए प्रसिद्ध है।",
      "🏛️ मंदिर की संरचना में मेढक की आकृति दिखाई देती है।",
      "🙏 यह मंदिर धार्मिक महत्व रखता है और श्रद्धालुओं को आकर्षित करता है।",
      "📸 अपनी अलग बनावट के कारण यह पर्यटकों के लिए भी खास स्थान है।"
    ],
    facts: [
      "स्थान — ओयल, लखीमपुर खीरी",
      "प्रसिद्धि — अनोखी वास्तुकला",
      "धार्मिक महत्व — शिव मंदिर",
      "पर्यटन आकर्षण"
    ]
  }
];

function Header({ openMenu }) {
  return (
    <header className="sticky top-0 z-40 bg-[#06101f] text-white shadow-2xl">
      <div className="px-4 py-4">
        <div className="flex items-center justify-between gap-3">
          <button
            onClick={openMenu}
            className="h-11 w-11 rounded-2xl bg-white/10 text-3xl flex items-center justify-center"
          >
            ☰
          </button>

         <div className="flex-1 flex justify-center">
  <div className="bg-white rounded-3xl p-2 shadow-2xl">
    <img
      src="/logo.png"
      alt="Lakhimpur TV"
      className="h-16 w-auto"
    />
  </div>
</div>

         <Link
  to="/admin"
  className="h-11 px-3 rounded-2xl bg-rose-600 text-xs font-black flex items-center justify-center"
>
  Admin
</Link>
       <div className="mt-4 flex gap-2 rounded-3xl bg-white p-2 shadow-xl">
  <input
    id="siteSearch"
    className="min-w-0 flex-1 px-3 text-sm font-semibold text-slate-900 outline-none"
    placeholder="कुछ खोजें..."
  />

  <button
    onClick={() => {
      const value = document.getElementById("siteSearch").value;
      window.location.href = "/news?search=" + value;
    }}
    className="rounded-2xl bg-[#E11D48] px-4 py-3 text-sm font-black text-white"
  >
    खोजें
  </button>
</div>

        </div>
      </div>
    </header>
  );
}

function Home({ newsData }) {
  return (
    <main className="space-y-5 p-4">
      <section className="rounded-[36px] overflow-hidden shadow-2xl">
  <div className="bg-gradient-to-br from-[#071225] via-[#0B2F6B] to-[#E11D48] p-5 text-white">
    
    <div className="inline-block bg-white/15 px-4 py-2 rounded-full text-xs font-black">
      📰 LOCAL MEDIA • 🎓 EDUCATION • 📚 FACTS
    </div>

    <h2 className="mt-3 text-3xl font-black leading-tight">
      लखीमपुर की खबरें
      <br />
      और पढ़ाई
      <br />
      एक ही जगह
    </h2>

    <p className="mt-4 text-slate-200 text-sm">
      गांव की खबरें, जॉब अलर्ट, तथ्य, प्रेरणा और शिक्षा अपडेट।
    </p>

    <div className="mt-6 flex gap-3">
      <button className="bg-white text-[#071225] px-5 py-3 rounded-2xl font-black">
        📰 खबरें
      </button>

      <button className="bg-white/15 px-5 py-3 rounded-2xl font-black">
        🎓 शिक्षा
      </button>
    </div>

  </div>
</section>

      
      <section className="grid grid-cols-2 gap-3">
        {[
          ["📰", "ताजा खबरें", "/news"],
          ["🎓", "शिक्षा / जॉब", "/shiksha"],
          ["📚", "आज का तथ्य", "/tathya"],
          ["💡", "आज की प्रेरणा", "/motivation"],
        ].map((item) => (
          <Link
            key={item[1]}
            to={item[2]}
            className="rounded-3xl bg-white p-5 text-center shadow-lg border border-slate-100"
          >
            <div className="text-4xl">{item[0]}</div>
            <p className="mt-3 font-black">{item[1]}</p>
          </Link>
        ))}
      </section>

      <section className="grid grid-cols-3 gap-3">
        {[
          ["☁️", "मौसम", "/mausam"],
          ["🔯", "राशिफल", "/rashifal"],
          ["🛒", "स्टोर", "/store"],
        ].map((item) => (
          <Link
            key={item[1]}
            to={item[2]}
            className="rounded-2xl bg-white p-4 text-center shadow border border-slate-100"
          >
            <div className="text-2xl">{item[0]}</div>
            <p className="mt-1 text-xs font-black">{item[1]}</p>
          </Link>
        ))}
      </section>

      <section className="overflow-hidden rounded-3xl bg-white shadow-lg border border-slate-100">
        <div className="flex h-28 items-center justify-center bg-slate-100 text-sm font-black text-slate-500">
          SPONSORED AD BANNER
        </div>
      </section>

     <section className="mb-5 rounded-3xl bg-green-600 p-5 text-white shadow-xl">
  <h2 className="text-xl font-black">
    📱 Lakhimpur TV WhatsApp Channel
  </h2>

  <p className="mt-2 text-sm text-green-50">
    लखीमपुर खीरी की खबरें, शिक्षा, तथ्य और जॉब अपडेट सबसे पहले पाएं।
  </p>

  <a
    href="https://whatsapp.com/channel/0029VbDfKhZFMqrai1DlAc38"
    target="_blank"
    rel="noopener noreferrer"
    className="mt-4 inline-block rounded-2xl bg-white px-5 py-3 font-black text-green-700"
  >
    🚀 WhatsApp Channel Join करें
  </a>
</section>

<section>
  <div className="mb-3 flex items-center justify-between">
    <h2 className="text-xl font-black">📰 ताजा अपडेट</h2>
    <Link to="/news" className="text-sm font-bold text-rose-600">
      सभी देखें
    </Link>
  </div>
     

        <div className="space-y-4">
          {newsData.map((item) => (
            <div
              key={item.id}
              className="overflow-hidden rounded-3xl bg-white shadow-lg border border-slate-100"
            >
              <img
  src={item.image}
  alt={item.title}
  className="h-40 w-full object-cover"
/>
              <div className="p-4">
                <span className="rounded-lg bg-rose-100 px-2 py-1 text-xs font-bold text-rose-600">
                  {item.category}
                </span>
                {item.breaking && (
  <span className="ml-2 rounded-lg bg-red-600 px-2 py-1 text-xs font-bold text-white animate-pulse">
    🚨 BREAKING
  </span>
)}
                <h3 className="mt-3 text-lg font-black">{item.title}</h3>
                {item.date && (
  <p className="mt-2 text-xs font-bold text-slate-500">
    🕒 {item.date}
  </p>
)}
                <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
                <Link
                  to={`/news/${item.id}`}
                  className="mt-4 inline-block rounded-xl bg-rose-600 px-4 py-2 font-bold text-white"
                >
                  पूरी खबर पढ़ें
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

function News({ newsData }) {
  const location = useLocation();

const searchTerm =
  new URLSearchParams(location.search).get("search") || "";
  const filteredNews = newsData.filter(
  (item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.desc.toLowerCase().includes(searchTerm.toLowerCase())
);
  return (
    <main className="space-y-4 p-4">
      <h2 className="text-2xl font-black">📰 ताज़ा खबरें</h2>
      {filteredNews.length === 0 && (
  <div className="rounded-3xl bg-white p-6 text-center shadow-lg">
    😔 कोई खबर नहीं मिली
  </div>
)}
      {filteredNews.map((item) => (
        <div
          key={item.id}
          className="overflow-hidden rounded-3xl bg-white shadow-lg"
        >
          <img src={item.image} className="h-40 w-full object-cover" />
          <div className="p-4">
            <div className="flex items-center gap-2 flex-wrap"></div>
            <span className="rounded-lg bg-rose-100 px-2 py-1 text-xs font-bold text-rose-600">
              {item.category}
            </span>
            <h3 className="mt-3 text-lg font-black">{item.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
            <Link
              to={`/news/${item.id}`}
              className="mt-4 inline-block rounded-xl bg-rose-600 px-4 py-2 font-bold text-white"
            >
              पूरी खबर पढ़ें
            </Link>
          </div>
        </div>
      ))}
    </main>
  );
}

function NewsDetails({ newsData }) {
  const { id } = useParams();
  const news = newsData.find((n) => n.id === Number(id)) || newsData[0];

  return (
    <main className="p-4">
      <div className="overflow-hidden rounded-3xl bg-white shadow-lg">
        <img
          src={news.image}
          alt={news.title}
          className="h-48 w-full object-cover"
        />

        <div className="p-4">
          <span className="rounded-lg bg-rose-100 px-2 py-1 text-xs font-bold text-rose-600">
            {news.category}
          </span>

          <h1 className="mt-4 text-2xl font-black">{news.title}</h1>

          <div className="mt-4 leading-7 text-slate-700 space-y-4">
            {news.content.map((para, index) => (
              <p key={index}>{para}</p>
            ))}

            <div className="bg-slate-100 rounded-2xl p-4">
              <h3 className="font-black text-lg mb-3">📚 फैक्ट फाइल</h3>

              <ul className="space-y-2">
                {news.facts.map((fact, index) => (
                  <li key={index}>✅ {fact}</li>
                ))}
              </ul>
            </div>
          </div>

          <a
  href={`https://wa.me/?text=${encodeURIComponent(
    `📰 ${news.title}

${news.desc}

📍 Lakhimpur TV

पूरी खबर पढ़ें:
${window.location.href}`
  )}`}
  target="_blank"
  rel="noopener noreferrer"
  className="mt-5 inline-block rounded-2xl bg-green-600 px-4 py-3 font-bold text-white"
>
  📱 WhatsApp पर शेयर करें
</a>
        </div>
      </div>
    </main>
  );
}

function Store() {
  const products = [
    ["📘", "SSC GS Ebook", "₹99", "GK और Facts Notes"],
    ["📗", "Current Affairs PDF", "₹49", "Monthly Updates"],
    ["🎓", "SSC GS Course", "₹499", "Video + PDF"],
  ];

  return (
    <main className="space-y-4 p-4">
      <div className="rounded-3xl bg-gradient-to-br from-purple-700 to-rose-600 p-6 text-white shadow-xl">
        <h2 className="text-3xl font-black">🛒 डिजिटल स्टोर</h2>
        <p className="mt-2">Ebook, PDF Notes और Courses</p>
      </div>

      {products.map((p) => (
        <div key={p[1]} className="rounded-2xl bg-white p-4 shadow">
          <div className="flex justify-between gap-3">
            <div>
              <h3 className="font-black">{p[0]} {p[1]}</h3>
              <p className="text-sm text-slate-600">{p[3]}</p>
            </div>
            <span className="font-black text-rose-600">{p[2]}</span>
          </div>
          <button className="mt-4 w-full rounded-2xl bg-rose-600 py-3 font-black text-white">
            Buy Now
          </button>
        </div>
      ))}
    </main>
  );
}

function Mausam() {
  return (
    <main className="space-y-4 p-4">
      <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-cyan-500 p-6 text-white shadow-xl">
        <p>📍 सिंघा खुर्द, निघासन</p>
        <h2 className="mt-2 text-5xl font-black">36°C</h2>
        <p className="mt-2 font-bold">आंशिक बादल</p>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-2xl bg-white p-4 shadow">
          <p>नमी</p>
          <h3 className="text-xl font-black">65%</h3>
        </div>
        <div className="rounded-2xl bg-white p-4 shadow">
          <p>हवा</p>
          <h3 className="text-xl font-black">12 km/h</h3>
        </div>
      </div>
    </main>
  );
}

function Tathya() {
  const facts = [
    "भारत का राष्ट्रीय जलीय जीव गंगा डॉल्फिन है।",
    "भारतीय संविधान 26 जनवरी 1950 को लागू हुआ था।",
    "भारत का पहला उपग्रह आर्यभट्ट था।",
    "विश्व का सबसे ऊंचा पर्वत माउंट एवरेस्ट है।",
    "उत्तर प्रदेश भारत का सबसे अधिक जनसंख्या वाला राज्य है।",
    "दुधवा नेशनल पार्क लखीमपुर खीरी में स्थित है।",
    "गोला गोकर्णनाथ को छोटी काशी कहा जाता है।",
    "लखीमपुर खीरी गन्ना उत्पादन के लिए प्रसिद्ध है।",
    "1857 का विद्रोह भारत का पहला स्वतंत्रता संग्राम माना जाता है।",
    "भारत का राष्ट्रीय पक्षी मोर है।",
  ];

  return (
    <main className="p-4">
      <h2 className="text-2xl font-black mb-4">📚 आज के तथ्य</h2>

      <div className="space-y-3">
        {facts.map((fact, index) => (
          <div key={index} className="rounded-2xl bg-white p-4 shadow">
            <h3 className="font-black text-rose-600">तथ्य #{index + 1}</h3>
            <p className="mt-2 text-slate-700 leading-7">{fact}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

function Motivation() {
  const quotes = [
    "सफलता उन्हीं को मिलती है जो हार मानने से इंकार करते हैं।",
    "हर दिन कुछ नया सीखना ही आगे बढ़ने का रास्ता है।",
    "छोटे कदम ही बड़ी मंजिल तक पहुंचाते हैं।",
    "समय का सही उपयोग ही सफलता की कुंजी है।",
    "मेहनत का कोई विकल्प नहीं होता।",
  ];

  return (
    <main className="p-4">
      <h2 className="text-2xl font-black mb-4">💡 आज की प्रेरणा</h2>

      <div className="space-y-4">
        {quotes.map((quote, index) => (
          <div
            key={index}
            className="rounded-3xl bg-white p-5 shadow-lg border-l-4 border-rose-600"
          >
            <p className="text-lg font-semibold leading-8">
              "{quote}"
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}

function Shiksha() {
  const jobs = [
    {
      title: "SSC CGL 2026",
      info: "Graduate candidates ke liye bharti.",
    },
    {
      title: "Railway NTPC",
      info: "Railway recruitment updates aur exam news.",
    },
    {
      title: "UPSSSC PET",
      info: "UP ki bhartiyon ka common eligibility test.",
    },
    {
      title: "UP Police Recruitment",
      info: "Police bharti aur physical updates.",
    },
    {
      title: "Junior Assistant",
      info: "Clerk aur assistant level vacancies.",
    },
  ];

  return (
    <main className="p-4">
      <h2 className="text-2xl font-black mb-4">
        🎓 शिक्षा एवं जॉब अलर्ट
      </h2>

      <div className="space-y-4">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl p-5 shadow-lg"
          >
            <h3 className="font-black text-lg">
              {job.title}
            </h3>

            <p className="text-slate-600 mt-2">
              {job.info}
            </p>

            <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-xl font-bold">
              पूरी जानकारी
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
function AdminPage({ newsData, setNewsData }) {
  const [password, setPassword] = useState("");
  const ADMIN_PASSWORD = "lakhimpur123";
const [fileName, setFileName] = useState("");
const [editId, setEditId] = useState(null);
  const [form, setForm] = useState({
    title: "",
    category: "ताजा खबर",
    desc: "",
    image: "",
    content: "",
    facts: "",
    breaking: false,
date: "",
  });
  const [preview, setPreview] = useState("");

  if (password !== ADMIN_PASSWORD) {
    return (
      <main className="p-4">
        <div className="rounded-3xl bg-white p-5 shadow-lg max-w-md mx-auto">
          <h1 className="text-2xl font-black mb-4">🔐 Admin Login</h1>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-xl border p-3"
          />
          <p className="mt-3 text-sm text-slate-500">Admin password डालें</p>
        </div>
      </main>
    );
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const publishNews = (e) => {
  e.preventDefault();

  if (editId) {
    const updatedNews = newsData.map((item) =>
      item.id === editId
        ? {
            ...item,
            title: form.title,
            category: form.category,
            desc: form.desc,
            image: form.image,
            content: form.content.split("\n"),
            facts: form.facts.split("\n"),
          }
        : item
    );

    setNewsData(updatedNews);
    localStorage.setItem("lakhimpurNews", JSON.stringify(updatedNews));
    setEditId(null);
    alert("News update हो गई ✅");
  } else {
    const newNews = {breaking: form.breaking,
date: new Date().toLocaleString("hi-IN"),
      id: Date.now(),
      title: form.title,
      category: form.category,
      desc: form.desc,
      image: form.image,
      content: form.content.split("\n"),
      facts: form.facts.split("\n"),
    };

    const updatedNews = [newNews, ...newsData];
    setNewsData(updatedNews);
    localStorage.setItem("lakhimpurNews", JSON.stringify(updatedNews));
    alert("News publish हो गई ✅");
  }

  setForm({
    title: "",
    category: "ताजा खबर",
    desc: "",
    image: "",
    content: "",
    facts: "",
  });
};
  const deleteNews = (id) => {
    const updatedNews = newsData.filter((item) => item.id !== id);
    setNewsData(updatedNews);
    localStorage.setItem("lakhimpurNews", JSON.stringify(updatedNews));
  };
  const editNews = (item) => {
  setEditId(item.id);

  setForm({
    title: item.title,
    category: item.category,
    desc: item.desc,
    image: item.image,
    content: item.content.join("\n"),
    facts: item.facts.join("\n"),
     breaking: item.breaking,
    date: item.date || new Date().toLocaleString("hi-IN"),
  });

  window.scrollTo(0, 0);
};

  return (
    <main className="p-4">
      <div className="rounded-3xl bg-white p-5 shadow-lg">
        <h1 className="text-2xl font-black mb-4">🔐 Admin Panel</h1>

        <form onSubmit={publishNews} className="space-y-3">
          <input name="title" value={form.title} onChange={handleChange} required placeholder="News Title" className="w-full rounded-xl border p-3" />

          <select name="category" value={form.category} onChange={handleChange} className="w-full rounded-xl border p-3">
            <option>ताजा खबर</option>
            <option>लखीमपुर समाचार</option>
            <option>शिक्षा</option>
            <option>रोजगार</option>
            <option>तथ्य</option>
            <option>मोटिवेशन</option>
            <option>मौसम</option>
            <option>राशिफल</option>
          </select>
          <label className="flex items-center gap-3 rounded-xl bg-red-50 p-3 font-bold text-red-600">
  <input
    type="checkbox"
    checked={form.breaking}
    onChange={(e) =>
      setForm({
        ...form,
        breaking: e.target.checked,
      })
    }
  />
  🚨 Breaking News
</label>

          <label className="flex cursor-pointer items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-rose-400 bg-rose-50 p-5 text-rose-600 font-black">

  🖼️ Gallery Se Photo Select Kare

  <input
    type="file"
    accept="image/*"
    hidden
    onChange={(e) => {
      const file = e.target.files[0];

      if (file) {
        const reader = new FileReader();

        reader.onloadend = () => {
          setForm({
            ...form,
            image: reader.result,
          });

          setPreview(reader.result);
        };

        reader.readAsDataURL(file);
      }
    }}
  />
</label>

{form.image && (
  <div className="mt-3">
    <img
      src={form.image}
      alt="Preview"
      className="w-full max-h-64 object-cover rounded-2xl border"
    />
  </div>
)}

          <textarea name="desc" value={form.desc} onChange={handleChange} required placeholder="Short Description" className="w-full rounded-xl border p-3" />

          <textarea name="content" value={form.content} onChange={handleChange} required placeholder="पूरी खबर लिखें - हर लाइन नया paragraph बनेगा" className="w-full rounded-xl border p-3 min-h-32" />

          <textarea name="facts" value={form.facts} onChange={handleChange} placeholder="Fact File - हर line अलग fact" className="w-full rounded-xl border p-3" />

          <button className="w-full rounded-2xl bg-rose-600 py-3 font-black text-white">
           {editId ? "Update News" : "Publish News"}
          </button>
        </form>

        <div className="mt-8">
          <h2 className="text-xl font-black mb-4">📰 Published News</h2>

          {newsData.map((item) => (
            <div key={item.id} className="mb-3 rounded-2xl border p-4">
              <h3 className="font-black">{item.title}</h3>
              <p className="text-sm text-slate-500">{item.category}</p>
<button
  onClick={() => editNews(item)}
  className="mt-2 mr-2 rounded-xl bg-blue-600 px-4 py-2 text-white font-bold"
>
  ✏️ Edit
</button>
              <button
                onClick={() => deleteNews(item.id)}
                className="mt-2 rounded-xl bg-red-600 px-4 py-2 text-white font-bold"
              >
                🗑 Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
function SimplePage({ icon, title, text }) {
  return (
    <main className="p-4">
      <div className="rounded-3xl bg-white p-6 shadow-lg">
        <h2 className="text-3xl font-black">
          {icon} {title}
        </h2>
        <p className="mt-3 text-slate-600">{text}</p>
      </div>
    </main>
  );
}

function Contact() {
  return (
    <main className="p-4">
      <div className="rounded-3xl bg-white p-6 shadow-lg">
        <h2 className="text-2xl font-black">📞 संपर्क करें</h2>
        <p className="mt-3 text-slate-600">
          खबर, विज्ञापन या सुझाव के लिए संपर्क करें।
        </p>
        <div className="mt-5 space-y-3">
          <div className="rounded-2xl bg-slate-100 p-4 font-bold">
            📧 askashwani3@gmail.com
          </div>
          <div className="rounded-2xl bg-green-100 p-4 font-bold text-green-700">
  📱 WhatsApp: Coming Soon
</div>

<div className="rounded-2xl bg-blue-100 p-4 font-bold text-blue-700">
  🌐 Website: Lakhimpur TV
</div>
          <div className="rounded-2xl bg-slate-100 p-4 font-bold">
            📍 Lakhimpur Kheri, Uttar Pradesh
          </div>
        </div>
      </div>
    </main>
  );
}

function About() {
  return (
    <main className="p-4">
      <div className="bg-white rounded-3xl p-6 shadow-lg">
        <h2 className="text-3xl font-black text-center">
          LAKHIMPUR <span className="text-red-600">TV</span>
        </h2>

        <p className="text-center text-slate-500 mt-2">
          अपने गांव का डिजिटल मीडिया
        </p>

        <div className="mt-6 space-y-4 leading-7 text-slate-700">
          <p>
            📰 Lakhimpur TV लखीमपुर खीरी और आसपास के क्षेत्रों की खबरों,
            शिक्षा, तथ्यों, प्रेरणादायक सामग्री और स्थानीय जानकारी के लिए
            समर्पित एक डिजिटल मंच है।
          </p>

          <p>
            🎓 हमारा उद्देश्य छात्रों, युवाओं, किसानों और आम नागरिकों तक
            उपयोगी जानकारी सरल भाषा में पहुंचाना है।
          </p>

          <p>
            🌳 दुधवा नेशनल पार्क, गोला गोकर्णनाथ, स्थानीय इतिहास,
            रोजगार, शिक्षा और गांव की खबरों को प्रमुखता देना हमारी पहचान है।
          </p>

          <p>
            🚀 हमारा लक्ष्य लखीमपुर खीरी का सबसे भरोसेमंद डिजिटल मीडिया
            प्लेटफॉर्म बनना है।
          </p>
        </div>
      </div>
    </main>
  );
}

function App() {
  const [open, setOpen] = useState(false);
const [newsData, setNewsData] = useState(() => {
  const saved = localStorage.getItem("lakhimpurNews");
  return saved ? JSON.parse(saved) : defaultNewsData;
});
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">
      {open && (
        <div className="fixed inset-0 z-50 bg-black/40">
          <div className="h-full w-72 overflow-y-auto bg-white p-5 shadow-2xl">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-black">
                LAKHIMPUR<span className="text-rose-600"> TV</span>
              </h2>
              <button onClick={() => setOpen(false)} className="text-3xl">
                ×
              </button>
            </div>

            <div className="space-y-4">
              {menu.map((item) => (
                <Link
                  key={item[2]}
                  to={item[2]}
                  onClick={() => setOpen(false)}
                  className="block text-lg font-bold"
                >
                  {item[0]} {item[1]}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      <Header openMenu={() => setOpen(true)} />

      <Routes>
        <Route path="/" element={<Home newsData={newsData} />} />
        <Route path="/news" element={<News newsData={newsData} />} />
        <Route path="/news/:id" element={<NewsDetails newsData={newsData} />} />
        <Route path="/mausam" element={<Mausam />} />
        <Route path="/store" element={<Store />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />

        <Route path="/rashifal" element={<SimplePage icon="🔯" title="राशिफल" text="दैनिक राशिफल और शुभ जानकारी।" />} />
        <Route path="/health" element={<SimplePage icon="❤️" title="स्वास्थ्य" text="स्वास्थ्य टिप्स और जरूरी जानकारी।" />} />
        <Route path="/shiksha" element={<Shiksha />} />
        <Route path="/tathya" element={<Tathya />} />
        <Route path="/motivation" element={<Motivation />} />
        <Route path="/gallery" element={<SimplePage icon="📸" title="फोटो गैलरी" text="स्थानीय फोटो और कार्यक्रम।" />} />
        <Route path="/videos" element={<SimplePage icon="🎥" title="वीडियो" text="वीडियो रिपोर्ट और अपडेट।" />} />
        <Route path="/manoranjan" element={<SimplePage icon="🎬" title="मनोरंजन" text="फिल्म, वायरल वीडियो और मनोरंजन अपडेट।" />} />
        <Route path="/kavitaye" element={<SimplePage icon="✍️" title="कविताएं" text="हिंदी कविताएं और प्रेरणादायक रचनाएं।" />} />
        <Route path="/admin" element={<AdminPage newsData={newsData} setNewsData={setNewsData} />} />
      </Routes>

      <footer className="mt-6 bg-[#071225] p-5 text-center text-white">
        <h2 className="text-xl font-black">
          LAKHIMPUR<span className="text-rose-500"> TV</span>
        </h2>
        <p className="mt-2 text-sm text-slate-300">
          अपने गांव का डिजिटल मीडिया
        </p>
        <p className="mt-4 text-xs text-slate-400">
          © 2026 Lakhimpur TV. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;