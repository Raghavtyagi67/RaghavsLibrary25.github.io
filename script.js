// Array of over 100 books from Project Gutenberg, including existing and new educational books
// All are public domain; new educational books added under sub-genres math, physics, chemistry, history-ed
const books = [
    // Existing books (100+ from previous)
    { id: 84, title: 'Frankenstein; Or, The Modern Prometheus', author: 'Mary Wollstonecraft Shelley', genre: 'sci-fi', description: 'A scientist creates a living being from assembled body parts and faces the consequences of his actions as the creature seeks revenge and companionship.' },
    { id: 2701, title: 'Moby Dick; Or, The Whale', author: 'Herman Melville', genre: 'classics', description: 'A whaling captain becomes obsessed with hunting a giant white whale, leading to a tale of adventure, madness, and maritime life.' },
    { id: 1342, title: 'Pride and Prejudice', author: 'Jane Austen', genre: 'classics', description: 'The story follows the Bennet sisters as they navigate romance, societal expectations, and misunderstandings in Regency-era England.' },
    { id: 8492, title: 'The King in Yellow', author: 'Robert W. Chambers', genre: 'fantasy', description: 'A collection of short stories involving a mysterious play that drives readers to madness and explores themes of the supernatural.' },
    { id: 11, title: 'Alice\'s Adventures in Wonderland', author: 'Lewis Carroll', genre: 'fantasy', description: 'A young girl falls down a rabbit hole into a world of bizarre creatures and logic-defying adventures.' },
    { id: 1513, title: 'Romeo and Juliet', author: 'William Shakespeare', genre: 'classics', description: 'Two young lovers from feuding families meet a tragic end due to fate and family enmity in Verona.' },
    { id: 43, title: 'The Strange Case of Dr. Jekyll and Mr. Hyde', author: 'Robert Louis Stevenson', genre: 'mystery', description: 'A scientist\'s experiment with duality leads to the emergence of a violent alter ego, exploring themes of good and evil.' },
    { id: 100, title: 'The Complete Works of William Shakespeare', author: 'William Shakespeare', genre: 'classics', description: 'A compilation of plays and sonnets by the renowned playwright, covering tragedies, comedies, and histories.' },
    { id: 2641, title: 'A Room with a View', author: 'E. M. Forster', genre: 'fiction', description: 'A young Englishwoman experiences love and self-discovery during a trip to Italy, challenging societal norms.' },
    { id: 145, title: 'Middlemarch', author: 'George Eliot', genre: 'fiction', description: 'Interwoven stories of ambition, marriage, and politics in a provincial English town during the 19th century.' },
    { id: 37106, title: 'Little Women; Or, Meg, Jo, Beth, and Amy', author: 'Louisa May Alcott', genre: 'classics', description: 'The lives and adventures of the four March sisters as they grow up during the American Civil War.' },
    { id: 2554, title: 'Crime and Punishment', author: 'Fyodor Dostoyevsky', genre: 'classics', description: 'A young man\'s moral and psychological turmoil after committing a murder in St. Petersburg.' },
    { id: 46, title: 'A Christmas Carol in Prose; Being a Ghost Story of Christmas', author: 'Charles Dickens', genre: 'fantasy', description: 'A miserly old man is visited by ghosts who teach him the error of his ways on Christmas Eve.' },
    { id: 16389, title: 'The Enchanted April', author: 'Elizabeth Von Arnim', genre: 'fiction', description: 'Two Englishwomen rent a villa in Italy, leading to unexpected transformations in their lives and relationships.' },
    { id: 1260, title: 'Jane Eyre: An Autobiography', author: 'Charlotte Brontë', genre: 'classics', description: 'An orphaned governess falls in love with her employer while grappling with issues of class, morality, and independence.' },
    { id: 67979, title: 'The Blue Castle: a novel', author: 'L. M. Montgomery', genre: 'fiction', description: 'A shy woman rebels against her controlling family and discovers love and adventure in a whimsical tale.' },
    { id: 345, title: 'Dracula', author: 'Bram Stoker', genre: 'fantasy', description: 'A lawyer investigates a mysterious count suspected of being a vampire, leading to a battle against supernatural forces.' },
    { id: 2160, title: 'The Expedition of Humphry Clinker', author: 'T. Smollett', genre: 'fiction', description: 'A humorous epistolary novel following a family\'s travels around Britain, filled with eccentric characters and satire.' },
    { id: 2542, title: 'A Doll\'s House : a play', author: 'Henrik Ibsen', genre: 'classics', description: 'A wife confronts the truths of her marriage and societal expectations, leading to a dramatic upheaval.' },
    { id: 394, title: 'Cranford', author: 'Elizabeth Cleghorn Gaskell', genre: 'fiction', description: 'A series of stories depicting life in a small English village, focusing on the lives of spinsters and social changes.' },
    { id: 77331, title: 'The way of all earth', author: 'Edith Barnard Delano', genre: 'fiction', description: 'A narrative exploring themes of mortality and human existence through personal stories.' },
    { id: 1184, title: 'The Count of Monte Cristo', author: 'Alexandre Dumas and Auguste Maquet', genre: 'classics', description: 'A falsely imprisoned man escapes and seeks vengeance against those who wronged him, using wit and wealth.' },
    { id: 1259, title: 'Twenty years after', author: 'Alexandre Dumas and Auguste Maquet', genre: 'fiction', description: 'The sequel to The Three Musketeers, following the heroes in new political intrigues.' },
    { id: 174, title: 'The Picture of Dorian Gray', author: 'Oscar Wilde', genre: 'classics', description: 'A young man\'s portrait ages while he remains youthful, reflecting his moral decay and hedonistic pursuits.' },
    { id: 6761, title: 'The Adventures of Ferdinand Count Fathom — Complete', author: 'T. Smollett', genre: 'fiction', description: 'A cunning adventurer navigates Europe through deception and intrigue in this picaresque novel.' },
    { id: 25344, title: 'The Scarlet Letter', author: 'Nathaniel Hawthorne', genre: 'classics', description: 'A woman in Puritan New England faces shame and ostracism after bearing a child out of wedlock.' },
    { id: 6593, title: 'History of Tom Jones, a Foundling', author: 'Henry Fielding', genre: 'fiction', description: 'The adventures of a foundling as he seeks his place in society, filled with romance and comedy.' },
    { id: 5197, title: 'My Life — Volume 1', author: 'Richard Wagner', genre: 'non-fiction', description: 'An autobiographical account of the composer\'s early life and development as a musician.' },
    { id: 4085, title: 'The Adventures of Roderick Random', author: 'T. Smollett', genre: 'fiction', description: 'A young man\'s misadventures at sea and on land, marked by humor and social critique.' },
    { id: 16328, title: 'Beowulf: An Anglo-Saxon Epic Poem', author: 'Anonymous', genre: 'classics', description: 'An epic tale of a hero who battles monsters and dragons to protect his kingdom.' },
    { id: 844, title: 'The Importance of Being Earnest: A Trivial Comedy for Serious People', author: 'Oscar Wilde', genre: 'classics', description: 'A satirical play about identity, marriage, and deception in Victorian society.' },
    { id: 768, title: 'Wuthering Heights', author: 'Emily Brontë', genre: 'classics', description: 'A tale of passionate, destructive love between Heathcliff and Catherine on the Yorkshire moors.' },
    { id: 25851, title: 'The Life of Charles Dickens, Vol. I-III, Complete', author: 'John Forster', genre: 'non-fiction', description: 'A detailed biography of the famous author, covering his personal and professional life.' },
    { id: 98, title: 'A Tale of Two Cities', author: 'Charles Dickens', genre: 'classics', description: 'Set during the French Revolution, it explores themes of sacrifice and resurrection amid chaos.' },
    { id: 16119, title: 'Doctrina Christiana', author: 'Anonymous', genre: 'non-fiction', description: 'An early Christian doctrine text in Tagalog and Spanish for missionary purposes.' },
    { id: 1661, title: 'The Adventures of Sherlock Holmes', author: 'Arthur Conan Doyle', genre: 'mystery', description: 'A collection of detective stories featuring the brilliant Sherlock Holmes solving intricate cases.' },
    { id: 64317, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'classics', description: 'A story of wealth, love, and the American Dream in the 1920s, told from multiple perspectives.' },
    { id: 55, title: 'The Wonderful Wizard of Oz', author: 'L. Frank Baum', genre: 'fantasy', description: 'A girl is transported to a magical land where she embarks on a quest to find her way home.' },
    { id: 1080, title: 'A Modest Proposal', author: 'Jonathan Swift', genre: 'non-fiction', description: 'A satirical essay suggesting a shocking solution to poverty in Ireland.' },
    { id: 1727, title: 'The Odyssey', author: 'Homer', genre: 'classics', description: 'The epic journey of Odysseus returning home after the Trojan War, facing mythical challenges.' },
    { id: 28054, title: 'The Brothers Karamazov', author: 'Fyodor Dostoyevsky', genre: 'classics', description: 'A murder mystery intertwined with philosophical discussions on faith, family, and morality.' },
    { id: 4300, title: 'Ulysses', author: 'James Joyce', genre: 'classics', description: 'A day in the life of Leopold Bloom in Dublin, exploring stream-of-consciousness narrative.' },
    { id: 6130, title: 'The Iliad', author: 'Homer', genre: 'classics', description: 'The wrath of Achilles during the Trojan War, focusing on heroism and conflict.' },
    { id: 1400, title: 'Great Expectations', author: 'Charles Dickens', genre: 'classics', description: 'A young orphan\'s rise in society and his encounters with kindness and cruelty.' },
    { id: 76, title: 'Adventures of Huckleberry Finn', author: 'Mark Twain', genre: 'classics', description: 'A boy and a runaway slave raft down the Mississippi, seeking freedom and adventure.' },
    { id: 1998, title: 'Thus Spake Zarathustra: A Book for All and None', author: 'Friedrich Wilhelm Nietzsche', genre: 'philosophy', description: 'A philosophical novel where a prophet proclaims ideas on the Übermensch and eternal recurrence.' },
    { id: 3207, title: 'Leviathan', author: 'Thomas Hobbes', genre: 'philosophy', description: 'A foundational text in political philosophy arguing for a strong central authority to avoid societal chaos.' },
    { id: 2600, title: 'War and Peace', author: 'Leo Tolstoy', genre: 'history', description: 'An epic depiction of Russian society during the Napoleonic Wars, blending history and fiction.' },
    { id: 1232, title: 'The Prince', author: 'Niccolò Machiavelli', genre: 'philosophy', description: 'A pragmatic guide to political power and governance, emphasizing effectiveness over morality.' },
    { id: 77328, title: 'The best short stories of 1925', author: 'Various', genre: 'fiction', description: 'A collection of notable short stories from 1925, showcasing diverse themes and styles.' },
    { id: 24950, title: 'Bradford\'s History of \'Plimoth Plantation\'', author: 'William Bradford', genre: 'history', description: 'A firsthand account of the Pilgrims\' journey and settlement in America.' },
    { id: 205, title: 'Walden, and On The Duty Of Civil Disobedience', author: 'Henry David Thoreau', genre: 'non-fiction', description: 'Reflections on simple living in nature and the moral imperative to resist unjust laws.' },
    { id: 2591, title: 'Grimms\' Fairy Tales', author: 'Jacob Grimm and Wilhelm Grimm', genre: 'fantasy', description: 'A classic collection of German folk tales filled with magic, morals, and adventure.' },
    { id: 74, title: 'The Adventures of Tom Sawyer, Complete', author: 'Mark Twain', genre: 'fiction', description: 'The mischievous adventures of a young boy growing up along the Mississippi River.' },
    { id: 7370, title: 'Second Treatise of Government', author: 'John Locke', genre: 'philosophy', description: 'A seminal work on natural rights, government by consent, and the right to revolution.' },
    { id: 45, title: 'Anne of Green Gables', author: 'L. M. Montgomery', genre: 'fiction', description: 'The story of an imaginative orphan girl who brings joy and change to her adoptive family.' },
    { id: 36034, title: 'White Nights and Other Stories', author: 'Fyodor Dostoyevsky', genre: 'fiction', description: 'Short stories exploring loneliness, dreams, and human connections in 19th-century Russia.' },
    { id: 1952, title: 'The Yellow Wallpaper', author: 'Charlotte Perkins Gilman', genre: 'fiction', description: 'A woman\'s descent into madness as she is confined for "rest cure" treatment.' },
    { id: 3296, title: 'The Confessions of St. Augustine', author: 'Bishop of Hippo Saint Augustine', genre: 'non-fiction', description: 'A spiritual autobiography detailing Augustine\'s journey to Christianity and reflections on sin.' },
    { id: 5200, title: 'Metamorphosis', author: 'Franz Kafka', genre: 'sci-fi', description: 'A salesman awakens transformed into a giant insect, exploring alienation and family dynamics.' },
    { id: 5740, title: 'Tractatus Logico-Philosophicus', author: 'Ludwig Wittgenstein', genre: 'philosophy', description: 'A concise exploration of logic, language, and the limits of philosophy.' },
    { id: 16, title: 'Peter Pan', author: 'J. M. Barrie', genre: 'fantasy', description: 'The adventures of a boy who never grows up in the magical world of Neverland.' },
    { id: 120, title: 'Treasure Island', author: 'Robert Louis Stevenson', genre: 'fiction', description: 'A young boy joins pirates in search of buried treasure, filled with adventure and betrayal.' },
    { id: 8800, title: 'The divine comedy', author: 'Dante Alighieri', genre: 'classics', description: 'A poetic journey through Hell, Purgatory, and Heaven, exploring sin, redemption, and divine love.' },
    { id: 1023, title: 'Bleak House', author: 'Charles Dickens', genre: 'fiction', description: 'A complex tale of legal intrigue, family secrets, and social criticism in Victorian England.' },
    { id: 17199, title: 'Golden Days for Boys and Girls, Vol. XII, Jan. 3, 1891', author: 'Various', genre: 'fiction', description: 'A children\'s magazine with stories, poems, and activities from the late 19th century.' },
    { id: 408, title: 'The Souls of Black Folk', author: 'W. E. B. Du Bois', genre: 'non-fiction', description: 'Essays on race, sociology, and African American experiences in the early 20th century.' },
    { id: 2852, title: 'The Hound of the Baskervilles', author: 'Arthur Conan Doyle', genre: 'mystery', description: 'Sherlock Holmes investigates a family curse involving a supernatural hound on the moors.' },
    { id: 219, title: 'Heart of Darkness', author: 'Joseph Conrad', genre: 'fiction', description: 'A journey up the Congo River reveals the horrors of colonialism and human nature.' },
    { id: 41, title: 'The Legend of Sleepy Hollow', author: 'Washington Irving', genre: 'fantasy', description: 'A schoolmaster encounters a headless horseman in a haunted valley.' },
    { id: 34901, title: 'On Liberty', author: 'John Stuart Mill', genre: 'philosophy', description: 'A defense of individual freedom and the limits of societal authority over personal actions.' },
    { id: 829, title: 'Gulliver\'s Travels into Several Remote Nations of the World', author: 'Jonathan Swift', genre: 'fantasy', description: 'Satirical travels to lands of tiny people, giants, and intelligent horses.' },
    { id: 10007, title: 'Carmilla', author: 'Joseph Sheridan Le Fanu', genre: 'fantasy', description: 'A young woman becomes the victim of a female vampire in a Gothic tale.' },
    { id: 35, title: 'The Time Machine', author: 'H. G. Wells', genre: 'sci-fi', description: 'An inventor travels to the distant future, witnessing the evolution and decline of humanity.' },
    { id: 36, title: 'The War of the Worlds', author: 'H. G. Wells', genre: 'sci-fi', description: 'Martians invade Earth, causing chaos and testing human resilience.' },
    { id: 5230, title: 'The Invisible Man', author: 'H. G. Wells', genre: 'sci-fi', description: 'A scientist turns himself invisible but struggles with the consequences of his experiment.' },
    { id: 62, title: 'A Princess of Mars', author: 'Edgar Rice Burroughs', genre: 'sci-fi', description: 'A Civil War veteran is transported to Mars, where he battles for a princess.' },
    { id: 215, title: 'The Call of the Wild', author: 'Jack London', genre: 'fiction', description: 'A domesticated dog reverts to primal instincts in the Alaskan wilderness.' },
    { id: 140, title: 'The Jungle', author: 'Upton Sinclair', genre: 'non-fiction', description: 'An exposé of the meatpacking industry and immigrant life in Chicago.' },
    { id: 61, title: 'The Communist Manifesto', author: 'Karl Marx and Friedrich Engels', genre: 'philosophy', description: 'A political pamphlet outlining communist theory and calling for worker revolution.' },
    { id: 2130, title: 'Utopia', author: 'Thomas More', genre: 'philosophy', description: 'A description of an ideal society on a fictional island, critiquing European politics.' },
    { id: 147, title: 'Common Sense', author: 'Thomas Paine', genre: 'history', description: 'A pamphlet advocating for American independence from Britain.' },
    { id: 18, title: 'The Federalist Papers', author: 'Alexander Hamilton, John Jay, James Madison', genre: 'history', description: 'Essays promoting the ratification of the U.S. Constitution.' },
    { id: 730, title: 'Oliver Twist', author: 'Charles Dickens', genre: 'fiction', description: 'An orphan\'s harsh life in Victorian London, from workhouse to criminal underworld.' },
    { id: 1399, title: 'Anna Karenina', author: 'Leo Tolstoy', genre: 'fiction', description: 'A tragic story of adultery, family, and society in imperial Russia.' },
    { id: 514, title: 'Little Women', author: 'Louisa May Alcott', genre: 'fiction', description: 'The March sisters\' experiences of love, loss, and growth during the Civil War.' },
    { id: 2148, title: 'The Works of Edgar Allan Poe — Volume 2', author: 'Edgar Allan Poe', genre: 'mystery', description: 'Tales of horror, mystery, and the macabre by the master storyteller.' },
    { id: 27827, title: 'The Kama Sutra of Vatsyayana', author: 'Vatsyayana', genre: 'non-fiction', description: 'An ancient Indian text on sexuality, eroticism, and emotional fulfillment.' },
    { id: 23, title: 'Narrative of the Life of Frederick Douglass, an American Slave', author: 'Frederick Douglass', genre: 'history', description: 'An autobiography detailing enslavement, escape, and advocacy for abolition.' },
    { id: 4363, title: 'Beyond Good and Evil', author: 'Friedrich Wilhelm Nietzsche', genre: 'philosophy', description: 'A critique of traditional morality, philosophy, and the will to power.' },
    { id: 72679, title: 'The lesser Key of Solomon, Goetia, the book of evil spirits', author: 'Anonymous', genre: 'non-fiction', description: 'A grimoire listing demons and instructions for summoning them.' },
    { id: 15399, title: 'The Interesting Narrative of the Life of Olaudah Equiano, Or Gustavus Vassa, The African', author: 'Olaudah Equiano', genre: 'history', description: 'A memoir of an enslaved African\'s experiences and path to freedom.' },
    { id: 8800, title: 'The Divine Comedy', author: 'Dante Alighieri', genre: 'classics', description: 'An allegorical journey through the afterlife, representing the soul\'s path to God.' },
    { id: 20203, title: 'Autobiography of Benjamin Franklin', author: 'Benjamin Franklin', genre: 'history', description: 'The life story of one of America\'s founding fathers, full of wisdom and anecdotes.' },
    { id: 98, title: 'A Tale of Two Cities', author: 'Charles Dickens', genre: 'history', description: 'A story set against the backdrop of the French Revolution, exploring love and sacrifice.' },
    { id: 1400, title: 'Great Expectations', author: 'Charles Dickens', genre: 'fiction', description: 'The coming-of-age story of an orphan named Pip and his unexpected fortunes.' },
    { id: 16328, title: 'Beowulf', author: 'Anonymous', genre: 'classics', description: 'An ancient epic poem about a hero\'s battles against monsters.' },
    { id: 844, title: 'The Importance of Being Earnest', author: 'Oscar Wilde', genre: 'fiction', description: 'A comedic play satirizing Victorian social mores.' },
    { id: 4085, title: 'The Adventures of Roderick Random', author: 'T. Smollett', genre: 'fiction', description: 'A picaresque novel following the exploits of a young Scottish man.' },
    { id: 5197, title: 'My Life — Volume 1', author: 'Richard Wagner', genre: 'non-fiction', description: 'The autobiography of the famous composer.' },
    { id: 6593, title: 'History of Tom Jones, a Foundling', author: 'Henry Fielding', genre: 'fiction', description: 'A comic novel about the life of a foundling.' },
    { id: 6761, title: 'The Adventures of Ferdinand Count Fathom', author: 'T. Smollett', genre: 'fiction', description: 'The story of a rogue\'s adventures across Europe.' },
    { id: 1184, title: 'The Count of Monte Cristo', author: 'Alexandre Dumas', genre: 'fiction', description: 'A tale of revenge and justice after wrongful imprisonment.' },
    { id: 1259, title: 'Twenty Years After', author: 'Alexandre Dumas', genre: 'fiction', description: 'Sequel to The Three Musketeers, set during the Fronde.' },
    { id: 16119, title: 'Doctrina Christiana', author: 'Anonymous', genre: 'non-fiction', description: 'Early Christian doctrine in the Philippines.' },
    { id: 16389, title: 'The Enchanted April', author: 'Elizabeth Von Arnim', genre: 'fiction', description: 'Four women find renewal in an Italian villa.' },
    { id: 1727, title: 'The Odyssey', author: 'Homer', genre: 'classics', description: 'Odysseus\' long journey home after the Trojan War.' },
    { id: 1998, title: 'Thus Spake Zarathustra', author: 'Friedrich Nietzsche', genre: 'philosophy', description: 'Philosophical ideas on the overman and eternal return.' },
    { id: 2148, title: 'The Works of Edgar Allan Poe — Volume 2', author: 'Edgar Allan Poe', genre: 'mystery', description: 'Collection of Poe\'s dark tales and poems.' },
    { id: 2160, title: 'The Expedition of Humphry Clinker', author: 'T. Smollett', genre: 'fiction', description: 'Epistolary novel of a family\'s travels.' },
    { id: 22789, title: 'On the Duties of the Clergy', author: 'Saint Ambrose', genre: 'non-fiction', description: 'Guidance for Christian clergy on their responsibilities.' },
    { id: 24950, title: 'Bradford\'s History of Plimoth Plantation', author: 'William Bradford', genre: 'history', description: 'Account of the Pilgrims\' settlement.' },
    { id: 2542, title: 'A Doll\'s House', author: 'Henrik Ibsen', genre: 'fiction', description: 'A woman\'s rebellion against societal norms.' },
    { id: 25851, title: 'The Life of Charles Dickens', author: 'John Forster', genre: 'non-fiction', description: 'Biography of the Victorian novelist.' },
    { id: 2591, title: 'Grimms\' Fairy Tales', author: 'Brothers Grimm', genre: 'fantasy', description: 'Collection of classic fairy tales.' },
    { id: 26184, title: 'Simple Sabotage Field Manual', author: 'Office of Strategic Services', genre: 'non-fiction', description: 'WWII guide to disrupting enemy operations.' },
    { id: 26225, title: 'Fifteen Thousand Useful Phrases', author: 'Grenville Kleiser', genre: 'non-fiction', description: 'Handbook for writers and speakers.' },
    { id: 3207, title: 'Leviathan', author: 'Thomas Hobbes', genre: 'philosophy', description: 'Theory of social contract and state authority.' },
    { id: 3296, title: 'The Confessions of St. Augustine', author: 'Saint Augustine', genre: 'non-fiction', description: 'Spiritual autobiography.' },
    { id: 36034, title: 'White Nights and Other Stories', author: 'Fyodor Dostoyevsky', genre: 'fiction', description: 'Tales of love and isolation.' },
    { id: 37106, title: 'Little Women (Illustrated)', author: 'Louisa May Alcott', genre: 'fiction', description: 'Sisters\' stories during Civil War.' },
    { id: 394, title: 'Cranford', author: 'Elizabeth Gaskell', genre: 'fiction', description: 'Life in a small English town.' },
    { id: 408, title: 'The Souls of Black Folk', author: 'W. E. B. Du Bois', genre: 'history', description: 'Essays on African American life.' },
    { id: 4300, title: 'Ulysses', author: 'James Joyce', genre: 'classics', description: 'A day in Dublin\'s life.' },
    { id: 4363, title: 'Beyond Good and Evil', author: 'Friedrich Nietzsche', genre: 'philosophy', description: 'Critique of morality.' },
    { id: 5740, title: 'Tractatus Logico-Philosophicus', author: 'Ludwig Wittgenstein', genre: 'philosophy', description: 'Logic and philosophy treatise.' },
    { id: 6130, title: 'The Iliad', author: 'Homer', genre: 'classics', description: 'Epic of the Trojan War.' },
    { id: 64317, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'classics', description: 'Jazz Age tale of love and wealth.' },
    { id: 67979, title: 'The Blue Castle', author: 'L. M. Montgomery', genre: 'fiction', description: 'Woman\'s journey to freedom.' },
    { id: 72679, title: 'The Lesser Key of Solomon', author: 'Anonymous', genre: 'non-fiction', description: 'Grimoire on demonology.' },
    { id: 7370, title: 'Second Treatise of Government', author: 'John Locke', genre: 'philosophy', description: 'Political theory on rights.' },
    { id: 77328, title: 'The Best Short Stories of 1925', author: 'Various', genre: 'fiction', description: 'Anthology of 1925 stories.' },
    { id: 77331, title: 'The Way of All Earth', author: 'Edith Barnard Delano', genre: 'fiction', description: 'Reflections on life and death.' },
    { id: 8492, title: 'The King in Yellow', author: 'Robert W. Chambers', genre: 'fantasy', description: 'Horror stories linked by a play.' },
    { id: 8800, title: 'The Divine Comedy', author: 'Dante Alighieri', genre: 'classics', description: 'Journey through the afterlife.' },
    { id: 10007, title: 'Carmilla', author: 'J. Sheridan Le Fanu', genre: 'fantasy', description: 'Vampire tale with Gothic elements.' },
    { id: 1023, title: 'Bleak House', author: 'Charles Dickens', genre: 'fiction', description: 'Satire on the English legal system.' },
    { id: 1080, title: 'A Modest Proposal', author: 'Jonathan Swift', genre: 'non-fiction', description: 'Satirical essay on poverty.' },
    { id: 1184, title: 'The Count of Monte Cristo', author: 'Alexandre Dumas', genre: 'fiction', description: 'Epic revenge story.' },
    { id: 1232, title: 'The Prince', author: 'Niccolò Machiavelli', genre: 'philosophy', description: 'Guide to ruling.' },
    { id: 1259, title: 'Twenty Years After', author: 'Alexandre Dumas', genre: 'fiction', description: 'Musketeers\' later adventures.' },
    { id: 1260, title: 'Jane Eyre', author: 'Charlotte Brontë', genre: 'classics', description: 'Governess\' romance and trials.' },
    { id: 1342, title: 'Pride and Prejudice', author: 'Jane Austen', genre: 'classics', description: 'Romance and social satire.' },
    { id: 140, title: 'The Jungle', author: 'Upton Sinclair', genre: 'non-fiction', description: 'Expose of meatpacking industry.' },
    { id: 1400, title: 'Great Expectations', author: 'Charles Dickens', genre: 'fiction', description: 'Orphan\'s rise in society.' },
    { id: 145, title: 'Middlemarch', author: 'George Eliot', genre: 'fiction', description: 'Provincial life and ambitions.' },
    { id: 147, title: 'Common Sense', author: 'Thomas Paine', genre: 'history', description: 'Call for American independence.' },
    { id: 1513, title: 'Romeo and Juliet', author: 'William Shakespeare', genre: 'classics', description: 'Tragic love story.' },
    { id: 15399, title: 'The Interesting Narrative of Olaudah Equiano', author: 'Olaudah Equiano', genre: 'history', description: 'Slave narrative.' },
    { id: 16328, title: 'Beowulf', author: 'Anonymous', genre: 'classics', description: 'Heroic epic poem.' },
    { id: 1661, title: 'The Adventures of Sherlock Holmes', author: 'Arthur Conan Doyle', genre: 'mystery', description: 'Detective stories.' },
    { id: 17199, title: 'Golden Days for Boys and Girls', author: 'Various', genre: 'fiction', description: 'Children\'s magazine.' },
    { id: 174, title: 'The Picture of Dorian Gray', author: 'Oscar Wilde', genre: 'classics', description: 'Portrait of moral decay.' },
    { id: 18, title: 'The Federalist Papers', author: 'Hamilton, Jay, Madison', genre: 'history', description: 'Essays on U.S. Constitution.' },
    { id: 1952, title: 'The Yellow Wallpaper', author: 'Charlotte Perkins Gilman', genre: 'fiction', description: 'Descent into madness.' },
    { id: 205, title: 'Walden', author: 'Henry David Thoreau', genre: 'non-fiction', description: 'Simple living in nature.' },
    { id: 2130, title: 'Utopia', author: 'Thomas More', genre: 'philosophy', description: 'Ideal society description.' },
    { id: 215, title: 'The Call of the Wild', author: 'Jack London', genre: 'fiction', description: 'Dog\'s return to wild.' },
    { id: 219, title: 'Heart of Darkness', author: 'Joseph Conrad', genre: 'fiction', description: 'Journey into colonialism.' },
    { id: 23, title: 'Narrative of Frederick Douglass', author: 'Frederick Douglass', genre: 'history', description: 'Slave autobiography.' },
    { id: 25344, title: 'The Scarlet Letter', author: 'Nathaniel Hawthorne', genre: 'classics', description: 'Puritan shame and sin.' },
    { id: 2554, title: 'Crime and Punishment', author: 'Fyodor Dostoyevsky', genre: 'classics', description: 'Murder and guilt.' },
    { id: 2591, title: 'Grimms\' Fairy Tales', author: 'Brothers Grimm', genre: 'fantasy', description: 'Folk tales collection.' },
    { id: 2600, title: 'War and Peace', author: 'Leo Tolstoy', genre: 'history', description: 'Napoleonic era Russia.' },
    { id: 26184, title: 'Simple Sabotage Field Manual', author: 'OSS', genre: 'non-fiction', description: 'WWII sabotage guide.' },
    { id: 26225, title: 'Fifteen Thousand Useful Phrases', author: 'Grenville Kleiser', genre: 'non-fiction', description: 'Phrase handbook.' },
    { id: 2641, title: 'A Room with a View', author: 'E. M. Forster', genre: 'fiction', description: 'Self-discovery in Italy.' },
    { id: 2701, title: 'Moby Dick', author: 'Herman Melville', genre: 'classics', description: 'Whaling obsession.' },
    { id: 27827, title: 'The Kama Sutra', author: 'Vatsyayana', genre: 'non-fiction', description: 'Ancient love treatise.' },
    { id: 28054, title: 'The Brothers Karamazov', author: 'Fyodor Dostoyevsky', genre: 'classics', description: 'Family drama and philosophy.' },
    { id: 2852, title: 'The Hound of the Baskervilles', author: 'Arthur Conan Doyle', genre: 'mystery', description: 'Supernatural hound mystery.' },
    { id: 35, title: 'The Time Machine', author: 'H. G. Wells', genre: 'sci-fi', description: 'Time travel to future.' },
    { id: 36, title: 'The War of the Worlds', author: 'H. G. Wells', genre: 'sci-fi', description: 'Martian invasion.' },
    { id: 345, title: 'Dracula', author: 'Bram Stoker', genre: 'fantasy', description: 'Vampire hunt.' },
    { id: 34901, title: 'On Liberty', author: 'John Stuart Mill', genre: 'philosophy', description: 'Individual freedom defense.' },
    { id: 36034, title: 'White Nights and Other Stories', author: 'Fyodor Dostoyevsky', genre: 'fiction', description: 'Emotional short stories.' },
    { id: 37106, title: 'Little Women (Illustrated)', author: 'Louisa May Alcott', genre: 'fiction', description: 'Sisters\' growth.' },
    { id: 394, title: 'Cranford', author: 'Elizabeth Gaskell', genre: 'fiction', description: 'Village life stories.' },
    { id: 408, title: 'The Souls of Black Folk', author: 'W. E. B. Du Bois', genre: 'non-fiction', description: 'Race essays.' },
    { id: 4085, title: 'The Adventures of Roderick Random', author: 'T. Smollett', genre: 'fiction', description: 'Naval adventures.' },
    { id: 41, title: 'The Legend of Sleepy Hollow', author: 'Washington Irving', genre: 'fantasy', description: 'Headless horseman tale.' },
    { id: 43, title: 'The Strange Case of Dr. Jekyll and Mr. Hyde', author: 'Robert Louis Stevenson', genre: 'mystery', description: 'Dual personality horror.' },
    { id: 4300, title: 'Ulysses', author: 'James Joyce', genre: 'classics', description: 'Stream-of-consciousness day.' },
    { id: 4363, title: 'Beyond Good and Evil', author: 'Friedrich Nietzsche', genre: 'philosophy', description: 'Morality critique.' },
    { id: 45, title: 'Anne of Green Gables', author: 'L. M. Montgomery', genre: 'fiction', description: 'Orphan\'s adventures.' },
    { id: 46, title: 'A Christmas Carol', author: 'Charles Dickens', genre: 'fantasy', description: 'Ghostly redemption.' },
    { id: 514, title: 'Little Women', author: 'Louisa May Alcott', genre: 'fiction', description: 'Family bonds.' },
    { id: 5197, title: 'My Life — Volume 1', author: 'Richard Wagner', genre: 'non-fiction', description: 'Composer\'s memoir.' },
    { id: 5200, title: 'Metamorphosis', author: 'Franz Kafka', genre: 'sci-fi', description: 'Insect transformation.' },
    { id: 5230, title: 'The Invisible Man', author: 'H. G. Wells', genre: 'sci-fi', description: 'Invisibility madness.' },
    { id: 55, title: 'The Wonderful Wizard of Oz', author: 'L. Frank Baum', genre: 'fantasy', description: 'Magical quest.' },
    { id: 5740, title: 'Tractatus Logico-Philosophicus', author: 'Ludwig Wittgenstein', genre: 'philosophy', description: 'Logic treatise.' },
    { id: 61, title: 'The Communist Manifesto', author: 'Marx and Engels', genre: 'philosophy', description: 'Revolutionary pamphlet.' },
    { id: 62, title: 'A Princess of Mars', author: 'Edgar Rice Burroughs', genre: 'sci-fi', description: 'Martian adventure.' },
    { id: 6593, title: 'History of Tom Jones', author: 'Henry Fielding', genre: 'fiction', description: 'Foundling\'s tale.' },
    { id: 6761, title: 'The Adventures of Ferdinand Count Fathom', author: 'T. Smollett', genre: 'fiction', description: 'Rogue\'s exploits.' },
    { id: 67979, title: 'The Blue Castle', author: 'L. M. Montgomery', genre: 'fiction', description: 'Rebellious romance.' },
    { id: 72679, title: 'The Lesser Key of Solomon', author: 'Anonymous', genre: 'non-fiction', description: 'Demon summoning.' },
    { id: 730, title: 'Oliver Twist', author: 'Charles Dickens', genre: 'fiction', description: 'Orphan\'s struggles.' },
    { id: 7370, title: 'Second Treatise of Government', author: 'John Locke', genre: 'philosophy', description: 'Rights theory.' },
    { id: 74, title: 'The Adventures of Tom Sawyer', author: 'Mark Twain', genre: 'fiction', description: 'Boyhood mischief.' },
    { id: 76, title: 'Adventures of Huckleberry Finn', author: 'Mark Twain', genre: 'fiction', description: 'River journey.' },
    { id: 768, title: 'Wuthering Heights', author: 'Emily Brontë', genre: 'classics', description: 'Passionate revenge.' },
    { id: 77328, title: 'The Best Short Stories of 1925', author: 'Various', genre: 'fiction', description: 'Yearly anthology.' },
    { id: 77331, title: 'The Way of All Earth', author: 'Edith Barnard Delano', genre: 'fiction', description: 'Mortality reflections.' },
    { id: 829, title: 'Gulliver\'s Travels', author: 'Jonathan Swift', genre: 'fantasy', description: 'Satirical voyages.' },
    { id: 84, title: 'Frankenstein', author: 'Mary Shelley', genre: 'sci-fi', description: 'Creation\'s revenge.' },
    { id: 844, title: 'The Importance of Being Earnest', author: 'Oscar Wilde', genre: 'fiction', description: 'Identity comedy.' },
    { id: 8492, title: 'The King in Yellow', author: 'Robert W. Chambers', genre: 'fantasy', description: 'Madness-inducing play.' },
    { id: 8800, title: 'The Divine Comedy', author: 'Dante Alighieri', genre: 'classics', description: 'Afterlife journey.' },
    { id: 98, title: 'A Tale of Two Cities', author: 'Charles Dickens', genre: 'history', description: 'Revolution story.' },

    // New educational books added
    // Math books
    { id: 21076, title: 'Euclid\'s Elements', author: 'Euclid', genre: 'math', description: 'The foundational work in geometry and number theory.' },
    { id: 33283, title: 'Calculus Made Easy', author: 'Sylvanus Phillips Thompson', genre: 'math', description: 'An accessible introduction to calculus concepts and applications.' },
    { id: 4763, title: 'The Game of Logic', author: 'Lewis Carroll', genre: 'math', description: 'A playful exploration of logical reasoning and puzzles.' },
    { id: 29785, title: 'A Synopsis of Elementary Results in Pure and Applied Mathematics', author: 'George Shoobridge Carr', genre: 'math', description: 'A reference guide to fundamental mathematical results.' },
    { id: 201, title: 'Flatland: A Romance of Many Dimensions', author: 'Edwin Abbott Abbott', genre: 'math', description: 'A satirical novella introducing concepts of dimensions and geometry.' },
    { id: 28233, title: 'Philosophiae Naturalis Principia Mathematica', author: 'Isaac Newton', genre: 'math', description: 'Newton\'s groundbreaking work on mathematical principles of natural philosophy.' },
    { id: 36670, title: 'The Number Concept: Its Origin and Development', author: 'Levi Leonard Conant', genre: 'math', description: 'An examination of the evolution of numerical ideas.' },
    { id: 38799, title: 'A Treatise on Probability', author: 'John Maynard Keynes', genre: 'math', description: 'A foundational text on the theory of probability.' },
    { id: 40139, title: 'Lectures on Elementary Mathematics', author: 'Joseph Louis Lagrange', genre: 'math', description: 'Lectures covering basic mathematical topics and methods.' },
    { id: 41568, title: 'The Foundations of Geometry', author: 'David Hilbert', genre: 'math', description: 'An axiomatic approach to the foundations of geometry.' },

    // Physics books
    { id: 30155, title: 'Relativity: The Special and General Theory', author: 'Albert Einstein', genre: 'physics', description: 'Einstein\'s accessible explanation of special and general relativity.' },
    { id: 33504, title: 'Opticks', author: 'Isaac Newton', genre: 'physics', description: 'Newton\'s investigations into the nature of light and color.' },
    { id: 14986, title: 'Experimental Researches in Electricity, Volume 1', author: 'Michael Faraday', genre: 'physics', description: 'Faraday\'s seminal experiments on electricity and electromagnetism.' },
    { id: 14082, title: 'The New Physics and Its Evolution', author: 'Lucien Poincare', genre: 'physics', description: 'An overview of developments in physics at the turn of the 20th century.' },
    { id: 20967, title: 'Treatise on Light', author: 'Christiaan Huygens', genre: 'physics', description: 'Huygens\' wave theory of light and its propagation.' },
    { id: 5001, title: 'Sidelights on Relativity', author: 'Albert Einstein', genre: 'physics', description: 'Essays providing insights into relativity theory.' },
    { id: 40856, title: 'The Principle of Relativity', author: 'Albert Einstein', genre: 'physics', description: 'A collection of papers on the principle of relativity.' },
    { id: 36340, title: 'A Treatise on Electricity and Magnetism', author: 'James Clerk Maxwell', genre: 'physics', description: 'Maxwell\'s foundational equations of electromagnetism.' },
    { id: 7256, title: 'Space Time and Gravitation', author: 'Arthur Stanley Eddington', genre: 'physics', description: 'An introduction to the theory of general relativity.' },
    { id: 22427, title: 'The Quantum Theory', author: 'Fritz Reiche', genre: 'physics', description: 'An early exposition of quantum mechanics principles.' },

    // Chemistry books
    { id: 30775, title: 'Elements of Chemistry', author: 'Antoine Lavoisier', genre: 'chemistry', description: 'Lavoisier\'s pioneering text establishing modern chemistry.' },
    { id: 14474, title: 'The Chemical History of a Candle', author: 'Michael Faraday', genre: 'chemistry', description: 'Lectures on the chemistry of combustion and flames.' },
    { id: 22914, title: 'The Sceptical Chymist', author: 'Robert Boyle', genre: 'chemistry', description: 'Boyle\'s critique of alchemy and foundation for modern chemistry.' },
    { id: 26713, title: 'A Text-book of Assaying: For the Use of Those Connected with Mines.', author: 'Cornelius Beringer and John Jacob Beringer', genre: 'chemistry', description: 'A practical guide to chemical assaying of minerals.' },
    { id: 41750, title: 'Creative Chemistry', author: 'Edwin E. Slosson', genre: 'chemistry', description: 'Popular explanations of chemical processes and applications.' },
    { id: 31312, title: 'The Chemistry of Hat Manufacturing', author: 'Watson Smith', genre: 'chemistry', description: 'Chemical principles in the hat-making industry.' },
    { id: 38841, title: 'The Chemistry of Food and Nutrition', author: 'A. W. Duncan', genre: 'chemistry', description: 'An exploration of the chemical composition of foods.' },
    { id: 24798, title: 'An Introductory Course of Quantitative Chemical Analysis', author: 'Henry P. Talbot', genre: 'chemistry', description: 'A laboratory manual for quantitative analysis.' },
    { id: 29390, title: 'The Dyeing of Cotton Fabrics: A Practical Handbook for the Dyer and Student', author: 'Franklin Beech', genre: 'chemistry', description: 'Chemical techniques for dyeing cotton.' },
    { id: 29720, title: 'Soap-Making Manual', author: 'E. G. Thomssen', genre: 'chemistry', description: 'A comprehensive guide to soap production chemistry.' },

    // Educational History books
    { id: 731, title: 'The History of the Decline and Fall of the Roman Empire', author: 'Edward Gibbon', genre: 'history-ed', description: 'A detailed account of the fall of the Roman Empire.' },
    { id: 38226, title: 'The Federalist Papers', author: 'Alexander Hamilton, John Jay, James Madison', genre: 'history-ed', description: 'Essays advocating for the U.S. Constitution.' },
    { id: 16764, title: 'Democracy in America — Volume 1', author: 'Alexis de Tocqueville', genre: 'history-ed', description: 'Observations on American democracy and society.' },
    { id: 815, title: 'The Republic', author: 'Plato', genre: 'history-ed', description: 'Philosophical dialogue on justice and the ideal state.' },
    { id: 3825, title: 'The Prince', author: 'Niccolò Machiavelli', genre: 'history-ed', description: 'A Renaissance treatise on political power.' },
    { id: 10671, title: 'The Fifteen Decisive Battles of the World: from Marathon to Waterloo', author: 'Edward Shepherd Creasy', genre: 'history-ed', description: 'Analyses of pivotal battles in world history.' },
    { id: 300, title: 'History of the United States', author: 'Charles A. Beard and Mary R. Beard', genre: 'history-ed', description: 'An overview of American history.' },
    { id: 12513, title: 'A Short History of the World', author: 'H. G. Wells', genre: 'history-ed', description: 'A concise narrative of world history.' },
    { id: 17318, title: 'The Outline of History: Being a Plain History of Life and Mankind', author: 'H. G. Wells', genre: 'history-ed', description: 'A broad survey of history from origins to modern times.' },
    { id: 1367, title: 'History of the Peloponnesian War', author: 'Thucydides', genre: 'history-ed', description: 'An ancient account of the war between Athens and Sparta.' }
];

