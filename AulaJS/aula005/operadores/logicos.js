// AND lógico (&&)
exp1 && ext2

var a1 = true && true;      // t && t retorna true
var a2 = true && false;     // t && f retorna false
var a3 = false && true;     // f && t retorna false
var a4 = false && (3 == 4); // f && f retorna false
var a5 = "Gato" && "Cão";   // t && t retorna Cão
var a6 = false && "Gato";   // f && t retorna false
var a7 = "Gato" && false;   // t && f retorna false

// OU lógico (||)
exp1 || exp2

var o1 = true   || true;     // t && t retorna true
var o2 = false  || true;     // f && t retorna true
var o3 = true   || false;    // t && f retorna true
var o4 = false  || (3 == 4); // f && f retorna false
var o5 = "Gato" || "Cão";    // t && t retorna gato
var o6 = false  || "Gato";   // f && t retorna gato
var o7 = "Gato" || false;    // t && f retorna gato

// NOT lógico (!)
!exp1

var n1 = !true   // !t && t retorna false
var n2 = !false  // !t && t retorna true
var n3 = !"Gato" // !t && f retorna false
