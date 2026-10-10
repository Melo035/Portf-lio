/* ============================================================
   ANO NO FOOTER
   ============================================================ */
document.querySelectorAll("#year").forEach(el => {
  el.textContent = new Date().getFullYear();
});

/* ============================================================
   TEMA (dark mode)
   ============================================================ */
(function () {
  const STORAGE_KEY = "am-theme";
  const root = document.documentElement;
  const saved = localStorage.getItem(STORAGE_KEY);
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (saved === "dark" || saved === "light") {
    root.setAttribute("data-theme", saved);
  } else {
    root.setAttribute("data-theme", prefersDark ? "dark" : "light");
  }

  const btn = document.getElementById("themeToggle");
  if (btn) {
    btn.addEventListener("click", () => {
      const current = root.getAttribute("data-theme");
      const next = current === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      localStorage.setItem(STORAGE_KEY, next);
    });
  }
})();

/* ============================================================
   IDIOMA (PT / EN)
   ============================================================ */
const translations = {
  pt: {
    "brand": "allan.melo",
    "nav.projects": "projectos",
    "nav.about": "sobre",
    "nav.skills": "skills",
    "nav.services": "serviços",
    "nav.path": "percurso",
    "nav.blog": "blog",
    "nav.contact": "Contacto ↗",

    "hero.eyebrow": "Maputo, Moçambique · Disponível",
    "hero.title": "Transformo ideias em <em>soluções digitais.</em>",
    "hero.intro": "Sou Allan Melo — desenvolvedor web e técnico de TI. Crio produtos digitais úteis, interfaces simples e sistemas que resolvem problemas reais.",
    "hero.cta1": "Ver projectos",
    "hero.cta2": "Falar comigo",
    "hero.note.title": "Desenvolvimento web",
    "hero.note.body": "Do conceito à funcionalidade, com foco em pessoas e resultados.",

    "tick.1": "Desenvolvimento web",
    "tick.2": "Sistemas de gestão",
    "tick.3": "Bases de dados",
    "tick.4": "Suporte informático",
    "tick.5": "UI & usabilidade",

    "proj.kicker": "Trabalho seleccionado",
    "proj.title": "Projectos com <em>propósito.</em>",
    "proj.desc": "Sistemas e ideias que desenvolvi para organizar informação, simplificar tarefas e melhorar experiências digitais.",
    "proj.kofre.type": "Produto digital",
    "proj.kofre.desc": "Desenvolvi uma plataforma web para centralizar e organizar documentos pessoais num único espaço digital, facilitando a consulta, a pesquisa e o acompanhamento de prazos de validade, com o objectivo de reduzir a perda de documentos e simplificar a sua gestão.",
    "proj.fila.type": "Sistema web",
    "proj.fila.desc": "Desenvolvi um sistema de gestão de filas de atendimento para organizar o fluxo de utentes, facilitar o controlo de senhas e melhorar o acompanhamento do atendimento, com diferentes níveis de acesso para administradores, operadores e utilizadores.",
    "proj.sigec.type": "Sistema de gestão",
    "proj.sigec.desc": "Desenvolvi um sistema web de gestão de informação e processos administrativos, orientado para centralizar dados, organizar tarefas e controlar o acesso dos utilizadores, contribuindo para uma gestão institucional mais organizada e eficiente.",
    "proj.viewSite": "Ver site",
    "proj.viewCode": "Código",
    "proj.inProgress": "Em desenvolvimento",
    "proj.private": "Projecto institucional",

    "about.card.eyebrow": "O lado humano da tecnologia",
    "about.card.text": "Curiosidade para aprender, atenção aos detalhes e vontade de transformar problemas em soluções práticas.",
    "about.kicker": "Sobre mim",
    "about.title": "Construo, aprendo<br>e <em>melhoro sempre.</em>",
    "about.p1": "Sou Allan Marcelino Melo, de Maputo, Moçambique. Concluí a formação CV5 em Técnico de Programação de Aplicações Web, depois de uma base em suporte informático. Tenho interesse especial no desenvolvimento de aplicações web, na criação de produtos digitais e na tecnologia aplicada a necessidades do dia-a-dia.",
    "about.p2": "Gosto de acompanhar um projecto desde a ideia e estrutura da interface até à lógica, à base de dados e aos testes. Procuro escrever soluções claras, aprender com cada desafio e continuar a crescer como profissional.",
    "fact.1.title": "Formação CV5",
    "fact.1.sub": "Programação de Aplicações Web",
    "fact.2.title": "Maputo, MZ",
    "fact.2.sub": "Baseado em Moçambique",
    "fact.3.title": "Full stack web",
    "fact.3.sub": "Interesse principal",
    "fact.4.title": "Aprendizagem contínua",
    "fact.4.sub": "Prática e projectos próprios",

    "skills.kicker": "O que trago",
    "skills.title": "Competências.",
    "skills.desc": "Uma combinação de desenvolvimento, bases de dados e conhecimentos técnicos para construir e manter soluções.",
    "skill.1.t": "Frontend", "skill.1.d": "HTML, CSS, JavaScript e interfaces responsivas.",
    "skill.2.t": "Backend", "skill.2.d": "PHP, lógica de aplicações e operações CRUD.",
    "skill.3.t": "Bases de dados", "skill.3.d": "MySQL, modelação e integração com aplicações.",
    "skill.4.t": "Programação", "skill.4.d": "Java e fundamentos de programação.",
    "skill.5.t": "Suporte informático", "skill.5.d": "Diagnóstico, configuração e resolução de problemas.",
    "skill.6.t": "UI e design web", "skill.6.d": "Estrutura visual, consistência e usabilidade.",
    "skill.7.t": "Ferramentas", "skill.7.d": "Git, VS Code, XAMPP e ambiente local.",
    "skill.8.t": "Resolução de problemas", "skill.8.d": "Análise, autonomia e aprendizagem contínua.",

    "serv.kicker": "O que ofereço",
    "serv.title": "Serviços.",
    "serv.desc": "Trabalho com empresas, instituições e pessoas que precisam de soluções digitais funcionais.",
    "serv.1.t": "Criação de webapps", "serv.1.d": "Desenvolvimento de aplicações web personalizadas, do conceito à publicação.",
    "serv.2.t": "Sistemas de gestão", "serv.2.d": "Sistemas internos para organizar informação, processos e utilizadores.",
    "serv.3.t": "Manutenção e suporte", "serv.3.d": "Actualização, correcção de erros e suporte técnico de sites e aplicações.",
    "serv.4.t": "Bases de dados e integração", "serv.4.d": "Modelação, migração e integração de bases de dados com aplicações web.",

    "exp.kicker": "Percurso",
    "exp.title": "Formação & prática.",
    "exp.desc": "Uma base técnica que combina programação, suporte e experiência prática em contexto de trabalho.",
    "exp.1.period": "Formação técnica",
    "exp.1.title": "Técnico de Programação de Aplicações Web — CV5",
    "exp.1.desc": "Formação concluída em 2026, no Instituto de Transportes e Comunicações, com foco no desenvolvimento de aplicações web e na construção de soluções funcionais.",
    "exp.2.period": "Experiência prática",
    "exp.2.title": "Estagiário de Desenvolvimento Web e Suporte Informático",
    "exp.2.desc": "Ministério da Educação e Cultura (MEC) — 6 meses. Apoio no desenvolvimento e manutenção de aplicações web, criação de páginas com HTML, CSS, JavaScript e PHP, gestão de bases de dados, operações CRUD, suporte técnico a utilizadores e testes de funcionamento das aplicações.",
    "exp.3.period": "Base técnica",
    "exp.3.title": "Suporte informático",
    "exp.3.desc": "Conhecimentos de instalação, configuração, manutenção e resolução de problemas informáticos, complementando o trabalho de programação.",

    "contact.kicker": "Contacto",
    "contact.title": "Tem um projecto em mente?",
    "contact.desc": "Estou aberto a oportunidades, colaboração em projectos e conversas sobre tecnologia e desenvolvimento web.",
    "form.name": "Nome",
    "form.email": "Email",
    "form.message": "Mensagem",
    "form.submit": "Enviar mensagem ↗",

    "footer.note": "Feito com intenção."
  },

  en: {
    "brand": "allan.melo",
    "nav.projects": "projects",
    "nav.about": "about",
    "nav.skills": "skills",
    "nav.services": "services",
    "nav.path": "path",
    "nav.blog": "blog",
    "nav.contact": "Contact ↗",

    "hero.eyebrow": "Maputo, Mozambique · Available",
    "hero.title": "I turn ideas into <em>digital solutions.</em>",
    "hero.intro": "I'm Allan Melo — a web developer and IT technician. I build useful digital products, simple interfaces and systems that solve real problems.",
    "hero.cta1": "View projects",
    "hero.cta2": "Talk to me",
    "hero.note.title": "Web development",
    "hero.note.body": "From concept to functionality, with focus on people and results.",

    "tick.1": "Web development",
    "tick.2": "Management systems",
    "tick.3": "Databases",
    "tick.4": "IT support",
    "tick.5": "UI & usability",

    "proj.kicker": "Selected work",
    "proj.title": "Projects with <em>purpose.</em>",
    "proj.desc": "Systems and ideas I've developed to organise information, simplify tasks and improve digital experiences.",
    "proj.kofre.type": "Digital product",
    "proj.kofre.desc": "I developed a web platform to centralise and organise personal documents in a single digital space, making it easier to browse, search and track expiry dates — aiming to reduce document loss and simplify management.",
    "proj.fila.type": "Web system",
    "proj.fila.desc": "I developed a queue management system to organise patient flow, simplify ticket control and improve service tracking, with different access levels for administrators, operators and users.",
    "proj.sigec.type": "Management system",
    "proj.sigec.desc": "I developed a web system for managing information and administrative processes, focused on centralising data, organising tasks and controlling user access — contributing to a more organised and efficient institutional management.",
    "proj.viewSite": "View site",
    "proj.viewCode": "Code",
    "proj.inProgress": "In development",
    "proj.private": "Institutional project",

    "about.card.eyebrow": "The human side of technology",
    "about.card.text": "Curiosity to learn, attention to detail and the will to turn problems into practical solutions.",
    "about.kicker": "About me",
    "about.title": "I build, learn<br>and <em>always improve.</em>",
    "about.p1": "I'm Allan Marcelino Melo, from Maputo, Mozambique. I completed the CV5 qualification as a Web Application Programming Technician, after a foundation in IT support. I'm especially interested in web application development, digital product creation and technology applied to everyday needs.",
    "about.p2": "I like to follow a project from the idea and interface structure through to the logic, database and testing. I aim to write clear solutions, learn from every challenge and keep growing as a professional.",
    "fact.1.title": "CV5 Qualification",
    "fact.1.sub": "Web Application Programming",
    "fact.2.title": "Maputo, MZ",
    "fact.2.sub": "Based in Mozambique",
    "fact.3.title": "Full stack web",
    "fact.3.sub": "Main interest",
    "fact.4.title": "Continuous learning",
    "fact.4.sub": "Practice and personal projects",

    "skills.kicker": "What I bring",
    "skills.title": "Skills.",
    "skills.desc": "A combination of development, databases and technical knowledge to build and maintain solutions.",
    "skill.1.t": "Frontend", "skill.1.d": "HTML, CSS, JavaScript and responsive interfaces.",
    "skill.2.t": "Backend", "skill.2.d": "PHP, application logic and CRUD operations.",
    "skill.3.t": "Databases", "skill.3.d": "MySQL, modelling and application integration.",
    "skill.4.t": "Programming", "skill.4.d": "Java and programming fundamentals.",
    "skill.5.t": "IT support", "skill.5.d": "Diagnostics, configuration and problem solving.",
    "skill.6.t": "UI and web design", "skill.6.d": "Visual structure, consistency and usability.",
    "skill.7.t": "Tools", "skill.7.d": "Git, VS Code, XAMPP and local environment.",
    "skill.8.t": "Problem solving", "skill.8.d": "Analysis, autonomy and continuous learning.",

    "serv.kicker": "What I offer",
    "serv.title": "Services.",
    "serv.desc": "I work with companies, institutions and people who need functional digital solutions.",
    "serv.1.t": "Web app development", "serv.1.d": "Custom web applications, from concept to launch.",
    "serv.2.t": "Management systems", "serv.2.d": "Internal systems to organise information, processes and users.",
    "serv.3.t": "Maintenance and support", "serv.3.d": "Updates, bug fixing and technical support for websites and apps.",
    "serv.4.t": "Databases and integration", "serv.4.d": "Modelling, migration and integration of databases with web applications.",

    "exp.kicker": "Path",
    "exp.title": "Education & practice.",
    "exp.desc": "A technical base combining programming, support and hands-on experience in a work context.",
    "exp.1.period": "Technical education",
    "exp.1.title": "Web Application Programming Technician — CV5",
    "exp.1.desc": "Completed in 2026 at the Institute of Transport and Communications, focused on web application development and building functional solutions.",
    "exp.2.period": "Practical experience",
    "exp.2.title": "Web Development & IT Support Intern",
    "exp.2.desc": "Ministry of Education and Culture (MEC) — 6 months. Support in web application development and maintenance, building pages with HTML, CSS, JavaScript and PHP, database management, CRUD operations, technical user support and application testing.",
    "exp.3.period": "Technical base",
    "exp.3.title": "IT support",
    "exp.3.desc": "Knowledge of installation, configuration, maintenance and troubleshooting of computer systems, complementing programming work.",

    "contact.kicker": "Contact",
    "contact.title": "Got a project in mind?",
    "contact.desc": "I'm open to opportunities, project collaboration and conversations about technology and web development.",
    "form.name": "Name",
    "form.email": "Email",
    "form.message": "Message",
    "form.submit": "Send message ↗",

    "footer.note": "Made with intention."
  }
};

