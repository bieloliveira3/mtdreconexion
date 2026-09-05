# Método Reconexión — Copy completa de la landing (ES-LATAM neutro)

> Documento listo para pegar. Cada sección trae una línea de intención (objeción/emoción que resuelve).
> Reglas aplicadas: sin título clínico para Renata, sin escasez falsa, sin promesa de resultado, sin testimonios inventados, un solo producto (US$ 6,99).

---

## 1. Barra superior

**Intención:** dice la verdad operativa antes de que la duda aparezca (¿qué es?, ¿cuánto?, ¿es suscripción?).

> eBook digital de 53 páginas · Pago único de US$ 6,99 · Acceso inmediato · Garantía de 7 días

Variante corta para móvil:

> Pago único US$ 6,99 · Acceso inmediato · Garantía de 7 días

**Nota de implementación:** reemplaza el texto actual "Precio especial por poco tiempo" en `UrgencyBar.tsx`. No hay ventana de precio, no hay contador. Pon `COUNTDOWN_ENABLED = false`.

---

## 2. Hero

**Intención:** nombrar en una línea el estado exacto en el que la persona llegó (todavía hay amor, ya no hay forma de hablar) y bajar el riesgo de la compra.

### Eyebrow

> Guía práctica · 7 fases · Plan de 90 días

### H1 — Opción A (recomendada, la más específica)

> Se quieren. Duermen en la misma cama. Y hace meses que no se dicen nada de verdad.

### H1 — Opción B (más directa al ciclo)

> No es que se haya acabado el amor. Es que la misma discusión ya lleva años ganando.

### H1 — Opción C (más suave, para públicos más fríos)

> Todavía lo amas. Lo que ya no sabes es cómo hablarle sin que termine mal.

### Subtítulo

> Método Reconexión es una guía práctica de 53 páginas. Siete fases, ejercicios cortos y guiones de conversación para salir del ciclo de siempre y volver a entenderse. No es terapia y no promete milagros. Es un método para trabajar, paso por paso.

### Bullets

- 7 fases en orden, para saber qué hacer primero y qué dejar para después
- Ejercicios y guiones de conversación que caben en veinte minutos
- Un plan de 90 días para no intentar arreglarlo todo en una sola noche

### Texto del botón

> Quiero empezar el método

Alternativas probables para A/B: *"Empezar hoy por US$ 6,99"* · *"Quiero mi copia ahora"*

### Micro-copy debajo del botón

> Pago único de US$ 6,99. No es suscripción. Recibes el acceso en tu correo apenas termina el pago.
> Si en 7 días sientes que no es para ti, te devolvemos el 100%. Sin preguntas.

---

## 3. Sección de dolor

**Intención:** que la persona piense "esto lo escribieron mirándome", que es lo único que compra atención en tráfico frío.

### Título

> Nadie se aleja de un día para otro

### Cuerpo

> Pasa despacio. Tan despacio que no se nota.
>
> Primero es una discusión por los platos que en realidad no era por los platos. Después es responder "nada" cuando te preguntan qué te pasa, porque explicarlo va a costar más caro que callarse.
>
> Después es el celular. Los dos en la cama, cada uno con su pantalla, dándose la espalda sin haberlo decidido. Dormir a treinta centímetros de la persona que amas y sentirte más solo que cuando estabas solo de verdad.
>
> Después es medir cada frase antes de decirla. Buscar el momento, el tono, la palabra exacta, y aun así ver cómo se le endurece la cara y saber que otra vez se dañó la noche.
>
> Y llega el día en que ves una foto de hace cuatro años. Los dos riéndose de algo que ya nadie recuerda. Y te quedas mirándola pensando: en qué momento pasó esto. Cuál fue el día. Porque no hubo un día.
>
> Lo más pesado no es pelear. Es intentarlo solo. Proponer un plan y que lo acepte sin ganas. Buscarlo y que se voltee. Sentir que tú estás haciendo fuerza para los dos y que del otro lado hay alguien que ya se resignó.
>
> Esto no se queda quieto. El silencio que hoy dura una tarde el año pasado duraba una hora. Es la misma distancia, y cada mes ocupa un poco más de espacio.

