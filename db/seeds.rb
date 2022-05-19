# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "Seeding user"
user1 = User.create(username: "alexlex", password: "chicken" , first_name: "Alexia" , last_name: "Velador")
user2 = User.create(username: "yesac", password: "walker", first_name: "Brown", last_name: "Brown")
user3 = User.create(username: "spongeboy", password: "garyforever", first_name: "Spongebob", last_name: "SquarePants")
user4 = User.create(username: "thiccstar", password: "krabbypatty", first_name: "Patrick", last_name: "Star")
user5 = User.create(username: "urmom", password: "urmom", first_name: "Ur" , last_name: "Mom")

puts "Seeding sign"
sign1 = Sign.create(name: "A", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Sign_language_A.svg/1280px-Sign_language_A.svg.png", description: 'A closed fist, all finger folded against the palm, thumb is straight, alongside the index finger.', is_alpha: true)
sign2 = Sign.create(name: "B", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Sign_language_B.svg/800px-Sign_language_B.svg.png", description: 'All fingers are straight. Thumb is folded across palm.', is_alpha: true)
sign3 = Sign.create(name: "C", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Sign_language_C.svg/1920px-Sign_language_C.svg.png", description: ' All fingers partially folded. Thumb is partially folded. Hand is turn slightly to the left so viewer can see backward "C" shape formed by thumb and index finger.', is_alpha: true)
sign4 = Sign.create(name: "D", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Sign_language_D.svg/800px-Sign_language_D.svg.png", description: 'Middle, ring and little fingers are partially folded. Tip of thumb is touching tip of middle finger. Index finger is straight. Hand is turned slightly so viewer can see "d" shape formed by thumb, middle and index fingers.', is_alpha: true)
sign5 = Sign.create(name: "E", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Sign_language_E.svg/1024px-Sign_language_E.svg.png", description: 'Thumb is folded across in front of palm but not touching it. All fingers are partially folded with the tips of index, middle and ring fingers touching the thumb between the knuckle and the tip.', is_alpha: true)
sign6 = Sign.create(name: "F", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Sign_language_F.svg/800px-Sign_language_F.svg.png", description: 'Tip of index finger is touching tip of thumb. Middle, ring and little fingers are straight and slightly spread.', is_alpha: true)
sign7 = Sign.create(name: "G", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Sign_language_G.svg/2880px-Sign_language_G.svg.png", description: 'Middle, ring and little fingers are folded down across palm. Thumb is straight but pulled in so that it is in front of the index finger. The index finger is straight and pointing forwards slightly so that it is parallel to the thumb, The thumb and index finger are not touching. The whole hand is turned towards the left and tilted slightly so the thumb and index finger are towards the viewer and pointing up at about 45 degrees.', is_alpha: true)
sign8 = Sign.create(name: "H", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Sign_language_G.svg/2880px-Sign_language_G.svg.png", description: 'Ring and little finger are folded down. Thumb is folded over ring and little finger. Index finger and middle finger are straight and together. The hand is tilted over so that the fingers are horizontal and pointing to the left.', is_alpha: true)
sign9 = Sign.create(name: "I", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Sign_language_I.svg/1024px-Sign_language_I.svg.png", description: 'Index, middle and ring fingers are folded down. Thumb is folded across index middle and ring fingers. Little finger is straight.', is_alpha: true)
sign10 = Sign.create(name: "J", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Sign_language_J.svg/1920px-Sign_language_J.svg.png", description: 'Index, middle and ring fingers are folded down. Thumb is folded across index middle and ring fingers. Little finger is straight. The hand is moved so that little finger draws a "J" shape. Motion is a curve moving forward and then right. The hand turns to the right.', is_alpha: true)
sign11 = Sign.create(name: "K", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Sign_language_K.svg/1024px-Sign_language_K.svg.png", description: 'Ring and little fingers are folded down. Index and middle finger are straight and slightly spread. Thumb is straight and pointing up to the middle finger. (This is very similar to V the only difference is the position of the thumb.', is_alpha: true)
sign12 = Sign.create(name: "L", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Sign_language_L.svg/1280px-Sign_language_L.svg.png", description: 'Middle, ring and little finger are folded down over palm. Index finger and thumb are straight. Thumb is sticking out sideways at 90 degrees to index finger to form "L" shape.', is_alpha: true)
sign13 = Sign.create(name: "M", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Sign_language_M.svg/1280px-Sign_language_M.svg.png", description: 'Little finger is folded. Thumb is folded across to touch little finger. Index, middle and ring fingers are folded down over thumb.', is_alpha: true)
sign14 = Sign.create(name: "N", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Sign_language_N.svg/1024px-Sign_language_N.svg.png", description: 'Little and ring finger are folded. Thumb is folded across ring and little finger. Index finger and middle finger are folded down over thumb.', is_alpha: true)
sign15 = Sign.create(name: "O", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Sign_language_O.svg/1280px-Sign_language_O.svg.png", description: 'All fingers are partially folded. Thumb is partially folded and tip of thumb is touching tip of index finger. Hand is turned slightly so viewer can see "O" shape formed by thumb and index finger.', is_alpha: true)
sign16 = Sign.create(name: "P", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Sign_language_P.svg/2880px-Sign_language_P.svg.png", description: 'Ring and little finger are folded down. Index finger is straight. Middle finger is straight but pointing forward so that is at 90 degrees to index finger. Tip of thumb is touching middle of middle finger. Hand is turned to the left and twisted over so that index finger is horizontal and middle finger is pointing down. Viewer can (sort of) see a "P" shape formed by middle finger and thumb.', is_alpha: true)
sign17 = Sign.create(name: "Q", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Sign_language_Q.svg/1280px-Sign_language_Q.svg.png", description: 'Ring and little fingers are folded down across palm. Thumb is straight but pulled in so that it is in front of the index finger. The index finger is straight and pointing forwards slightly so that it is parallel to the thumb. The index finger and thumb are not touching. The Middle finger is bent down and across to the right of the thumb (this hurts !). The whole hand is turned towards the left and tilted so the thumb and index finger are towards the viewer and pointing almost straight down.', is_alpha: true)
sign18 = Sign.create(name: "R", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Sign_language_R.svg/800px-Sign_language_R.svg.png", description: 'Ring and little finger are folded against the palm, held down by thumb, index and middle finger are straight and crossed, index finger in front.', is_alpha: true)
sign19 = Sign.create(name: "S", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Sign_language_S.svg/1280px-Sign_language_S.svg.png", description: 'Clenched fist. All fingers folded tightly into palm. Thumb is across index and middle fingers.', is_alpha: true)
sign20 = Sign.create(name: "T", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Sign_language_T.svg/1280px-Sign_language_T.svg.png", description: 'Middle, ring and little fingers are fold down across palm. Thumb is folded across middle finger. Index finger is folded over thumb.', is_alpha: true)
sign21 = Sign.create(name: "U", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Sign_language_U.svg/800px-Sign_language_U.svg.png", description: 'Ring and little finger are folded against the palm, held down by thumb, index and middle finger are straight and together.', is_alpha: true)
sign22 = Sign.create(name: "V", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Sign_language_V.svg/800px-Sign_language_V.svg.png", description: 'Ring and little finger fold against the palm, held down by thumb, index and middle finger are straight and spread to form a "V" shape.', is_alpha: true)
sign23 = Sign.create(name: "W", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Sign_language_W.svg/800px-Sign_language_W.svg.png", description: 'Tip of little finger is touching tip of thumb. Index, middle and ring fingers are straight and slightly spread.', is_alpha: true)
sign24 = Sign.create(name: "X", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Sign_language_X.svg/1280px-Sign_language_X.svg.png", description: 'Middle, ring and little fingers are folded down. Index finger is bent at both joints. Thumb is pulled in and slightly bent at the joint. The hand is turned to the left so view can see thumb and index finger.', is_alpha: true)
sign25 = Sign.create(name: "Y", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Sign_language_Y.svg/1920px-Sign_language_Y.svg.png", description: 'Index, middle and ring ringers folded against palm. Little finger and thumb are straight and spread wide.', is_alpha: true)
sign26 = Sign.create(name: "Z", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Sign_language_Z.svg/1024px-Sign_language_Z.svg.png", description: 'Middle, ring and little fingers are folded. Thumb is folded across middle and ring fingers. Index finger is straight. The hand is moved so that the tip of index finger draws out a "Z" shape. The motion is (1) from right to left. (2) from left to right and forward. (3) from right to left.', is_alpha: true)


puts "Seeding favorites"
favorites1 = Favorites.create(user_id: user1.id, sign_id: sign1.id)
favorites2 = Favorites.create(user_id: user2.id, sign_id: sign2.id)
favorites3 = Favorites.create(user_id: user3.id, sign_id: sign3.id)
favorites4 = Favorites.create(user_id: user4.id, sign_id: sign4.id)
favorites5 = Favorites.create(user_id: user5.id, sign_id: sign5.id)

puts "✅ Done seeding!"