// Group books by main genres for rendering
const genres = ['fiction', 'non-fiction', 'mystery', 'sci-fi', 'fantasy', 'classics', 'history', 'philosophy'];
const groupedBooks = genres.reduce((acc, genre) => {
    acc[genre] = books.filter(book => book.genre === genre);
    return acc;
}, {});

// Images for main genres
const genreImages = {
    fiction: 'https://media.istockphoto.com/id/1489244147/vector/genre-of-books-front.jpg?s=612x612&w=0&k=20&c=CSWH43jVl2Ay5TIZboMsm2QszxqEtGkqZHm7dxSt1p4=',
    'non-fiction': 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg35dRb8H3G7lW0xkeu7utVh28K9FL7_7SC9L8wORVtQtYVMirBL5QACpzoD31ngc2Q3xEUjBYBpJsGkdeJNEXQVdUTQTX6XUw4B39Z7RTw9Jx5bZk58JwV-uFL0MJVKaSr6SQJoOGC6CY/s1600/5+Kinds+NF+Book.jpg',
    mystery: 'https://images-cdn.reedsy.com/discovery/post/104/featured_image/large_b0bdcebccfdc16d517fe8e74e1b023047e808f6a.jpg',
    'sci-fi': 'https://cdn.theatlantic.com/media/mt/culture_test/beauchamp%20scifi%20books%20615.png',
    fantasy: 'http://blog.tombowusa.com/wp-content/uploads/files/Katie_-Fantasy-Book-Illustration-_Tombow-4.jpg',
    classics: 'https://media.istockphoto.com/id/1089057978/vector/banner-with-hand-drawing-sketch-books-concept-vintage-design-for-fair-or-festival-flyer.jpg?s=612x612&w=0&k=20&c=_RLao1mb8qkttMu-K83Vo9WvLO5D47sR4PJSW-SXKsU=',
    history: 'https://cdn.hswstatic.com/gif/World-war-2-timeline-with-pictures.jpg',
    philosophy: 'https://www.shutterstock.com/image-vector/bust-statues-famous-antique-greek-600nw-2504825263.jpg',
    education: 'https://as1.ftcdn.net/jpg/01/89/99/12/1000_F_189991259_6ZrR7CTUtMbvng90m219BkQI1PumD719.jpg'
};