### Cierre de sección

> Si te reconociste en algo de esto, no es que se les haya acabado el amor. Es que nadie les enseñó cómo salir de acá.

**Nota:** el bloque de frases entre comillas actual (`ProblemSection.tsx`) funciona bien como apoyo visual. Puedes mantenerlo debajo del texto, con estas frases:

- "Discutimos siempre por lo mismo y nunca se resuelve."
- "Vivimos juntos y me siento solo."
- "Ya no sé qué decirle sin que se convierta en pelea."
- "Me acuerdo de cómo éramos y no sé dónde se perdió."
- "Siento que soy el único que está intentando."
- "Tengo miedo de que esto ya no tenga arreglo."

---

## 4. Cómo funciona / las 7 fases

**Intención:** convertir "otro libro de consejos" en "un mapa con orden", que es la diferencia entre leer y aplicar.

### Título

> No necesitas más consejos sueltos. Necesitas saber qué va primero.

### Cuerpo

> La mayoría de las parejas intenta arreglar todo al mismo tiempo. Quieren volver a tener intimidad mientras siguen gritándose. Quieren perdonar heridas viejas antes de aprender a escuchar sin defenderse. Se cansan y concluyen que ya no se puede.
>
> No es que no se pueda. Es que el orden estaba invertido.
>
> El método organiza el proceso en siete fases. Cada fase abre la puerta de la siguiente. No pasas a reparar antes de dejar de hacerte daño. No trabajas la intimidad antes de poder tener una conversación entera sin que termine mal.
>
> Estas fases no las inventé yo. Salen de investigación publicada sobre parejas: el trabajo de John y Julie Gottman sobre qué predice que una relación siga en pie, la Terapia Focalizada en las Emociones de Sue Johnson y la Comunicación No Violenta de Marshall Rosenberg. Lo que hice fue ordenarlas y convertirlas en ejercicios que se pueden hacer un martes por la noche.

### Cómo presentar las fases

Formato: número, nombre corto, una línea de qué logra y una línea de qué haces. Nada de párrafos largos en las tarjetas.

| # | Fase | Qué logra | Qué haces |
|---|------|-----------|-----------|
| 01 | Diagnóstico | Ver el ciclo real, no la pelea de anoche | Mapeas la discusión que se repite y encuentras el disparador |
| 02 | Desescalada | Dejar de hacerse daño antes de intentar reparar | Aprendes a frenar la pelea a tiempo y a volver después |
| 03 | Escucha | Oírlo sin empezar a armar tu defensa | Practicas escuchar hasta el final, incluso cuando duele |
| 04 | Expresión | Pedir sin reproche, hablar sin herir | Usas una fórmula para decir lo que necesitas sin acusar |
| 05 | Reparación | Cerrar lo que quedó abierto | Trabajas las disculpas que sí funcionan y las heridas viejas |
| 06 | Reconstrucción | Volver a ser amigos y volver a desearse | Recuperas amistad, intimidad, planes y rituales |
| 07 | Mantenimiento | Que no se vuelva a perder | Conviertes lo nuevo en costumbre, no en un buen mes |

Frase de cierre de la sección:

> Siete fases. En orden. Con ejercicios en cada una.

---

## 5. Qué tiene adentro

**Intención:** mostrar que por US$ 6,99 hay trabajo real adentro, no diez páginas de frases bonitas.

### Título

> 53 páginas para trabajar, no para subrayar

### Cuerpo breve

> El eBook está hecho para tenerlo abierto mientras hacen el ejercicio, no para leerlo de corrido en una tarde y no volver a abrirlo.

### Lista

