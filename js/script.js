$(function () {
    function updateLanguage(lang) {
      const translations = {
        br: {
          nav: ["Soluções", "Comunidade", "Comprar", "Entrar"],
          about: [
            ["Solução", "Visão Geral", "Pagamentos"],
            ["Suporte", "Ajuda", "Termos e Políticas"]
          ],
          title: "Domine um Novo Idioma e Transforme o Seu Futuro!",
          sbj: " Você já imaginou quantas portas podem se abrir ao falar um novo idioma? Seja para conquistar uma promoção, viajar pelo mundo sem barreiras, ou ampliar seus horizontes culturais, este é o momento de dar o próximo passo! Nosso curso foi feito para VOCÊ que quer aprender rápido, de forma prática e divertida!",
          listone: "Interativo: Aprenda com aulas dinâmicas e exercícios focados no uso real do idioma",
          list: `
          <ul>
              <li><strong>Método Interativo:</strong> Aprenda com aulas dinâmicas e exercícios focados no uso real do idioma.</li><br>
              <li><strong>Flexibilidade:</strong> Estude no seu ritmo, com horários que cabem na sua rotina.</li><br>
              <li><strong>Professores Especializados:</strong> Sempre prontos para ajudar você a atingir a fluência.</li><br>
          </ul>
      `,
          subj:`<u>Inscreva-se agora e aproveite condições exclusivas para novos alunos!</u><br><br>
          <strong>Fale. Viva. Conquiste. <br>
                Garanta sua vaga hoje mesmo! </strong>`,
          langClass: "change-br",
          langText: "pt-BR"
        },
    
        en: {
          nav: ["Solutions", "Community", "Buy", "Login"],
          about: [
            ["Solution", "Overview", "Payments"],
            ["Support", "Help", "Terms and Policies"]
          ],
          title: "Master a New Language and Transform Your Future!",
          sbj: "Have you ever imagined how many doors can open by speaking a new language? Whether it's to land a promotion, travel the world without barriers, or broaden your cultural horizons, now is the time to take the next step! Our course is designed for YOU to learn quickly, practically, and enjoyably!",
          listone: "Interactive: Learn with dynamic lessons and exercises focused on real-world language use",
          list: `
          <ul>
            <li><strong>Interactive Method:</strong> Learn with dynamic lessons and exercises focused on real-world language use.</li><br>
            <li><strong>Flexibility:</strong> Study at your own pace with schedules that fit into your routine.</li><br>
            <li><strong>Expert Instructors:</strong> Always ready to help you achieve fluency.</li><br>
          </ul>
`,
subj: `<u>Sign up now and take advantage of exclusive offers for new students!</u><br><br>
<strong>Speak. Live. Conquer. <br>
Secure your spot today! </strong>`,

          langClass: "change-en",
          langText: "en-US"
        },
        es: {
          nav: ["Soluciones", "Comunidad", "Comprar", "Entrar"],
          about: [
            ["Solución", "Visión General", "Pagos"],
            ["Soporte", "Ayuda", "Términos y Políticas"]
          ],
          title: "¡Domina un Nuevo Idioma y Transforma tu Futuro!",
          sbj: "¿Alguna vez has imaginado cuántas puertas se pueden abrir al hablar un nuevo idioma? Ya sea para conseguir un ascenso, viajar por el mundo sin barreras o ampliar tus horizontes culturales, ¡este es el momento de dar el siguiente paso! Nuestro curso está diseñado para TI, para que aprendas de manera rápida, práctica y divertida.",
          listone: "Interactivo: Aprende con lecciones dinámicas y ejercicios enfocados en el uso real del idioma.",
          list: `
            <ul>
              <li><strong>Método Interactivo:</strong> Aprende con lecciones dinámicas y ejercicios enfocados en el uso real del idioma.</li><br>
              <li><strong>Flexibilidad:</strong> Estudia a tu propio ritmo, con horarios que se adaptan a tu rutina.</li><br>
              <li><strong>Profesores Especializados:</strong> Siempre listos para ayudarte a alcanzar la fluidez.</li><br>
            </ul>
            `,
          subj: `<u>¡Inscríbete ahora y aprovecha ofertas exclusivas para nuevos estudiantes!</u><br><br>
                  <strong>Habla. Vive. Conquista. <br>
                ¡Asegura tu lugar hoy mismo! </strong>`,
            langClass: "change-es",
          langText: "ES"
        },
        zh: {
            nav: ["解决方案", "社区", "购买", "登录"],
            about: [
              ["解决方案", "概览", "支付"],
              ["支持", "帮助", "条款与政策"]
            ],
            title: "掌握一门新语言，改变您的未来！",
            sbj: "您是否想象过，会一门新语言可以打开多少扇门？无论是为了获得升职、无障碍地环游世界，还是拓宽您的文化视野，现在就是迈出下一步的最佳时机！我们的课程专为您设计，让您快速、有趣且实用地学习！",
            listone: "互动式学习：通过动态课程和注重语言实际使用的练习进行学习。",
            list: `
              <ul>
                  <li><strong>互动教学法：</strong>通过动态课程和注重语言实际使用的练习进行学习。</li><br>
                  <li><strong>灵活性：</strong>按照自己的节奏学习，安排适合您日常生活的时间。</li><br>
                  <li><strong>专业教师：</strong>随时为您提供帮助，助您实现流利表达。</li><br>
              </ul>
              `,  
            subj: `<u>立即报名，享受新学员专属优惠！</u><br><br>
            <strong>说。体验。征服。<br>
            今天就锁定您的名额！</strong>`,

            langClass: "change-zh",
            langText: "ZH"
          }
          
      };
  
      const data = translations[lang];
      $(".navbar").children().each(function (index) {
        $(this).text(data.nav[index]);
      });
      $(".language-selected").text(data.langText)
        .removeClass("change-br change-en change-es change-zh")
        .addClass(data.langClass);
      $("#title").text(data.title);
      $("#subject").text(data.sbj);
      $("#sub").html(data.subj);
      $("#list-container").html(data.list);
      $(".about-container ul").each(function (ulIndex) {
        $(this).children("li").each(function (liIndex) {
          $(this).find("a").text(data.about[ulIndex][liIndex]);
        });
      });
    }
  
    $(".br").click(function () {
      updateLanguage("br");
    });
  
    $(".en").click(function () {
      updateLanguage("en");
    });
  
    $(".es").click(function () {
      updateLanguage("es");
    });
    $(".zh").click(function () {
        updateLanguage("zh");
      });
  });
  