// Sub-genres for education
const subGenres = ['math', 'physics', 'chemistry', 'history-ed'];
const groupedSubBooks = subGenres.reduce((acc, sub) => {
    acc[sub] = books.filter(book => book.genre === sub);
    return acc;
}, {});

// Images for education sub-genres
const subImages = {
    math: 'https://media.istockphoto.com/id/1265965042/vector/math-theory-mathematics-calculus-on-class-chalkboard-algebra-and-geometry-science.jpg?s=612x612&w=0&k=20&c=T97ylW_6ht1STS_MRw4YrDg0Kt3HuoXEOQI9vQFfin8=',
    physics: 'https://thumbs.dreamstime.com/b/physics-science-icons-set-classical-mechanics-experiments-equipment-tools-magnet-atom-pendulum-newton-s-laws-simplest-69017016.jpg',
    chemistry: 'https://i.fbcd.co/products/original/chemistry-lab-elements-illustration-preview-02-20d08811a9f77e28b13136d975e6026da7992f18ac66aa5365a20d756f12227b.jpg',
    'history-ed': 'https://i.ytimg.com/vi/__BaaMfiD0Q/maxresdefault.jpg'
};

// Function to render the main genre sections with illustrations
const main = document.getElementById('book-sections');
genres.forEach(genre => {
    if (groupedBooks[genre].length > 0) {
        const section = document.createElement('section');
        section.id = genre;
        section.className = 'section';
        section.innerHTML = `
            <img src="${genreImages[genre]}" class="section-image" alt="${genre} illustration">
            <h2>${genre.charAt(0).toUpperCase() + genre.slice(1)}</h2>
            <div class="book-grid"></div>
        `;
        const grid = section.querySelector('.book-grid');
        groupedBooks[genre].forEach(book => {
            const card = document.createElement('div');
            card.className = 'book-card';
            card.innerHTML = `
                <img src="https://www.gutenberg.org/cache/epub/${book.id}/pg${book.id}.cover.medium.jpg" alt="${book.title} Cover" onerror="this.src='https://via.placeholder.com/250x350?text=Book+Cover'">
                <h3>${book.title}</h3>
                <p class="author">By ${book.author}</p>
                <p class="description">${book.description}</p>
                <a href="https://www.gutenberg.org/ebooks/${book.id}" target="_blank">Download</a>
            `;
            grid.appendChild(card);
        });
        main.appendChild(section);
    }
});