- eBook digital completo, 53 páginas, en español
- El método de 7 fases explicado paso por paso
- Ejercicios prácticos en cada fase, la mayoría de veinte minutos o menos
- Guiones de conversación para los temas que siempre terminan mal
- Técnicas de desescalada para frenar la pelea antes de que se salga de control
- La fórmula para pedir algo sin que suene a reproche
- Qué hacer con las heridas que quedaron sin cerrar
- Cómo recuperar la amistad y la intimidad, en ese orden
- Qué hacer con el conflicto que se repite hace años
- Un capítulo entero para cuando solo uno de los dos quiere intentarlo
- El plan de 90 días, mes por mes
- Acceso inmediato. Lo lees en el celular, la tablet o la computadora
- Es tuyo para siempre. Sin suscripción, sin renovación

### Micro-copy

> Puedes leerlo sin que nadie se entere. Llega a tu correo, se abre en tu celular, y no aparece en ninguna parte hasta que tú decidas contarlo.

---

## 6. Quién está detrás

**Intención:** dar credibilidad sin credencial clínica, y ganar confianza justamente por admitir lo que no es.

### Título

> Quién está detrás: Renata Ramírez

### Bajada

> Reunió y ordenó el Método Reconexión

### Cuerpo

> Empiezo por lo que no soy, porque me parece lo más honesto que puedo decirte: no soy terapeuta, no soy psicóloga, no atiendo a nadie. Este libro no es terapia.
>
> Lo que sí soy es alguien que pasó años leyendo todo lo que encontró sobre por qué dos personas que se quieren dejan de entenderse. La investigación de John y Julie Gottman sobre qué predice que una pareja siga junta. La Terapia Focalizada en las Emociones, de Sue Johnson. La Comunicación No Violenta, de Marshall Rosenberg.
>
> Encontré teoría excelente. Y casi nada que una pareja cansada, con hijos dormidos en el cuarto de al lado y veinte minutos libres, pudiera usar esa misma noche.
>
> Método Reconexión es esa parte. La aplicable. Siete fases, ejercicios cortos y palabras concretas para decir en voz alta.
>
> Lo digo dos veces dentro del libro y lo repito acá: si tu relación necesita acompañamiento profesional, búscalo. Esto no lo reemplaza. Para muchas personas es lo que se puede hacer hoy, con lo que hay hoy. A veces es el primer paso.

---

## 7. El plan de 90 días

**Intención:** quitar la sensación de tarea imposible y responder "no tengo tiempo / no sé por dónde empezar".

### Título

> Deja de intentar arreglarlo todo esta noche

### Cuerpo

> Casi todas las reconciliaciones fracasan por exceso de ambición. Una conversación larga, un fin de semana intenso, promesas grandes. Y a los diez días todo vuelve a estar igual, con la desilusión encima.
>
> El plan de 90 días hace lo contrario. Reparte el trabajo en tres meses, con una sola cosa en foco a la vez.

| Mes | Foco | Qué se trabaja |
|-----|------|----------------|
| Mes 1 | Parar el daño | Identificar el ciclo, bajar la escalada, recuperar gestos pequeños |
| Mes 2 | Volver a hablarse | Escuchar sin defenderse, pedir sin atacar, reparar después de una pelea |
| Mes 3 | Reconstruir | Amistad, intimidad, el conflicto de siempre, planes compartidos |

### Cierre

> Noventa días no es una promesa de resultado. Es el tiempo que el plan tarda en pasar por todo. Lo que ocurra depende de ustedes dos, de lo que carguen atrás y de cuánto lo trabajen. Nadie honesto puede decirte otra cosa.

---

## 8. Si estás intentando solo

**Intención:** la objeción más frecuente y más dolorosa del público de este anuncio: "él/ella no va a leer esto".

### Título

> ¿Y si tu pareja ni siquiera sabe que estás leyendo esto?

### Cuerpo

> Es lo más común. La mayoría de las personas que abren este libro lo abren solas, sin avisarle a nadie, con el celular boca abajo por si alguien entra.
>
> Nadie te va a pedir que le muestres un PDF a alguien que no quiere hablar del tema.
>
> Hay un capítulo entero para esto. Se llama "Cuando solo uno quiere". Trabaja lo único que sí está bajo tu control:

- Dejar de presionar, que es lo que más aleja cuando más miedo tienes
- Cambiar tu parte del ciclo, porque el ciclo necesita dos para repetirse
- Reaccionar distinto cuando se cierra o se va del cuarto
- Pedir sin reprochar, para que lo que digas se pueda escuchar
- Recuperar los gestos chicos, que pesan más que las conversaciones largas

### Cierre

> Cambiar tu parte no es cargar con toda la relación ni darle la razón. Es dejar de alimentar el ciclo y ver qué pasa del otro lado. A veces cambia. A veces no. Pero al menos deja de estar en tus manos y en tu cabeza todo el día.

---

## 9. Oferta

**Intención:** que US$ 6,99 se sienta obviamente pequeño frente a lo que está en juego, sin inventar descuentos ni relojes.

### Eyebrow

> Acceso digital inmediato

### Título

> Empieza hoy, por menos de lo que gastan en una salida

### Anclaje de valor (texto alrededor del precio)

> Una sesión de terapia de pareja en tu ciudad cuesta entre 40 y 120 dólares. La primera. Y hay que ir dos.
>
> El Método Reconexión cuesta US$ 6,99. Una sola vez. Es menos que dos cafés, menos que un domicilio, menos que la mitad de una entrada de cine.
>
> No te estoy diciendo que esto valga lo mismo que un profesional, porque no es lo mismo y ya lo dije. Te estoy diciendo que si hoy no vas a ir a terapia, esto es lo que sí puedes empezar esta noche.

### Bloque de precio

> **US$ 6,99** · pago único
> Cerca de 23.235 COP · en el checkout se convierte a tu moneda local
>
> Lo que recibes:
> - eBook completo de 53 páginas
> - Método de 7 fases con ejercicios
> - Guiones de conversación
> - Plan de 90 días
> - Acceso inmediato por correo, para siempre

### Texto del botón

> Quiero el Método Reconexión por US$ 6,99

Alternativa más corta: *"Descargar el método ahora"*

### Debajo del botón

> Pago procesado por Hotmart. No es suscripción, no se renueva, no se cobra nada más.
> Garantía de 7 días: si no es para ti, te devolvemos el 100%.

### Nota al pie de la sección

> El método sintetiza herramientas y aportes del campo de las relaciones de pareja, incluidos trabajos asociados a John y Julie Gottman, Sue Johnson y Marshall Rosenberg. No es terapia ni sustituye atención psicológica profesional.

**Notas de implementación:**
- Sacar de la página la Caja de Herramientas y el bundle "Reconexión Completa". Va como order bump dentro del checkout de Hotmart. Una sola oferta, un solo botón.
- Sacar el precio tachado de US$ 14,99 y el badge "-53%". Un tachado permanente sin ventana real es descuento falso y trabaja en contra de la única ventaja que tiene esta página, que es sonar honesta. El anclaje ahora lo hace la comparación con la sesión de terapia.
- Quitar "Precio especial por poco tiempo" de `OfferSection.tsx`.
- Mantener el carrusel de páginas del eBook. Es la mejor prueba que tiene la página: se ve lo que se compra.

---

## 10. Garantía

**Intención:** eliminar el riesgo financiero real de alguien para quien 7 dólares es una decisión.

### Texto del sello

> **Garantía de 7 días, sin preguntas**
> Lo lees, haces los primeros ejercicios y decides. Si sientes que no es para ti, escribes un correo a mtdreconexion@gmail.com y te devolvemos los US$ 6,99 completos. No pedimos explicaciones, no te ofrecemos nada a cambio, no hay letra chica. El riesgo lo asumimos nosotros.

### Versión corta (inline, junto a botones)

> Garantía de 7 días. Devolución del 100%, sin preguntas.

---

## 11. Prueba social

**Intención:** dar respaldo sin inventar testimonios.

**Decisión: eliminar la sección de testimonios actual.** Los tres testimonios que hay hoy no tienen procedencia verificable, van con fotos y estrellas, y prometen resultados con plazo ("en tres semanas", "al mes"). En un anuncio de Meta sobre relaciones eso es riesgo de cuenta y de reembolsos.

Marcador para cuando existan reales:

> [DEPOIMENTO A VERIFICAR — sustituir solo por testimonios reales de compradores, con consentimiento por escrito, sin promesa de plazo ni de resultado]

**Qué usar mientras tanto, en el mismo lugar de la página:**

1. **Prueba de producto (la más fuerte).** Carrusel con páginas reales del interior: portada, el capítulo "Cuando solo uno quiere", el plan de 90 días. Título: *"Mira por dentro antes de comprar"*.
2. **Prueba de origen.** Bloque corto con los tres cuerpos de investigación en los que se basa el método (Gottman, Sue Johnson/EFT, Rosenberg/CNV), redactado como fuente, no como aval. Título: *"En qué se apoya el método"*.
3. **Prueba de estructura.** El índice del libro, tal cual, con los 12 capítulos. Que se vea el trabajo.
4. **Prueba de riesgo cero.** La garantía de 7 días, subida a esta altura de la página.

---

## 12. Nota de seguridad

**Intención:** proteger a quien no debería estar comprando esto, y ganar confianza de todos los demás.

### Título

> Una nota importante antes de comprar

### Cuerpo

> Este material no está pensado para relaciones donde hay violencia física, amenazas, control sobre tu dinero, tus salidas o tus vínculos, o donde sientes miedo de la otra persona. En esas situaciones no hay ejercicio de comunicación que sirva, y buscar la conversación puede ponerte en riesgo.
>
> Si es tu caso, la prioridad es tu seguridad. Busca apoyo profesional o una línea de atención de tu país.
>
> En Colombia: **Línea 155**, orientación a mujeres víctimas de violencia, 24 horas, gratuita.
> Si hay peligro inmediato: **123**.
>
> En México: **911** para emergencias. **Línea Sin Violencia 800 108 4053**, 24 horas, gratuita y confidencial.
>
> Y si estás pasando por algo que te supera, esto tampoco reemplaza atención psicológica. Si puedes buscarla, búscala.

**Nota:** confirmar los números vigentes antes de publicar. Si no se quiere mantener números, dejar solo el primer y el último párrafo.

---

## 13. CTA final

**Intención:** cerrar sin presión artificial, apoyándose en la única urgencia verdadera: la distancia sigue creciendo mientras se posterga.

### Título

> No hace falta volver a como eran antes

### Cuerpo

> Tal vez a ese lugar ya no se puede volver, y está bien. Las personas que eran ustedes hace ocho años ya no existen.
>
> Lo que sí se puede es aprender a encontrarse otra vez, siendo quienes son hoy.
>
> Una conversación que no termina mal.
> Una pausa antes de responder.
> Una petición sin reproche.
> Una reparación.
> Un paso pequeño, hoy.
>
> Nada de esto pasa por leer una página de ventas. Pasa por empezar.
>
> Y si no empiezas hoy, mañana la conversación va a ser un poco más difícil que hoy. Acá no se acaba ninguna oferta. Lo que se gasta es el tiempo que llevan así.

### Botón

> Quiero empezar el método por US$ 6,99

### Debajo del botón

> Acceso inmediato · Pago único · Garantía de 7 días, devolución del 100%

---

## 14. CTA fijo móvil

> **US$ 6,99 · pago único** · [Empezar ahora]
> Garantía de 7 días

---

## 15. SEO (title y meta description)

**Title:**
> Método Reconexión | Guía práctica de 7 fases para parejas distanciadas

**Meta description:**
> eBook de 53 páginas con 7 fases, ejercicios, guiones de conversación y un plan de 90 días para parejas que dejaron de entenderse. Pago único de US$ 6,99, acceso inmediato y garantía de 7 días. No sustituye atención psicológica.

---

## Checklist de cambios en el código

