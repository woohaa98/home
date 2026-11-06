/* =============================================================
   THERAPY RESOURCES LIBRARY · content file
   -------------------------------------------------------------
   This is the only file you need to edit to change wording,
   strategies, reflection questions, or references.

   status:
     "published"  shows on the public library page
     "review"     hidden publicly; visible only with ?preview in the URL
   After editing, re-run the PDF script (see README) so the
   downloadable PDFs match.
   ============================================================= */

window.RESOURCE_LIBRARY = {

  disclaimer: "These resources are for education and self-reflection and are not a substitute for individualized mental health care.",

  categories: [
    { id: "mind-body",     letter: "A", tone: "sg", title: "Understanding the Mind & Body",
      blurb: "How emotions, anxiety, and stress work in the brain and body, explained without oversimplifying." },
    { id: "relationships", letter: "B", tone: "tc", title: "Relationships & Couples",
      blurb: "Patterns that shape closeness and conflict, and skills that help partners reconnect." },
    { id: "identity",      letter: "C", tone: "sg", title: "Identity, Meaning & Life Transitions",
      blurb: "Who you are beyond what you do, and how to move through change with purpose." },
    { id: "awareness",     letter: "D", tone: "tc", title: "Emotional Awareness & Self-Compassion",
      blurb: "Noticing what you feel and meeting it with kindness rather than criticism." },
    { id: "growth",        letter: "E", tone: "sg", title: "Personal Growth & Behavioral Patterns",
      blurb: "Understanding the habits of mind that keep us stuck, and how flexibility helps." }
  ],

  resources: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "brain-and-emotions",
      category: "mind-body",
      status: "published",
      lastReviewed: "2026-11-02",
      title: "How the Brain Creates & Regulates Emotions",
      description: "Why emotions are built from body signals, meaning, and past experience, and four places you can step in to shape them.",
      framework: "Draws on constructionist emotion science and Gross's process model of emotion regulation",
      tags: ["emotions", "emotion regulation", "neuroscience", "body", "stress", "reappraisal", "feelings"],
      what: "An emotion is a whole-person response to what's happening, built from what you notice around you, what you feel in your body, and what past experience tells you it means. Emotions aren't flaws to fix. They carry information and energy for action.",
      diagram: "diagrams/brain-and-emotions.svg",
      diagramAlt: "A left-to-right flow: situation, attention, meaning, response. Beneath each step is a door showing where you can step in: shape the situation, shift attention, rethink the meaning, soothe the body.",
      diagramCaption: "Adapted from James Gross's process model of emotion regulation. A simplified map for reflection, not a literal picture of the brain.",
      why: [
        "Your brain is always predicting. It blends signals from the world with signals from inside your body (heartbeat, breath, muscle tension) and with past experience to make sense of the moment. The felt result is what we call an emotion.",
        "There is no single “emotion center.” Areas like the amygdala help flag what matters, and areas of the prefrontal cortex help put things in context, but emotions arise from many networks working together. Under stress, fast protective reactions can lead before slower reflection catches up. That's survival design, not a personal failing."
      ],
      note: { label: "Normal or a concern?", text: "Everyone has intense feelings sometimes. If emotions feel overwhelming most days, last for weeks, or make daily life hard, that's a good reason to reach out for support." },
      help: [
        { title: "Put it into words", text: "Naming a feeling, even silently (“this is disappointment”), is linked to calmer emotional responses in affect-labeling research. The more specific, the better." },
        { title: "Look again at the meaning", text: "Ask, “Is there another way to see this?” Reappraisal doesn't deny what's hard. It widens the lens, and it's one of the most studied ways people regulate emotion." },
        { title: "Work with your body", text: "Lengthen your exhale, soften your jaw and shoulders, or feel your feet on the floor. Changing body signals changes the information your brain is working with." }
      ],
      reflection: "When a strong feeling shows up, where do you notice it first: in your body, your thoughts, or your actions?",
      takeaway: "Emotions are made, not just triggered, so you have more than one place to respond.",
      references: [
        "Barrett, L. F. (2017). <em>How emotions are made: The secret life of the brain</em>. Houghton Mifflin Harcourt.",
        "Gross, J. J. (2015). Emotion regulation: Current status and future prospects. <em>Psychological Inquiry, 26</em>(1), 1–26.",
        "Lieberman, M. D., Eisenberger, N. I., Crockett, M. J., Tom, S. M., Pfeifer, J. H., & Way, B. M. (2007). Putting feelings into words: Affect labeling disrupts amygdala activity in response to affective stimuli. <em>Psychological Science, 18</em>(5), 421–428.",
        "Pessoa, L. (2017). A network model of the emotional brain. <em>Trends in Cognitive Sciences, 21</em>(5), 357–371."
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "anxiety-cycle",
      category: "mind-body",
      status: "published",
      lastReviewed: "2026-11-02",
      title: "Understanding the Anxiety Cycle",
      description: "How avoidance brings quick relief but keeps anxiety going, and how small, brave steps help the brain learn something new.",
      framework: "Draws on cognitive behavioral therapy (CBT) and inhibitory learning research",
      tags: ["anxiety", "worry", "avoidance", "panic", "fear", "CBT", "exposure", "safety behaviors"],
      what: "Anxiety is the mind and body preparing for a possible threat. In the right amount it helps us prepare and stay safe. The anxiety cycle describes how avoiding what we fear brings quick relief, but over time can make anxiety stronger and our world smaller.",
      diagram: "diagrams/anxiety-cycle.svg",
      diagramAlt: "A loop of six steps: trigger, what-if thought, anxiety rises, avoid or escape, quick relief, fear confirmed, then back to trigger. A separate path breaks out of the loop: approach step by step, leading to learning that I can cope.",
      diagramCaption: "An original illustration of how avoidance maintains anxiety, based on CBT models. Real life is messier than any diagram.",
      why: [
        "Your threat system is built to err on the side of caution. When anxiety spikes, avoiding, escaping, seeking reassurance, or leaning on a “safety behavior” brings fast relief. Relief is powerful: it teaches the brain that avoiding is what kept you safe.",
        "The catch is that avoidance also blocks new learning. You never get to discover that the feared outcome didn't happen, or that you could cope if it did. So next time, the alarm rings a little louder and a little sooner."
      ],
      note: { label: "Normal or a concern?", text: "Anxiety is a normal human emotion. It may be an anxiety disorder when it's persistent, out of proportion, hard to control, and gets in the way of work, relationships, or daily life. Anxiety disorders are very treatable." },
      help: [
        { title: "Approach in small steps", text: "Gradually facing feared situations (exposure) is one of the best-supported parts of CBT for anxiety. Start with something challenging but doable, and stay long enough to learn something new." },
        { title: "Notice safety behaviors", text: "Over-preparing, checking, or asking for reassurance can quietly keep the cycle going. Try dropping one, a little at a time, and see what you discover." },
        { title: "Make room for the feeling", text: "Instead of fighting a racing heart, try noticing it with curiosity: “Here's anxiety. It's uncomfortable, and I can still take the next step.”" }
      ],
      reflection: "What has anxiety talked you out of lately, and what would one small step toward it look like?",
      takeaway: "Avoidance brings relief today; small, brave steps bring freedom over time.",
      references: [
        "Barlow, D. H. (2002). <em>Anxiety and its disorders: The nature and treatment of anxiety and panic</em> (2nd ed.). Guilford Press.",
        "Craske, M. G., Treanor, M., Conway, C. C., Zbozinek, T., & Vervliet, B. (2014). Maximizing exposure therapy: An inhibitory learning approach. <em>Behaviour Research and Therapy, 58</em>, 10–23.",
        "Hofmann, S. G., & Smits, J. A. J. (2008). Cognitive-behavioral therapy for adult anxiety disorders: A meta-analysis of randomized placebo-controlled trials. <em>Journal of Clinical Psychiatry, 69</em>(4), 621–632.",
        "Salkovskis, P. M. (1991). The importance of behaviour in the maintenance of anxiety and panic: A cognitive account. <em>Behavioural Psychotherapy, 19</em>(1), 6–19."
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "understanding-ocd",
      category: "mind-body",
      status: "published",
      lastReviewed: "2026-11-02",
      title: "Understanding OCD: Obsessions & Compulsions",
      description: "What OCD is (and isn't), why compulsions keep the cycle going, and how exposure and response prevention (ERP) helps.",
      framework: "Draws on cognitive behavioral models of OCD and exposure and response prevention (ERP)",
      tags: ["OCD", "obsessions", "compulsions", "intrusive thoughts", "ERP", "exposure", "doubt", "anxiety", "reassurance"],
      what: "Obsessive-compulsive disorder (OCD) is a treatable condition involving obsessions (unwanted, intrusive thoughts, images, or urges that cause distress) and compulsions (actions or mental rituals done to ease that distress or prevent a feared outcome). It isn't a quirk or a love of neatness, and it doesn't reflect who you are.",
      diagram: "diagrams/understanding-ocd.svg",
      diagramAlt: "A loop of four steps: obsession, distress and doubt, compulsion, temporary relief, then the doubt returns. An ERP path shows facing the trigger and resisting the ritual so distress can rise and fall on its own.",
      diagramCaption: "An original illustration of the OCD cycle and where ERP intervenes. Compulsions can be visible (washing, checking) or mental (reviewing, counting).",
      why: [
        "Intrusive thoughts are remarkably common: in a study across six continents, about 94% of people reported having them. In OCD, a passing thought gets treated as dangerous or as a sign of who you are, which creates intense distress and a strong pull to neutralize it.",
        "Compulsions bring relief, so the brain learns they're necessary. But each ritual also confirms the thought was a real threat, and doubt soon returns, often needing more ritual next time."
      ],
      note: { label: "Normal or a concern?", text: "Many people have odd intrusive thoughts or like things orderly. OCD is diagnosed when obsessions or compulsions take a lot of time (for example, over an hour a day) or cause significant distress or impairment." },
      help: [
        { title: "Exposure and response prevention", text: "ERP is a well-established first-line treatment for OCD. With a trained therapist, you gradually face triggers while resisting compulsions, so your brain learns that distress fades and uncertainty is bearable." },
        { title: "Relate differently to thoughts", text: "Practice noticing, “I'm having the thought that...” A thought is a mental event, not a fact, a prediction, or a verdict on your character." },
        { title: "Find specialized care", text: "Look for a clinician trained in ERP. Medication (often an SSRI) can also help, and many people use both. Reassurance, even from loved ones, can unintentionally feed the cycle." }
      ],
      reflection: "What might it be like to let a thought be just a thought, without needing to settle it right now?",
      takeaway: "The goal isn't to stop intrusive thoughts. It's to stop letting them decide what you do.",
      references: [
        "Abramowitz, J. S., Taylor, S., & McKay, D. (2009). Obsessive-compulsive disorder. <em>The Lancet, 374</em>(9688), 491–499.",
        "American Psychiatric Association. (2022). <em>Diagnostic and statistical manual of mental disorders</em> (5th ed., text rev.).",
        "Foa, E. B., Yadin, E., & Lichner, T. K. (2012). <em>Exposure and response (ritual) prevention for obsessive-compulsive disorder: Therapist guide</em> (2nd ed.). Oxford University Press.",
        "Rachman, S., & de Silva, P. (1978). Abnormal and normal obsessions. <em>Behaviour Research and Therapy, 16</em>(4), 233–248.",
        "Radomsky, A. S., Alcolado, G. M., Abramowitz, J. S., et al. (2014). Part 1. You can run but you can't hide: Intrusive thoughts on six continents. <em>Journal of Obsessive-Compulsive and Related Disorders, 3</em>(3), 269–279."
      ]
    },

    /* ---------------------------------------------------------- 4 */
    {
      id: "four-horsemen",
      category: "relationships",
      status: "published",
      lastReviewed: "2026-11-02",
      title: "The Four Horsemen & Their Antidotes",
      description: "Four conflict patterns that research links to relationship distress (Gottman Method), and the skills that counter each one.",
      framework: "Based on the research of Dr. John Gottman (Gottman Method). An independent summary, not affiliated with The Gottman Institute.",
      tags: ["couples", "conflict", "communication", "Gottman", "criticism", "contempt", "defensiveness", "stonewalling", "flooding", "repair"],
      what: "The “Four Horsemen” is psychologist John Gottman's name for four communication patterns (criticism, contempt, defensiveness, and stonewalling) that his research found predict relationship distress and breakup. Each has an antidote: a learnable skill that keeps partners connected during conflict.",
      diagram: "diagrams/four-horsemen.svg",
      diagramAlt: "Four rows pairing each horseman with its antidote. Criticism pairs with gentle start-up. Contempt pairs with appreciation and respect. Defensiveness pairs with taking responsibility. Stonewalling pairs with physiological self-soothing. Each side shows a short example phrase.",
      diagramCaption: "Horsemen and antidotes as described by Gottman; example phrases are original.",
      why: [
        "These patterns tend to show up when we feel hurt, unheard, or overwhelmed. They're protective moves, and nearly every couple uses them sometimes. What matters is how often they appear and whether they get repaired.",
        "Gottman's research identified contempt as the most damaging of the four. Stonewalling often happens when someone is physiologically “flooded,” with heart racing and body in fight-or-flight, which makes listening truly hard. Taking a break then isn't avoidance; it makes the next conversation possible."
      ],
      note: { label: "Safety first", tone: "safety", text: "These skills are for everyday conflict. If you feel afraid of your partner, or there are threats, control, or violence, please reach out for support. In the U.S., the National Domestic Violence Hotline is 1-800-799-7233." },
      help: [
        { title: "Start gently", text: "Describe the situation and your feeling, then name a positive need: “I feel ___ about ___, and I need ___.” A complaint about a situation lands very differently from criticism of a person." },
        { title: "Catch it and repair", text: "Notice a horseman in the moment and try a repair: “Let me try that again,” or “You're right about that part.” Repair matters more than getting it perfect." },
        { title: "Pause when flooded", text: "Agree on a signal for breaks. Take at least 20 minutes doing something soothing (not rehearsing the argument), then come back to the conversation." }
      ],
      reflection: "Which horseman shows up most for you when you feel hurt, and what might it be protecting?",
      takeaway: "Conflict isn't the problem; how we fight and how we repair shapes the relationship.",
      references: [
        "Gottman, J. M. (1994). <em>What predicts divorce? The relationship between marital processes and marital outcomes</em>. Lawrence Erlbaum Associates.",
        "Gottman, J. M., & Levenson, R. W. (2000). The timing of divorce: Predicting when a couple will divorce over a 14-year period. <em>Journal of Marriage and Family, 62</em>(3), 737–745.",
        "Gottman, J. M., & Silver, N. (2015). <em>The seven principles for making marriage work</em> (Rev. ed.). Harmony Books.",
        "The Gottman Institute. (2013, April 26). The Four Horsemen: The antidotes. gottman.com/blog."
      ]
    },

    /* ---------------------------------------------------------- 5 */
    {
      id: "attachment-styles",
      category: "relationships",
      status: "published",
      lastReviewed: "2026-11-02",
      title: "Attachment Styles in Relationships",
      description: "How early and current relationships shape the way we seek closeness and handle distance, and how security can grow.",
      framework: "Draws on attachment theory (Bowlby, Ainsworth) and adult attachment research",
      tags: ["attachment", "anxious", "avoidant", "secure", "fearful", "relationships", "couples", "closeness", "pursue withdraw"],
      what: "Attachment describes the emotional bond we form with the people we rely on most. From early caregivers to adult partners, we develop expectations about whether others will be there for us and whether we're worthy of care. Those expectations shape how we seek closeness and respond to distance.",
      diagram: "diagrams/attachment-styles.svg",
      diagramAlt: "A two-by-two map. The horizontal axis is avoidance, discomfort with closeness, from low to high. The vertical axis is anxiety, worry about rejection, from low to high. Low on both is secure. High anxiety and low avoidance is anxious. Low anxiety and high avoidance is avoidant. High on both is fearful-avoidant.",
      diagramCaption: "Attachment is best understood as two dimensions rather than four fixed types. Labels are shorthand for regions on a continuum. Original illustration.",
      why: [
        "Attachment theory began with John Bowlby and Mary Ainsworth's work on how children seek safety from caregivers. Researchers later found similar patterns in adult relationships, where a partner can be a safe haven in distress and a secure base for exploring life.",
        "If closeness was reliable, it makes sense to expect it. If care was unpredictable or unavailable, staying on alert (anxiety) or relying only on yourself (avoidance) were smart adaptations. They made sense then; they may just cost more now. In couples, one partner pursuing and the other withdrawing can feed each other."
      ],
      note: { label: "Good to know", text: "Attachment patterns are not diagnoses, and no style is “bad.” Your pattern can differ across relationships and change over time. Security can grow through safe relationships and therapy, often called earned security." },
      help: [
        { title: "Notice your move under stress", text: "When you feel distant from someone you love, do you move toward, pull away, or both? Noticing is the first step toward choosing." },
        { title: "Name the need underneath", text: "Behind protest or withdrawal is usually a question: “Are you there for me? Do I matter to you?” Saying the softer need aloud invites a softer response." },
        { title: "Collect new experiences", text: "Security grows through repeated experiences of being responded to. Consistent relationships, including a therapeutic one, can gradually update old expectations." }
      ],
      reflection: "What did you learn early on about whether it was safe to need other people?",
      takeaway: "Your attachment pattern is a strategy you learned to stay safe, and what was learned can grow.",
      references: [
        "Bartholomew, K., & Horowitz, L. M. (1991). Attachment styles among young adults: A test of a four-category model. <em>Journal of Personality and Social Psychology, 61</em>(2), 226–244.",
        "Bowlby, J. (1982). <em>Attachment and loss: Vol. 1. Attachment</em> (2nd ed.). Basic Books. (Original work published 1969)",
        "Fraley, R. C. (2019). Attachment in adulthood: Recent developments, emerging debates, and future directions. <em>Annual Review of Psychology, 70</em>, 401–422.",
        "Hazan, C., & Shaver, P. (1987). Romantic love conceptualized as an attachment process. <em>Journal of Personality and Social Psychology, 52</em>(3), 511–524.",
        "Mikulincer, M., & Shaver, P. R. (2016). <em>Attachment in adulthood: Structure, dynamics, and change</em> (2nd ed.). Guilford Press."
      ]
    },

    /* ---------------------------------------------------------- 6 */
    {
      id: "values-vs-goals",
      category: "identity",
      status: "published",
      lastReviewed: "2026-11-02",
      title: "Values vs. Goals",
      description: "The difference between a direction you live and a destination you reach, and why it matters for meaning and motivation (ACT).",
      framework: "Based on Acceptance and Commitment Therapy (ACT), developed by Steven C. Hayes, Kirk Strosahl, and Kelly Wilson",
      tags: ["values", "goals", "ACT", "meaning", "purpose", "motivation", "achievement", "identity", "life transitions"],
      what: "In Acceptance and Commitment Therapy (ACT), values are the qualities you want to bring to your life, like being caring, curious, or honest. Goals are specific outcomes you can achieve and check off. Values are a direction; goals are places you reach along the way.",
      diagram: "diagrams/values-vs-goals.svg",
      diagramAlt: "A compass points along a long path labeled with the value, being a caring presence. Goals appear as flags along the path, each one reachable. Below, a comparison: values are qualities of action, always available, never finished, and answer how do I want to show up. Goals are specific outcomes, achievable, future-focused, and answer what do I want to get.",
      diagramCaption: "The compass image is a common ACT metaphor; this illustration is original.",
      why: [
        "Goals are useful, but living only for outcomes can leave us empty once they're reached, or stuck in “I'll be okay when...” Values are available right now, in small actions, even when circumstances are hard or a goal is out of reach.",
        "In ACT, knowing your values gives meaning and motivation for doing hard things, including making room for uncomfortable feelings. Values are freely chosen, not “shoulds” imposed by others. Research supports ACT, which combines values work with acceptance and mindfulness, for a range of concerns."
      ],
      note: null,
      help: [
        { title: "Ask the values question", text: "Alongside “What do I want to achieve?” ask “Who do I want to be in this?” or “What matters to me here?”" },
        { title: "Link each goal to a value", text: "For each goal, name the value it serves. If a goal stops serving that value, you're free to change the goal and keep the direction." },
        { title: "Take one values-based step", text: "Choose a small action today that moves toward a value, even with doubt or discomfort along for the ride." }
      ],
      reflection: "If no one would ever see or praise it, how would you still want to show up in your life?",
      takeaway: "Goals can be achieved; values can be lived, starting right now.",
      references: [
        "A-Tjak, J. G. L., Davis, M. L., Morina, N., Powers, M. B., Smits, J. A. J., & Emmelkamp, P. M. G. (2015). A meta-analysis of the efficacy of acceptance and commitment therapy for clinically relevant mental and physical health problems. <em>Psychotherapy and Psychosomatics, 84</em>(1), 30–36.",
        "Harris, R. (2019). <em>ACT made simple</em> (2nd ed.). New Harbinger.",
        "Hayes, S. C., Strosahl, K. D., & Wilson, K. G. (2012). <em>Acceptance and commitment therapy: The process and practice of mindful change</em> (2nd ed.). Guilford Press.",
        "Wilson, K. G., & Murrell, A. R. (2004). Values work in acceptance and commitment therapy. In S. C. Hayes, V. M. Follette, & M. M. Linehan (Eds.), <em>Mindfulness and acceptance</em> (pp. 120–151). Guilford Press."
      ]
    }
  ],

  /* -----------------------------------------------------------
     DEVELOPMENT PLAN · not shown publicly.
     Move a topic into `resources` above when it's written and approved.
     ----------------------------------------------------------- */
  planned: [
    { category: "mind-body",     title: "Anxiety vs. Depression vs. Stress" },
    { category: "mind-body",     title: "The Window of Tolerance" },
    { category: "relationships", title: "The Negative Interaction Cycle (EFT)" },
    { category: "relationships", title: "Repair Attempts & Emotional Connection" },
    { category: "identity",      title: "Identity Beyond Achievement" },
    { category: "identity",      title: "Finding Meaning & Hope" },
    { category: "identity",      title: "Navigating Life Transitions" },
    { category: "awareness",     title: "Understanding Emotions as Information" },
    { category: "awareness",     title: "Self-Compassion vs. Self-Criticism" },
    { category: "awareness",     title: "Mindfulness & Cognitive Defusion" },
    { category: "awareness",     title: "Somatic Awareness & Grounding" },
    { category: "growth",        title: "Perfectionism & Fear of Failure" },
    { category: "growth",        title: "Rumination vs. Problem-Solving" },
    { category: "growth",        title: "Understanding Burnout" },
    { category: "growth",        title: "Psychological Flexibility (ACT)" }
  ]
};