(function () {
  const STORAGE_KEY = "am-lang";
  const html = document.documentElement;

  function applyLang(lang) {
    html.setAttribute("lang", lang === "en" ? "en" : "pt-MZ");

    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (translations[lang][key] !== undefined) {
        el.textContent = translations[lang][key];
      }
    });

    document.querySelectorAll("[data-i18n-html]").forEach(el => {
      const key = el.getAttribute("data-i18n-html");
      if (translations[lang][key] !== undefined) {
        el.innerHTML = translations[lang][key];
      }
    });

    const btn = document.getElementById("langToggle");
    if (btn) btn.textContent = lang === "pt" ? "EN" : "PT";

    localStorage.setItem(STORAGE_KEY, lang);
  }

  const saved = localStorage.getItem(STORAGE_KEY);
  const initial = saved === "en" ? "en" : "pt";
  applyLang(initial);

  const btn = document.getElementById("langToggle");
  if (btn) {
    btn.addEventListener("click", () => {
      const current = localStorage.getItem(STORAGE_KEY) || "pt";
      applyLang(current === "pt" ? "en" : "pt");
    });
  }
})();

/* ============================================================
   FORMULÁRIO DE CONTACTO (Web3Forms)
   ============================================================ */
(function () {
  const form = document.getElementById("contactForm");
  if (!form) return;

  const status = document.getElementById("formStatus");
  const submitBtn = form.querySelector("button[type=submit]");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const originalText = submitBtn.textContent;

    submitBtn.disabled = true;
    submitBtn.textContent = "A enviar…";
    status.textContent = "";

    try {
      const data = new FormData(form);
      const response = await fetch(form.action, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" }
      });

      const result = await response.json();

      if (response.ok && result.success) {
        status.textContent = "✓ Mensagem enviada. Obrigado!";
        form.reset();
      } else {
        status.textContent = "✗ Algo falhou. Tenta novamente ou usa o email.";
      }
    } catch (err) {
      status.textContent = "✗ Erro de rede. Tenta novamente.";
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
    }
  });
})();