// Render the Education section with sub-genres and illustrations
const educationSection = document.createElement('section');
educationSection.id = 'education';
educationSection.className = 'section';
educationSection.innerHTML = `
    <img src="${genreImages.education}" class="section-image" alt="Education illustration">
    <h2>Education</h2>
    <nav class="sub-nav">
        <ul>
            ${subGenres.map(sub => `<li><a href="#${sub}">${sub.charAt(0).toUpperCase() + sub.slice(1).replace('-ed', '')}</a></li>`).join('')}
        </ul>
    </nav>
`;
subGenres.forEach(sub => {
    if (groupedSubBooks[sub].length > 0) {
        const subSection = document.createElement('div');
        subSection.id = sub;
        subSection.innerHTML = `
            <img src="${subImages[sub]}" class="section-image" alt="${sub} illustration">
            <h3>${sub.charAt(0).toUpperCase() + sub.slice(1).replace('-ed', '')}</h3>
            <div class="book-grid"></div>
        `;
        const grid = subSection.querySelector('.book-grid');
        groupedSubBooks[sub].forEach(book => {
            const card = document.createElement('div');
            card.className = 'book-card';
            card.innerHTML = `
                <img src="https://www.gutenberg.org/cache/epub/${book.id}/pg${book.id}.cover.medium.jpg" alt="${book.title} Cover" onerror="this.src='https://via.placeholder.com/250x350?text=Book+Cover'">
                <h3>${book.title}</h3>
                <p class="author">By ${book.author}</p>
                <p class="description">${book.description}</p>
                <a href="https://www.gutenberg.org/ebooks/${book.id}" target="_blank">Download</a>
            `;
            grid.appendChild(card);
        });
        educationSection.appendChild(subSection);
    }
});
main.appendChild(educationSection);

// Search functionality to filter book cards
const searchInput = document.getElementById('search-input');
searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    const cards = document.querySelectorAll('.book-card');
    cards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const author = card.querySelector('.author').textContent.toLowerCase();
        const description = card.querySelector('.description').textContent.toLowerCase();
        if (title.includes(query) || author.includes(query) || description.includes(query)) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
});