- [ ] `UrgencyBar.tsx`: reemplazar "Precio especial por poco tiempo" por la barra de la sección 1
- [ ] `site.ts`: `COUNTDOWN_ENABLED = false`
- [ ] `site.ts`: eliminar el uso de `OLD_PRICE`, `METHOD_DISCOUNT`, `FULL_BUNDLE_*`, `TOOLBOX_PRICE` en la landing
- [ ] `Hero.tsx`: nuevo H1, subtítulo, bullets, botón en sentence case, quitar precio tachado
- [ ] `OfferSection.tsx`: eliminar `OfferChoice` con dos cards, dejar una sola oferta; eliminar `ToolboxMarquee`; quitar "Precio especial por poco tiempo"
- [ ] `TestimonialsSection.tsx`: retirar de `index.tsx` hasta tener testimonios verificados
- [ ] `FAQ.tsx`: reemplazar las 5 preguntas actuales por las 8 nuevas
- [ ] `SafetyNote.tsx`: ampliar con el texto de la sección 12
- [ ] Revisar todos los CTA: quitar mayúsculas gritadas
- [ ] `index.tsx`: actualizar `TITLE` y `DESC`

---

## FAQ (8 preguntas)

**Intención:** desactivar una por una las objeciones que frenan la compra en el último scroll.

**1. Mi pareja no va a leer esto. ¿Igual me sirve?**
> Sí, y es el caso más común. La mayoría empieza sola. Hay un capítulo completo, "Cuando solo uno quiere", dedicado a trabajar tu parte del ciclo sin presionar a nadie ni pedirle que lea nada. No es lo mismo que hacerlo entre dos y no te voy a decir que lo es. Pero el ciclo necesita dos para repetirse, y tú eres uno de los dos.

**2. Ya intentamos de todo y nada funcionó. ¿Por qué esto sería distinto?**
> Probablemente intentaron cosas sueltas y en desorden: hablar más, un viaje, prometer cambios. Lo que casi nadie intenta es un orden. Trabajar la desescalada antes de la reparación, y la reparación antes de la intimidad. Cuando el orden está invertido, los intentos fracasan aunque las intenciones sean buenas. Eso es lo que cambia acá. No te garantizo que funcione. Te garantizo que es distinto de lo que ya probaron.

**3. ¿Esto es terapia de pareja?**
> No, y quiero ser clara. Es un material educativo y práctico. Renata Ramírez no es terapeuta ni psicóloga. El libro lo dice dos veces adentro: no sustituye atención psicológica profesional. Si pueden ir a terapia, vayan. Esto es lo que sí se puede empezar hoy, en casa, por siete dólares.

**4. ¿Y si no funciona?**
> Puede pasar. Ninguna guía puede prometerte un resultado, porque el resultado depende de dos personas, de su historia y de cuánto lo trabajen. Lo que sí controlo es tu riesgo: tienes 7 días para leerlo completo y decidir. Si no es para ti, escribes un correo y te devolvemos los US$ 6,99 completos, sin preguntas.

**5. ¿Es una suscripción? ¿Me van a cobrar otra vez?**
> No. Es un pago único de US$ 6,99. No hay renovación, no hay mensualidad, no hay cargo escondido. Pagas una vez y el eBook es tuyo para siempre.

**6. ¿Cuánto tiempo tengo que dedicarle?**
> Leerlo completo toma una tarde. Aplicarlo es otra cosa: la mayoría de los ejercicios están hechos para veinte minutos o menos, porque están pensados para gente cansada. El plan de 90 días reparte todo en tres meses para que no tengas que hacer nada heroico en un solo día.

**7. ¿Cómo lo recibo?**
> Apenas se aprueba el pago te llega un correo con el acceso. Se abre en el celular, la tablet o la computadora. No hay envío físico ni espera. Si el correo no aparece, revisa spam o escribe a mtdreconexion@gmail.com y lo resolvemos.

**8. ¿Sirve si estamos en crisis, hablando de separarnos?**
> Puede ayudarte a ver el ciclo con claridad y a trabajar la comunicación, que suele ser lo que se rompe primero. No es un salvavidas ni te va a devolver a nadie. Y si hay violencia, amenazas o miedo en la relación, esto no es lo indicado: lee la nota de seguridad más abajo y busca ayuda profesional.

**9. ¿Aparece algo raro en mi extracto bancario?** *(opcional)*
> El cobro aparece a nombre de Hotmart, la plataforma que procesa el pago. No dice el nombre del producto.
