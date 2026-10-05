var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "s_sets_tuples",
  "level": "1",
  "url": "s_sets_tuples.html",
  "type": "Section",
  "number": "0.1",
  "title": "Sets and tuples",
  "body": " Sets and tuples   The two main players in the story of linear algebra are vector spaces and linear transformations . As we will see, a vector space is a certain kind of set , and a linear transformation is a special type of function . Moreover, many of the examples of vectors spaces we study will consist of tuples of real numbers. Accordingly, in the next two sections we will gather important notions and notations related to sets, tuples, and functions.    Sets   Sets  sets  sets empty sets  sets membership      set membership    A set is a collection of objects. An object is a member (or element ) of a set if contains . In this case, we write . If is not a member of , we write .    We use curly braces to describe the contents of a set. For example, is the set containing the first three positive integers, and is the set of all positive integers. The defining property of sets is that they are completely determined by their members, and nothing more. In particular, when describing sets as above, it does not matter in what order the elements are listed, nor if they are repeated: , , , and are three descriptions of the same set. This somewhat slippery notion is made perfectly clear by specifying exactly what it means for two sets to be equal, as we do below.   Set equality  sets equality   Sets and are equal , denoted , if they have precisely the same elements: , if for any object , we have if and only if .    Set membership naturally extends to a notion of one set being within another. Formally, this is captured by the relation of set inclusion .   Set inclusion  sets subset  sets inclusion    set inclusion    A set is a subset of a set , denoted , if every member of is a member of : , implies for any object . The relation is called set inclusion .     The definitions of set equality and the subset relation make use of two important logical operations: namely, the if and only if (or iff for short) and if-then operations. We describe these notions in more detail in , and we outline techniques for proving if and only if and if-then statements, including statements about set equality and the subset relation, in .   With the fundamental notions of membership, equality, and subset in place, we now introduce means of building new sets from existing ones. The first is a manner of carving out a subset of a given set using a specified property.   Set-builder notation  sets set builder notation   Let be a set, and let be a property that elements of either satisfy or do not satisfy. For an element , let denote the statement that satisfies . The set of all elements of satisfying is denoted .     Parsing set builder notation  Set builder notation is parsed from left to right as follows:    is read as the set of      is read as elements of      is read as such that      is read as is true .   Taken altogether we get: The set of elements of such that is true .     Let be the set of nonnegative integers. The subset of even positive integers can be described using set-builder notation as , or alternatively, .    Next we use set builder notation, the set membership relation, and some basic logic to define the union, intersection, and difference of sets.   Union, intersection, difference, and complement  sets union  sets intersection  sets complement  sets difference    set union     set complement     set intersection       set difference    Let and be subsets of a common set .   Set union  The union  of and is defined as . More generally, the union of a collection of subsets of is defined as .    Set intersection  The intersection  of and is defined as . More generally, the intersection of a collection of subsets of is defined as     Set difference  The difference  is defined as .    Set complement  The complement of in is defined as . In contexts where there is clear what the larger set is, we denote the complement of in as .       With the help of these set operations, we can now describe some common sets used in mathematics.   Common mathematical sets  sets empty set  real numbers  integers  rational numbers     the empty set     real numbers     integers     positive integers     the set of all integers greater than or equal to     rational numbers    The empty set is the set containing no objects, denoted or .  We denote by the set of all real numbers. The integers  and rational numbers  are the subsets of defined as . This yields the following chain of subsets: . Additionally, for any integer we denote by the set of all integers : , . Lastly, we denote by the set of all positive integers: , .    Lastly, we define the cardinality of a set , which is a measure of its size. Essentially this is just the number of distinct elements of the set . However, we take care that our definition encompasses both finite and infinite sets.   Cardinality of a set  cardinality of a set    the cardinality of the set    Let be a set. The cardinality of , denoted is defined as follows.   If is finite, then its cardinality is the number of distinct elements it contains, written .    If is infinite, then we say it has infinite cardinality , and write .         Tuples  A set is a somewhat paltry thing, structurally speaking. You can think of it as an arbitrary collection of objects thrown into a bag with no real rhyme or reason. In particular, as is commonly said, there is no order to the elements of a set. That is, when we write , there is no sense in which is the first element of , is the second element, and is the third . That particular ordering is simply suggested by the way we have chosen to describe , but recall that we could just have well described as or even . To give an ordering to we need to explicitly state which element is the the first, which the second, and which the third. Clearly, this is an additional layer of structure given to the underlying set , and the typical way to indicate this structure is to use what is often called ordered list , or sequence notation. For example, we write to denote the set along with the choice of ordering that designates as the first element, as the second, and as the third; and we write to denote the same set along with the ordering that designates as the first element, as the second, and as the third. Our definition of a tuple both makes this notion of an ordered set precise and greatly generalizes it.   Tuples    tuple indexed by     -valued tuples indexed by    Let and be sets. An -valued tuple indexed by is a rule that assigns to each index  an element , denoted .  Given an -valued tuple , we call the index set , and for each index , we call the -th component (or coordinate , or entry , or term ) of . We call the set of values of the tuple .  The set of all -valued tuples indexed by is denoted : , .     Tuple notation  Different index sets give rise to different notational conventions for denoting tuples and sets of tuples .   When for some positive integer , we will write for , and will use any of the following notations for a tuple of : . In this case we call an -tuple with values in , and we call the length of the -tuple. Moreover, we use the following terminology for : a -tuple is a called a pair of elements of , a -tuple is called a triple of elements of .    When , we will write for , and will use any of the following notations for a tuple of : . In this context a tuple of is often called an infinite sequence of elements of .      Given a tuple , the indexing by the set plays the role of a filing system: given an index , our filing system returns to us a certain element of and labels it the -th element in our system. Different index sets, and different choices of index assignments, give rise to different ways of organizing the elements of the underlying set . This is the motivation for the following definition of what it means for two -valued tuples to be equal.   Tuple equality   Given a set , two -valued tuples and are equal , denoted if the following two conditions hold.    .     for all .        Tuple equality  The filing system analogy for tuples might help you make sense of . For two filing systems of a certain collection to be equal, they should firstly have the same indexing set (this is the condition ); and secondly, to each index in our indexing set, they should assign the same object from our collection.    Tuple equality   Decide whether the given -valued tuples are equal.    ,      ,      ,        In all cases we have , but for different reasons that illuminate the different nuances of .   Both tuples have the same index set in this case. Write and . Although we have and , since , we see that . Note that in this case we do not even have equality between the set of values of the two tuples. That is, .    Again, both tuples are indexed by . Furthermore, in this case the sets of values of the two tuples are equal. However, since the third coordinate of is not equal to the third coordinate of , we have .    In this case the two tuples fail to be equal due to their having different index sets. The index set of is , and the index set of is .        Ordered list  Index sets of the form and are equipped with a natural choice of ordering inherited from the relation on . That is, we have . As a result, a tuple (or ) indexed by for one of these types of index sets can be thought of as an ordering of the underlying set. Indeed, in this setting we do not just speak of the -th element of the tuple , we further call the first element, the second element, . This is why tuples of the form or are often called ordered lists or ordered sequences .  We take care to add however, that since our general definition of tuples allows for arbitrary index sets , and since not every set has a natural choice of ordering, we should not in general think of tuples as ordered lists in this precise sense. Indeed, consider the somewhat peculiar index set . There is no natural ordering of the set , and so a tuple indexed by also should not be thought of as an ordered list. Indeed, instead of speaking of a first, second, or third element of the tuple , it really only makes sense to speak of the -th, -th, and -th element of the tuple!   There is no restriction to what the elements of a set are. In particular, these elements could be sets themselves! For example, the set contains three elements, all of which are themselves sets: namely, the empty set, the set , and the set . Similarly, our definition of tuples gives no restrictions on what type of objects the coordinates are allowed to be. When we let those coordinates be sets themselves, we arrive at the mathematical notion of a indexed family of sets .   Indexed family of sets   An indexed family of sets is a tuple , where is a set for all indices .    The notion of a family of sets allows us in turn to generalize our definitions of finite unions and intersections to arbitrary unions and intersections.   Arbitrary unions and intersections   Let be a set, and let be a family of sets with for all .   The union of the , denoted , is defined as .    The intersection of the , denoted , is defined as .       Lastly, combining the notions of families of sets and tuples, we arrive at the notion of a Cartesian product , which can be thought of as the set of tuples whose coordinates are restricted to a specified subset for all .   Cartesian product  Cartesian product    Cartesian product of the sets    Let be a set, and let be a family of subsets with for all . The Cartesian product  of the is defined as . In other words, the Cartesian product is the set of all -valued tuples whose -th coordinate is an element of for all .  In the special case where we write and , and we call the -fold Cartesian product of .     "
},
{
  "id": "d_sets",
  "level": "2",
  "url": "s_sets_tuples.html#d_sets",
  "type": "Definition",
  "number": "0.1.1",
  "title": "Sets.",
  "body": " Sets  sets  sets empty sets  sets membership      set membership    A set is a collection of objects. An object is a member (or element ) of a set if contains . In this case, we write . If is not a member of , we write .   "
},
{
  "id": "d_set_equality",
  "level": "2",
  "url": "s_sets_tuples.html#d_set_equality",
  "type": "Definition",
  "number": "0.1.2",
  "title": "Set equality.",
  "body": " Set equality  sets equality   Sets and are equal , denoted , if they have precisely the same elements: , if for any object , we have if and only if .   "
},
{
  "id": "d_set_inclusion",
  "level": "2",
  "url": "s_sets_tuples.html#d_set_inclusion",
  "type": "Definition",
  "number": "0.1.3",
  "title": "Set inclusion.",
  "body": " Set inclusion  sets subset  sets inclusion    set inclusion    A set is a subset of a set , denoted , if every member of is a member of : , implies for any object . The relation is called set inclusion .   "
},
{
  "id": "rm_equal_subset_logic",
  "level": "2",
  "url": "s_sets_tuples.html#rm_equal_subset_logic",
  "type": "Remark",
  "number": "0.1.4",
  "title": "",
  "body": " The definitions of set equality and the subset relation make use of two important logical operations: namely, the if and only if (or iff for short) and if-then operations. We describe these notions in more detail in , and we outline techniques for proving if and only if and if-then statements, including statements about set equality and the subset relation, in .  "
},
{
  "id": "d_set_builder_notation",
  "level": "2",
  "url": "s_sets_tuples.html#d_set_builder_notation",
  "type": "Definition",
  "number": "0.1.5",
  "title": "Set-builder notation.",
  "body": " Set-builder notation  sets set builder notation   Let be a set, and let be a property that elements of either satisfy or do not satisfy. For an element , let denote the statement that satisfies . The set of all elements of satisfying is denoted .   "
},
{
  "id": "rm_set_builder",
  "level": "2",
  "url": "s_sets_tuples.html#rm_set_builder",
  "type": "Remark",
  "number": "0.1.6",
  "title": "Parsing set builder notation.",
  "body": " Parsing set builder notation  Set builder notation is parsed from left to right as follows:    is read as the set of      is read as elements of      is read as such that      is read as is true .   Taken altogether we get: The set of elements of such that is true .  "
},
{
  "id": "ex_set_builder",
  "level": "2",
  "url": "s_sets_tuples.html#ex_set_builder",
  "type": "Example",
  "number": "0.1.7",
  "title": "",
  "body": "  Let be the set of nonnegative integers. The subset of even positive integers can be described using set-builder notation as , or alternatively, .   "
},
{
  "id": "d_set_operations",
  "level": "2",
  "url": "s_sets_tuples.html#d_set_operations",
  "type": "Definition",
  "number": "0.1.8",
  "title": "Union, intersection, difference, and complement.",
  "body": " Union, intersection, difference, and complement  sets union  sets intersection  sets complement  sets difference    set union     set complement     set intersection       set difference    Let and be subsets of a common set .   Set union  The union  of and is defined as . More generally, the union of a collection of subsets of is defined as .    Set intersection  The intersection  of and is defined as . More generally, the intersection of a collection of subsets of is defined as     Set difference  The difference  is defined as .    Set complement  The complement of in is defined as . In contexts where there is clear what the larger set is, we denote the complement of in as .      "
},
{
  "id": "d_common_sets",
  "level": "2",
  "url": "s_sets_tuples.html#d_common_sets",
  "type": "Definition",
  "number": "0.1.9",
  "title": "Common mathematical sets.",
  "body": " Common mathematical sets  sets empty set  real numbers  integers  rational numbers     the empty set     real numbers     integers     positive integers     the set of all integers greater than or equal to     rational numbers    The empty set is the set containing no objects, denoted or .  We denote by the set of all real numbers. The integers  and rational numbers  are the subsets of defined as . This yields the following chain of subsets: . Additionally, for any integer we denote by the set of all integers : , . Lastly, we denote by the set of all positive integers: , .   "
},
{
  "id": "d_cardinality",
  "level": "2",
  "url": "s_sets_tuples.html#d_cardinality",
  "type": "Definition",
  "number": "0.1.10",
  "title": "Cardinality of a set.",
  "body": " Cardinality of a set  cardinality of a set    the cardinality of the set    Let be a set. The cardinality of , denoted is defined as follows.   If is finite, then its cardinality is the number of distinct elements it contains, written .    If is infinite, then we say it has infinite cardinality , and write .      "
},
{
  "id": "d_tuple",
  "level": "2",
  "url": "s_sets_tuples.html#d_tuple",
  "type": "Definition",
  "number": "0.1.11",
  "title": "Tuples.",
  "body": " Tuples    tuple indexed by     -valued tuples indexed by    Let and be sets. An -valued tuple indexed by is a rule that assigns to each index  an element , denoted .  Given an -valued tuple , we call the index set , and for each index , we call the -th component (or coordinate , or entry , or term ) of . We call the set of values of the tuple .  The set of all -valued tuples indexed by is denoted : , .   "
},
{
  "id": "not_tuple_notation",
  "level": "2",
  "url": "s_sets_tuples.html#not_tuple_notation",
  "type": "Convention",
  "number": "0.1.12",
  "title": "Tuple notation.",
  "body": " Tuple notation  Different index sets give rise to different notational conventions for denoting tuples and sets of tuples .   When for some positive integer , we will write for , and will use any of the following notations for a tuple of : . In this case we call an -tuple with values in , and we call the length of the -tuple. Moreover, we use the following terminology for : a -tuple is a called a pair of elements of , a -tuple is called a triple of elements of .    When , we will write for , and will use any of the following notations for a tuple of : . In this context a tuple of is often called an infinite sequence of elements of .     "
},
{
  "id": "d_tuple_equality",
  "level": "2",
  "url": "s_sets_tuples.html#d_tuple_equality",
  "type": "Definition",
  "number": "0.1.13",
  "title": "Tuple equality.",
  "body": " Tuple equality   Given a set , two -valued tuples and are equal , denoted if the following two conditions hold.    .     for all .      "
},
{
  "id": "ss_tuples-7",
  "level": "2",
  "url": "s_sets_tuples.html#ss_tuples-7",
  "type": "Remark",
  "number": "0.1.14",
  "title": "Tuple equality.",
  "body": " Tuple equality  The filing system analogy for tuples might help you make sense of . For two filing systems of a certain collection to be equal, they should firstly have the same indexing set (this is the condition ); and secondly, to each index in our indexing set, they should assign the same object from our collection.  "
},
{
  "id": "eg_tuple_equality",
  "level": "2",
  "url": "s_sets_tuples.html#eg_tuple_equality",
  "type": "Example",
  "number": "0.1.15",
  "title": "Tuple equality.",
  "body": " Tuple equality   Decide whether the given -valued tuples are equal.    ,      ,      ,        In all cases we have , but for different reasons that illuminate the different nuances of .   Both tuples have the same index set in this case. Write and . Although we have and , since , we see that . Note that in this case we do not even have equality between the set of values of the two tuples. That is, .    Again, both tuples are indexed by . Furthermore, in this case the sets of values of the two tuples are equal. However, since the third coordinate of is not equal to the third coordinate of , we have .    In this case the two tuples fail to be equal due to their having different index sets. The index set of is , and the index set of is .      "
},
{
  "id": "rm_tuple_ordered",
  "level": "2",
  "url": "s_sets_tuples.html#rm_tuple_ordered",
  "type": "Remark",
  "number": "0.1.16",
  "title": "Ordered list.",
  "body": " Ordered list  Index sets of the form and are equipped with a natural choice of ordering inherited from the relation on . That is, we have . As a result, a tuple (or ) indexed by for one of these types of index sets can be thought of as an ordering of the underlying set. Indeed, in this setting we do not just speak of the -th element of the tuple , we further call the first element, the second element, . This is why tuples of the form or are often called ordered lists or ordered sequences .  We take care to add however, that since our general definition of tuples allows for arbitrary index sets , and since not every set has a natural choice of ordering, we should not in general think of tuples as ordered lists in this precise sense. Indeed, consider the somewhat peculiar index set . There is no natural ordering of the set , and so a tuple indexed by also should not be thought of as an ordered list. Indeed, instead of speaking of a first, second, or third element of the tuple , it really only makes sense to speak of the -th, -th, and -th element of the tuple!  "
},
{
  "id": "d_index_family_sets",
  "level": "2",
  "url": "s_sets_tuples.html#d_index_family_sets",
  "type": "Definition",
  "number": "0.1.17",
  "title": "Indexed family of sets.",
  "body": " Indexed family of sets   An indexed family of sets is a tuple , where is a set for all indices .   "
},
{
  "id": "d_union_intersect_arbitrary",
  "level": "2",
  "url": "s_sets_tuples.html#d_union_intersect_arbitrary",
  "type": "Definition",
  "number": "0.1.18",
  "title": "Arbitrary unions and intersections.",
  "body": " Arbitrary unions and intersections   Let be a set, and let be a family of sets with for all .   The union of the , denoted , is defined as .    The intersection of the , denoted , is defined as .      "
},
{
  "id": "d_cartesian_product",
  "level": "2",
  "url": "s_sets_tuples.html#d_cartesian_product",
  "type": "Definition",
  "number": "0.1.19",
  "title": "Cartesian product.",
  "body": " Cartesian product  Cartesian product    Cartesian product of the sets    Let be a set, and let be a family of subsets with for all . The Cartesian product  of the is defined as . In other words, the Cartesian product is the set of all -valued tuples whose -th coordinate is an element of for all .  In the special case where we write and , and we call the -fold Cartesian product of .   "
},
{
  "id": "s_functions",
  "level": "1",
  "url": "s_functions.html",
  "type": "Section",
  "number": "0.2",
  "title": "Functions",
  "body": " Functions  Functions play an important role in our study of linear algebra. We remind you of this definition below and introduce some terminology and notation that may be new to you.   Definition and notation   Functions  function    a function from to    Let and be two sets. A function from to , denoted , is a rule which, given any input  , returns an output  . In this case we write and call the image of under , or the value of at  . Similarly, we say  maps (or sends ) the input to the output .  The set is called the domain of ; the set is called the codomain of .  When we wish to indicate what rule defines the function, we use the elaborated notation . This is read as The function with domain and codomain maps an input to the output . We will sometimes suppress the function name in this notation, writing simply to denote a function with domain and codomain .      Consider the function . This function has domain and codomain equal to and maps an integer to its square.     Arithmetic operations as functions   Our familiar arithmetic operations can be expressed as functions whose inputs are pairs of numbers. Using the notational conventions introduced in (with function names supressed), addition is the function , and multiplication is the function .     Invoking the notion of a rule in the definition of a function is admittedly somewhat vague. A more precise definition can be given using the Cartesian product. Namely, given sets and , we define a function to be a subset satisfying the following property: for all there is a unique element . The uniqueness of the pair then allows us to define the value of at as , denoted .   As with sets and tuples, we are obliged to specify what we mean for two functions to be equal. The definition below makes clear how the the domain and codomain, as well as the rule that takes inputs to outputs, are all essential ingredients of a function.   Function equality  function equality   Functions and are equal if   they have the same domain and codomain , and    for all , we have .         Function image, injections, surjections, bijections   Image of a set  function image of a set  function image    image of the set under     image of a function    Given a function and a subset , the image of under , denoted , is defined as . In other words, is the set of all outputs , where .  The image of , denoted , is the set of all outputs of : , .     Injective, surjective, bijective  invertible function  bijective function  injective function  surjective function  one-to-one function  onto function  one-to-one correspondence   Let be a function.   Injective  The function is injective (or one-to-one ) if for all , if , then : equivalently, if , then .    Surjective  The function is surjective (or onto ) if for all , there is an such that : equivalently, .    Bijective  The function is bijective (or a one-to-one correspondence ) if it is injective and surjective.        Role of domain and codomain in injectivity and surjectivity   Consider the following three functions . Although all three functions are defined using the same rule ( ), they are not equal thanks to their differing domains and\/or codomains. The choice of domain and codomain in these examples also plays a crucial role in determining whether the function is injective and\/or surjective. The function is neither injective ( ) nor surjective ( ); the function is injective but not surjective; the function is both injective and surjective, hence bijective.     Function composition  function composition    the composition of and    Suppose and are functions satisfying . The composition of and is the function defined as , for all .     Identity and inverse functions  function invertible  function inverse  function identity   For any set the identity function on is the function defined as for all .  A function is invertible if there is a function satisfying and : , . The function in this case is called the inverse of , denoted .     Invertible is equivalent to bijective   A function is invertible if and only if it is bijective.     The proof of this theorem is left as an example of proving if and only if statements. See .    "
},
{
  "id": "d_function",
  "level": "2",
  "url": "s_functions.html#d_function",
  "type": "Definition",
  "number": "0.2.1",
  "title": "Functions.",
  "body": " Functions  function    a function from to    Let and be two sets. A function from to , denoted , is a rule which, given any input  , returns an output  . In this case we write and call the image of under , or the value of at  . Similarly, we say  maps (or sends ) the input to the output .  The set is called the domain of ; the set is called the codomain of .  When we wish to indicate what rule defines the function, we use the elaborated notation . This is read as The function with domain and codomain maps an input to the output . We will sometimes suppress the function name in this notation, writing simply to denote a function with domain and codomain .   "
},
{
  "id": "ss_functions_definitions-3",
  "level": "2",
  "url": "s_functions.html#ss_functions_definitions-3",
  "type": "Example",
  "number": "0.2.2",
  "title": "",
  "body": "  Consider the function . This function has domain and codomain equal to and maps an integer to its square.   "
},
{
  "id": "eg_addition_mult_as_functions",
  "level": "2",
  "url": "s_functions.html#eg_addition_mult_as_functions",
  "type": "Example",
  "number": "0.2.3",
  "title": "Arithmetic operations as functions.",
  "body": " Arithmetic operations as functions   Our familiar arithmetic operations can be expressed as functions whose inputs are pairs of numbers. Using the notational conventions introduced in (with function names supressed), addition is the function , and multiplication is the function .   "
},
{
  "id": "rm_function_as_relation",
  "level": "2",
  "url": "s_functions.html#rm_function_as_relation",
  "type": "Remark",
  "number": "0.2.4",
  "title": "",
  "body": " Invoking the notion of a rule in the definition of a function is admittedly somewhat vague. A more precise definition can be given using the Cartesian product. Namely, given sets and , we define a function to be a subset satisfying the following property: for all there is a unique element . The uniqueness of the pair then allows us to define the value of at as , denoted .  "
},
{
  "id": "d_function_equality",
  "level": "2",
  "url": "s_functions.html#d_function_equality",
  "type": "Definition",
  "number": "0.2.5",
  "title": "Function equality.",
  "body": " Function equality  function equality   Functions and are equal if   they have the same domain and codomain , and    for all , we have .      "
},
{
  "id": "d_image",
  "level": "2",
  "url": "s_functions.html#d_image",
  "type": "Definition",
  "number": "0.2.6",
  "title": "Image of a set.",
  "body": " Image of a set  function image of a set  function image    image of the set under     image of a function    Given a function and a subset , the image of under , denoted , is defined as . In other words, is the set of all outputs , where .  The image of , denoted , is the set of all outputs of : , .   "
},
{
  "id": "d_injective_surjective_bijective",
  "level": "2",
  "url": "s_functions.html#d_injective_surjective_bijective",
  "type": "Definition",
  "number": "0.2.7",
  "title": "Injective, surjective, bijective.",
  "body": " Injective, surjective, bijective  invertible function  bijective function  injective function  surjective function  one-to-one function  onto function  one-to-one correspondence   Let be a function.   Injective  The function is injective (or one-to-one ) if for all , if , then : equivalently, if , then .    Surjective  The function is surjective (or onto ) if for all , there is an such that : equivalently, .    Bijective  The function is bijective (or a one-to-one correspondence ) if it is injective and surjective.      "
},
{
  "id": "ss_function_image_properties-4",
  "level": "2",
  "url": "s_functions.html#ss_function_image_properties-4",
  "type": "Example",
  "number": "0.2.8",
  "title": "Role of domain and codomain in injectivity and surjectivity.",
  "body": " Role of domain and codomain in injectivity and surjectivity   Consider the following three functions . Although all three functions are defined using the same rule ( ), they are not equal thanks to their differing domains and\/or codomains. The choice of domain and codomain in these examples also plays a crucial role in determining whether the function is injective and\/or surjective. The function is neither injective ( ) nor surjective ( ); the function is injective but not surjective; the function is both injective and surjective, hence bijective.   "
},
{
  "id": "d_function_composition",
  "level": "2",
  "url": "s_functions.html#d_function_composition",
  "type": "Definition",
  "number": "0.2.9",
  "title": "Function composition.",
  "body": " Function composition  function composition    the composition of and    Suppose and are functions satisfying . The composition of and is the function defined as , for all .   "
},
{
  "id": "d_invertible_function",
  "level": "2",
  "url": "s_functions.html#d_invertible_function",
  "type": "Definition",
  "number": "0.2.10",
  "title": "Identity and inverse functions.",
  "body": " Identity and inverse functions  function invertible  function inverse  function identity   For any set the identity function on is the function defined as for all .  A function is invertible if there is a function satisfying and : , . The function in this case is called the inverse of , denoted .   "
},
{
  "id": "th_invertible_bijective",
  "level": "2",
  "url": "s_functions.html#th_invertible_bijective",
  "type": "Theorem",
  "number": "0.2.11",
  "title": "Invertible is equivalent to bijective.",
  "body": " Invertible is equivalent to bijective   A function is invertible if and only if it is bijective.   "
},
{
  "id": "ss_function_image_properties-8",
  "level": "2",
  "url": "s_functions.html#ss_function_image_properties-8",
  "type": "Proof",
  "number": "0.2.2.1",
  "title": "",
  "body": " The proof of this theorem is left as an example of proving if and only if statements. See .  "
},
{
  "id": "s_logic",
  "level": "1",
  "url": "s_logic.html",
  "type": "Section",
  "number": "0.3",
  "title": "Logic",
  "body": " Logic   When dealing with mathematical statements and arguments, we must pay close attention to logical structure. This section introduces both logical connectors and quantifiers, and carefully describes how to determine the truth values of propositions built from these operations.    Propositional logic  A proposition is a sentence that is either true or false. We build compound propositions from component propositions using logical operators (or logical connectors ); the truth value of the compound proposition is defined as a function of the truth values of the component propositions.   Logical operators      Negation  Given a proposition , the negation of is the proposition Not , denoted in logical notation, the truth value of which is defined as follows: is true exactly when is false.    Conjunction (logical and)  Given propositions and , their conjuction is the proposition and , denoted in logical notation, the truth value of which is defined as follows: is true when both and are true, and false otherwise.    Disjunction (logical or)  Given propositions and , their disjunction is the proposition or , denoted in logical notation, the truth value of which is defined as follows: is true when at least one of and is true, and false otherwise.    Logical implication (if-then)  Given propositions and , the proposition If , then , denoted in logical notation, is called an implication , and its truth value is defined as follows: is false when is true and is false, and true otherwise.    Logical equivalence (if and only if)  Given propositions and , the proposition if and only if , denoted in logical notation, is called an equivalence , and its truth value is defined as follows: is true when and have the same truth value, and false otherwise. We say and are logically equivalent when is true.        A truth table of a compound proposition is a concise way of displaying how the truth value of depends on the truth values of its component propositions. It contains one row for each possible truth assignment of the component propositions. As illustration, we give the truth tables for the logical operators defined above:      Use a truth table to find all truth value assignments of and making the compound proposition false.    We construct a truth table with columns for , , , , and : . We conclude that is false exactly when is false and is true. (It follows that is equivalent to . )     Our definitions of the logical operators above are chosen to agree with their usage in a very particular type of discourse: namely, mathematical discourse. They do not always agree with their use in natural language: hence the modifier logical in their titles.  For example, disjunctions in natural language of the form or are often understood to be true when is true or is true, but not both . This notion of disjunction is called the exclusive or in logic, in contrast to the standard logical or.  Similarly, according to our definition, the implication If the President of the US is a dog, then the Vice President of the US is a cat is true, since the proposition The President of the US is a dog is false. (In logic we say the implication is vacuously true in this case.) However, working outside of our logical definitions of truth value, we may have been inclined to treat this implication as false, since both The President of the US is a dog and The Vice President of the US is a cat are false.     Predicate logic  Propositions like All humans are mortal and Every positive real number has a square-root are modeled in logic in the form For all , and For all , there exists an such that , where stands for the phrase is mortal and stands for the phrase is a square-root of . Observe that and on their own are not propositions; there is no truth value to is mortal or is a square-root of . Instead, we think of and as functions which return propositions when evaluated at a specific choice for , or for and . For example, evaluating at yields the proposition Aaron Greicius is mortal , which happens to be true at the time of writing. Similarly evaluating at yields the proposition is a square-root of 2 , which happens to be false. In logic and are called propositional functions (also called predicates ): functions whose outputs are propositions.  The propositions For all , and For all , there exists an such that are obtained from and by bounding them with a series of quantifiers ( , for all , there exists an ). The definition below allows us to assign truth values to such propositions.   Logical quantifiers   Let be a set, and let be a propositional function that assigns to all elements the proposition . The set is called the domain of discourse of .   Universal quantifier  The proposition For all in , , denoted in logical notation, is called a universal quantification , and its truth value is defined as follows: is true if for all elements of , the proposition is true; it is false if there is some such that is false.    Existential quantifier  The proposition There exists an in such that , denoted in logical notation, is called an existential quantification , and its truth value is defined as follows: is true if there is some element of for which the proposition is true; it is false if is false for all .        Truth depends on domain of discourse  Just as a function is not properly defined before its domain is specified, we do not have a well-defined propositional function, nor well-defined truth values of propositions built from this propositional function, until its domain of discourse is given.  For example, let be x>0 . If we declare , then the proposition is true, since by definition every is positive. On the other hand, if we declare , the proposition is false since not all elements of are positive: indeed, is negative, making false.  Because of the important role played by the domain of discourse , we sometimes include it in our quantifier expressions: , , . Using this convention allows us to see more immediately that is true and is false.    Modeling Every positive number has a square-root   Model the sentence Every positive real number has a square-root in the form , where is a propositional function with domain of discourse . Determine the truth value of using .    Fix our domain of discourse to be . For any , let be the proposition that is a square-root of . Define to be the propositional function . Thus for any , is the proposition that if is positive, then has a square-root. It follows that is the proposition that for all real numbers , if is positive, then has a square-root. This is clearly equivalent to the proposition that every positive real number has a square-root, as desired.  Lastly, we use to show is true. Take any . The real number is either positive or not positive. If is not positive, then is false and hence , which is the implication , is true vacuously. If is positive, then is true, and is true, since has a square-root in this case: namely, . But if is true and is true, then the implication is true. We have proved is true for all . Thus is true.     Order of quantifiers matters  As illustrates, we can take a propositional function in two variables and quantify one of the two variables to obtain a propositional function in one variable: , or . Proceeding in this manner we engender propositions involving sequences of quantifiers. Mark well that the order of the quantifiers in such sequences is important!  For example, letting be is a square-root of with domain of discourse . The proposition says that every positive real number has a positive square-root (true); the proposition says that there is a positive real number that is the square-root of all real numbers (false).  In general to unpack a sequence of quantifiers we start from the leftmost quantifier and proceed to the right.    Negating quantifiers  Let be a propositional function with domain of discourse . According to a universal quantification is false if it is not the case that is true for all for all ; that is, if there is some such that is false. Letting be the propositional function defined as for all , we see that is false if and only if is true. This proves the equivalence . Similarly, we have . These equivalences can be understood as rules of negating quantifier statements. They can be summarized as follow: swap quantifiers and negate the predicate.    The example below taken from calculus nicely illustrates how to negate a proposition that involves a sequence of quantifiers.   The limit does not exist   Let be a function with domain , and let be a point of this domain. By definition, the proposition that exists is equivalent to the following proposition: . (We made a number of shortcuts in our logical notation above (  , ) in order to simplify the expression somewhat; the intended meaning should still be clear. )  Use the negation rules described in to derive a similar proposition equivalent to the statement that do not exist.    Let be the proposition in . Using the negation rules in series, we derive the chain of equivalences below (see ). We've added parentheses to emphasize what is being negated at each step. Note how a quantifiers are swapped each time we pass the negation to the right. . (The last link in our chain uses the fact that is equivalent to , as a truth table easily shows.) Translating back into English, we conclude that the limit not existing ( ) is equivalent to the following: for every there is an such that for all there exists an satisfying and . Quite a mouthful!     "
},
{
  "id": "d_logical_ops",
  "level": "2",
  "url": "s_logic.html#d_logical_ops",
  "type": "Definition",
  "number": "0.3.1",
  "title": "Logical operators.",
  "body": " Logical operators      Negation  Given a proposition , the negation of is the proposition Not , denoted in logical notation, the truth value of which is defined as follows: is true exactly when is false.    Conjunction (logical and)  Given propositions and , their conjuction is the proposition and , denoted in logical notation, the truth value of which is defined as follows: is true when both and are true, and false otherwise.    Disjunction (logical or)  Given propositions and , their disjunction is the proposition or , denoted in logical notation, the truth value of which is defined as follows: is true when at least one of and is true, and false otherwise.    Logical implication (if-then)  Given propositions and , the proposition If , then , denoted in logical notation, is called an implication , and its truth value is defined as follows: is false when is true and is false, and true otherwise.    Logical equivalence (if and only if)  Given propositions and , the proposition if and only if , denoted in logical notation, is called an equivalence , and its truth value is defined as follows: is true when and have the same truth value, and false otherwise. We say and are logically equivalent when is true.      "
},
{
  "id": "rm_truth_tables",
  "level": "2",
  "url": "s_logic.html#rm_truth_tables",
  "type": "Remark",
  "number": "0.3.2",
  "title": "",
  "body": " A truth table of a compound proposition is a concise way of displaying how the truth value of depends on the truth values of its component propositions. It contains one row for each possible truth assignment of the component propositions. As illustration, we give the truth tables for the logical operators defined above:   "
},
{
  "id": "ss_propositional_calculus-5",
  "level": "2",
  "url": "s_logic.html#ss_propositional_calculus-5",
  "type": "Example",
  "number": "0.3.3",
  "title": "",
  "body": "  Use a truth table to find all truth value assignments of and making the compound proposition false.    We construct a truth table with columns for , , , , and : . We conclude that is false exactly when is false and is true. (It follows that is equivalent to . )   "
},
{
  "id": "rm_logic_vs_vernacular",
  "level": "2",
  "url": "s_logic.html#rm_logic_vs_vernacular",
  "type": "Remark",
  "number": "0.3.4",
  "title": "",
  "body": " Our definitions of the logical operators above are chosen to agree with their usage in a very particular type of discourse: namely, mathematical discourse. They do not always agree with their use in natural language: hence the modifier logical in their titles.  For example, disjunctions in natural language of the form or are often understood to be true when is true or is true, but not both . This notion of disjunction is called the exclusive or in logic, in contrast to the standard logical or.  Similarly, according to our definition, the implication If the President of the US is a dog, then the Vice President of the US is a cat is true, since the proposition The President of the US is a dog is false. (In logic we say the implication is vacuously true in this case.) However, working outside of our logical definitions of truth value, we may have been inclined to treat this implication as false, since both The President of the US is a dog and The Vice President of the US is a cat are false.  "
},
{
  "id": "d_quantifiers",
  "level": "2",
  "url": "s_logic.html#d_quantifiers",
  "type": "Definition",
  "number": "0.3.5",
  "title": "Logical quantifiers.",
  "body": " Logical quantifiers   Let be a set, and let be a propositional function that assigns to all elements the proposition . The set is called the domain of discourse of .   Universal quantifier  The proposition For all in , , denoted in logical notation, is called a universal quantification , and its truth value is defined as follows: is true if for all elements of , the proposition is true; it is false if there is some such that is false.    Existential quantifier  The proposition There exists an in such that , denoted in logical notation, is called an existential quantification , and its truth value is defined as follows: is true if there is some element of for which the proposition is true; it is false if is false for all .      "
},
{
  "id": "rm_domain_discourse",
  "level": "2",
  "url": "s_logic.html#rm_domain_discourse",
  "type": "Remark",
  "number": "0.3.6",
  "title": "Truth depends on domain of discourse.",
  "body": " Truth depends on domain of discourse  Just as a function is not properly defined before its domain is specified, we do not have a well-defined propositional function, nor well-defined truth values of propositions built from this propositional function, until its domain of discourse is given.  For example, let be x>0 . If we declare , then the proposition is true, since by definition every is positive. On the other hand, if we declare , the proposition is false since not all elements of are positive: indeed, is negative, making false.  Because of the important role played by the domain of discourse , we sometimes include it in our quantifier expressions: , , . Using this convention allows us to see more immediately that is true and is false.  "
},
{
  "id": "ex_model_quant",
  "level": "2",
  "url": "s_logic.html#ex_model_quant",
  "type": "Example",
  "number": "0.3.7",
  "title": "Modeling “Every positive number has a square-root”.",
  "body": " Modeling Every positive number has a square-root   Model the sentence Every positive real number has a square-root in the form , where is a propositional function with domain of discourse . Determine the truth value of using .    Fix our domain of discourse to be . For any , let be the proposition that is a square-root of . Define to be the propositional function . Thus for any , is the proposition that if is positive, then has a square-root. It follows that is the proposition that for all real numbers , if is positive, then has a square-root. This is clearly equivalent to the proposition that every positive real number has a square-root, as desired.  Lastly, we use to show is true. Take any . The real number is either positive or not positive. If is not positive, then is false and hence , which is the implication , is true vacuously. If is positive, then is true, and is true, since has a square-root in this case: namely, . But if is true and is true, then the implication is true. We have proved is true for all . Thus is true.   "
},
{
  "id": "warning_order_quantifiers",
  "level": "2",
  "url": "s_logic.html#warning_order_quantifiers",
  "type": "Warning",
  "number": "0.3.8",
  "title": "Order of quantifiers matters.",
  "body": " Order of quantifiers matters  As illustrates, we can take a propositional function in two variables and quantify one of the two variables to obtain a propositional function in one variable: , or . Proceeding in this manner we engender propositions involving sequences of quantifiers. Mark well that the order of the quantifiers in such sequences is important!  For example, letting be is a square-root of with domain of discourse . The proposition says that every positive real number has a positive square-root (true); the proposition says that there is a positive real number that is the square-root of all real numbers (false).  In general to unpack a sequence of quantifiers we start from the leftmost quantifier and proceed to the right.  "
},
{
  "id": "rm_negating_quantifiers",
  "level": "2",
  "url": "s_logic.html#rm_negating_quantifiers",
  "type": "Remark",
  "number": "0.3.9",
  "title": "Negating quantifiers.",
  "body": " Negating quantifiers  Let be a propositional function with domain of discourse . According to a universal quantification is false if it is not the case that is true for all for all ; that is, if there is some such that is false. Letting be the propositional function defined as for all , we see that is false if and only if is true. This proves the equivalence . Similarly, we have . These equivalences can be understood as rules of negating quantifier statements. They can be summarized as follow: swap quantifiers and negate the predicate.   "
},
{
  "id": "ex_limit_doesnt_exist",
  "level": "2",
  "url": "s_logic.html#ex_limit_doesnt_exist",
  "type": "Example",
  "number": "0.3.10",
  "title": "The limit does not exist.",
  "body": " The limit does not exist   Let be a function with domain , and let be a point of this domain. By definition, the proposition that exists is equivalent to the following proposition: . (We made a number of shortcuts in our logical notation above (  , ) in order to simplify the expression somewhat; the intended meaning should still be clear. )  Use the negation rules described in to derive a similar proposition equivalent to the statement that do not exist.    Let be the proposition in . Using the negation rules in series, we derive the chain of equivalences below (see ). We've added parentheses to emphasize what is being negated at each step. Note how a quantifiers are swapped each time we pass the negation to the right. . (The last link in our chain uses the fact that is equivalent to , as a truth table easily shows.) Translating back into English, we conclude that the limit not existing ( ) is equivalent to the following: for every there is an such that for all there exists an satisfying and . Quite a mouthful!   "
},
{
  "id": "s_proof_technique",
  "level": "1",
  "url": "s_proof_technique.html",
  "type": "Section",
  "number": "0.4",
  "title": "Proof techniques",
  "body": " Proof techniques  Proof writing is an art, a technical skill you will hone and refine throughout your career; and like any art, proof writing has many tricks of the trade. We gather a few here in the form of a collection of general proof techniques. Part of mastering these techniques involves understanding the circumstances where they can be of use. When selecting a technique, we are guided in part by the logical structure and particular mathematical content of the proposition under consideration. The proof techniques below are organized under this guiding principle.   Logical structure   Implication  By the only time an implication is false is when is true and is false. Accordingly, the direct approach to proving an implication is to assume is true, and use this assumption to prove is true.  A common indirect approach used to prove an implication is to prove its contrapositive  , which is logically equivalent to the original implication. In this case we assume is not true, and show is not true. (Exercise: use a truth table to show the contrapositive is logically equivalent to the original implication.)    The converse of an implication is the implication ; the inverse of is the implication . Neither the converse nor the inverse is equivalent to the original implication, and thus neither of these can be used to give an indirect proof of . (Exercise: use a truth table to show that neither the converse nor the inverse implication is logically equivalent to the original implication. )      Disjunction  Again, using , to directly show a disjunction is true, we need only show one the two component propositions is true.  Alternatively, we can prove either of the implications or , both of which are logically equivalent to . (Exercise: use a truth table to show these three propositions are indeed equivalent!)    Equivalence  The equivalence is logically equivalent to the conjunction . Accordingly, the standard way of proving is to prove the two implications and separately. (Exercise: use a truth table to show these propositions are indeed equivalent!)    Chains of implications\/equivalences  The relation implies is transitive: , if and , then . Similarly, the relation is equivalent to is transitive. This allows us to prove an implication or equivalence via a chain of implications or chain of equivalences . When writing up a proof using this technique, use a vertically aligned format like the example below, treating one implication or equivalence per line, and adding a brief justification to the right: . It is also possible to build an argument as a hybrid chain of equivalences and implications. In this case the chain is only as strong as its weakest link. For example, a chain of the form only shows that . Indeed, we will have if and only if the intervening implication is in fact an equivalence ( , the arrow goes both ways).    It is often tempting, for the sake of space, to try and prove an equivalence via a chain of equivalences, as opposed to showing and separately. When proceeding in this manner, make doubly sure that each is indeed an equivalence: , that the implication arrow really goes both ways at each step. Even if each step in your chain truly is an equivalence, you should consider whether this will be obvious to your reader.    The example below provides the proof that a function is invertible if and only if it is bijective ( ). The proof nicely illustrates some of the different techniques used for proving implications and equivalences. Additionally, it is a nice example of how to separate out cases of the argument into clearly distinguished steps.   Proof: invertible is equivalent to bijective   Let be a function. Prove: is invertible if and only if is bijective.    Let be the proposition that is invertible, and let be the proposition that is bijective. We prove the equivalence by proving the two implications and .   Proof of  We must show that if is invertible, then is bijective. Assume is invertible. Then has an inverse . We show separately that is injective and surjective, hence bijective.   is injective  We show via a chain of implications: .    is surjective  Let be an element of . We must show that there is an such that . Letting , we have .     Proof of  We must show that if is bijective, then is invertible. Assume is bijective. First we define a function as follows: for all , let be the unique element such that . Note that our definition of uses both that is surjective (there is some element such that )) and injective (there is exactly one element such that ).  We now prove that is the inverse of , showing and separately.    Take any and let . By definition of , we have and hence . This proves .     Take any . By definition of , is the unique such that . Thus . This proves .        Proof by contradiction  The technique of proof by contradiction (or reductio ad absurdum ) proves a proposition by (a) assuming the negation is true, and then (b) using this assumption to derive a proposition known to be false. The choice of falsehood is completely up to the person providing the proof. However, in order for the proof to be convincing, it should be clear, either logically or because of theory assumed to be known, that is indeed false.   Proof by contradiction   Prove by contradiction that has no multiplicative inverse in the reals: , there is no such that .    We prove the claim by contradiction. Assume there is an such that . Since for any (a property of multiplication by 0), we have : a contradiction since . We conclude that there is no such that .      Proof by contradiction resembles, but is not quite the same thing as proving an implication via its contrapositive. Letting denote an arbitrary falsehood (the described above) what we do in a proof by contradiction is show that the implication is true. Since is false, and the implication is true, must be false: equivalently, must be true.       Equalities   Equality is not as simple as it may seem. In general an equality is a mathematical statement of the form . Here LHS and RHS stand for left- and right-hand side, respectively. What exactly such an equality means depends very much on what kind of mathematical objects the two sides of the equation are: , numbers, sets, functions, etc. Below we discuss equality for objects of a particular type in detail. (See and .) In all settings, the notion of equality will be transitive : , if and , then . We use transitivity implicitly when proving an equality via a chain of equalities as described below.    Chain of equalities Often to prove an equality as in we proceed in a sequence of intervening bite-size equalities, each of which is easy for the reader to digest. As with chains of implications\/equivalences, we present such an argument in a vertically aligned format, with brief justifications to the right: .  Never attempt to prove an equality by starting off with the equality you wish to prove, and then deduce a series of further equalities ending in some inanity: , . What this suggests is that you are in fact proving an implication: namely, if the desired equality is true, then  . Clearly this is not what we set out to prove! This type of fallacious argument is called begging the question ( petitio princippii in Latin), as we assume that which was to be proven.      Basic set properties   Set inclusion  Let and be sets. By , to prove we must show that for all elements we have . This requires proving the implication above for a general element , and we may use any of the techniques described in and to do so.    Set equality  Let and be sets. To prove directly using we must show that for all elements we have . To prove this universal equivalence, we must give an argument for the equivalence that holds for a general element .  Alternatively, you can prove by proving the two set inclusions and separately. This is equivalent to proving the two implications and separately.     Basic function properties   Function equality  According to , in order to show functions and are equal we must   show that and have the same domain and codomain , and    show that for all .   The universal quantifier for all of item (ii) gives this subtask the feel of proving an identity : we must show that equality holds for all  . By the same token, to show (ii) does not hold, it suffices to show that for some .    Injective, surjective, bijective  Let be a function.   Injectivity  To show is injective, we must show that the implication holds for all . Frequently it will be convenient to prove the (universal) contrapositive: for all .  Similarly, to show is not injective, we simply have to find satisfying and .    Surjectivity  To prove is surjective, we must prove the universal quantification: . To prove is not surjective, we must prove the negation of this proposition ( ): , there exists a for which there is no with .    Bijectivity  To show is bijective directly using , we must show that is injective and surjective. This is equivalent to showing that for there exists a unique element such that .  Alternatively, using we can show that is bijective by providing an inverse function .      mathematical induction  Mathematical induction    Mathematical induction is a technique for proving universal quantifications of the form , where is a fixed starting integer, called the base , and is a predicate defined on the integers. If the setting makes clear that ranges over integers, we write such propositions using logical notation as .    mathematical induction weak induction  Proof by induction  Suppose is a predicate of integers. To prove the proposition by induction (sometimes called weak induction ), we proceed in two steps.   Base step  Show that is true.    Induction step  Prove the universal implication . In practice, if proving the implication directly, this means we assume is true (the induction hypothesis ), and use this assumption to show is true.    Step 0 of induction   When meeting a proposition in the wild that we wish to prove by induction, you should first take care to model the proposition in the form . Make explicit the predicate in question, as well as the base case . We illustrate this preparatory Step 0 in the examples below.     Weak induction   Prove the identity for all . Recall: .    We prove the proposition by induction.   Step 0: preparation  The proposition is modeled logically as , where is the proposition that .    Base step:  The proposition is the statement that , which is true since .    Induction step  We must show the universal implication . Let , and assume is true: , The proposition states that . We prove this, assuming , via a chain of equalities: , as desired.   Having completed our base and induction steps, our proof is now finished.    So why does proof by induction work? In other words, why is it a valid proof technique? Imagine our propositions as forming an infinite ladder that we wish to ascend. Cautious climbers that we are, we only will step on a rung if we know the corresponding proposition is true. Knowing is true (the base step) allows us to step onto the first rung. The universal implication (induction step) gives us a rule that says if rung is secure (i.e., true), then so is rung . Since this rule holds for all rungs (i.e., for all ), we can safely ascend the entire ladder!  Mathematical induction as ladder of propositions  Mathematical induction as ladder of propositions          mathematical induction strong induction  Proof by strong induction  Suppose is a predicate of integers. To prove the proposition by strong induction , we proceed in two steps.   Base step:  Show that is true.    Strong induction step  Prove the universal implication . This technique is called strong induction, as now the induction hypothesis is much stronger: to prove this implication directly we assume is true for all (not just as in weak induction), and use this assumption to show is true.   In fact, strong induction is, logically speaking, no stronger than weak induction. Both techniques apply to propositions of the form , and you are free to choose which form of induction to use each time. We typically use strong induction out of convenience, when the nature of the predicate is such that we can prove most elegantly by assuming , as opposed to just . The following example is characteristic in this regard.   Strong induction   Prove that every integer can be written as a product of primes.    We prove the statement by induction.   Step 0: preparation  The proposition is modeled logically as , where is the proposition that is a product of primes.    Base step:  The proposition asserts that is a product of primes. This is true since is itself prime, hence a product of one prime number.    Strong induction step  We must show the universal implication . Let , and assume is true for all : , for all such we assume can be written as a product of primes. We use this assumption to prove : , that is a product of primes. We proceed in two cases, depending on whether is itself prime.   Case 1: is prime  If is prime, then it is trivially a product of one prime number, just as with the base case.    Case2 : is not prime  If is not prime, then we can factor nontrivially as . Here nontrivially means that we have . Using the strong induction hypothesis, we may assume that and are both products of primes: , we have , where and are prime for all and . It follows that , and hence that is also a product of primes, as desired.    Having completed the base and induction steps, our proof by induction is now finished.      "
},
{
  "id": "sss_implication-4",
  "level": "2",
  "url": "s_proof_technique.html#sss_implication-4",
  "type": "Warning",
  "number": "0.4.1",
  "title": "",
  "body": "  The converse of an implication is the implication ; the inverse of is the implication . Neither the converse nor the inverse is equivalent to the original implication, and thus neither of these can be used to give an indirect proof of . (Exercise: use a truth table to show that neither the converse nor the inverse implication is logically equivalent to the original implication. )   "
},
{
  "id": "sss_logical_chains-3",
  "level": "2",
  "url": "s_proof_technique.html#sss_logical_chains-3",
  "type": "Warning",
  "number": "0.4.2",
  "title": "",
  "body": "  It is often tempting, for the sake of space, to try and prove an equivalence via a chain of equivalences, as opposed to showing and separately. When proceeding in this manner, make doubly sure that each is indeed an equivalence: , that the implication arrow really goes both ways at each step. Even if each step in your chain truly is an equivalence, you should consider whether this will be obvious to your reader.   "
},
{
  "id": "ex_invertible_bijective",
  "level": "2",
  "url": "s_proof_technique.html#ex_invertible_bijective",
  "type": "Example",
  "number": "0.4.3",
  "title": "Proof: invertible is equivalent to bijective.",
  "body": " Proof: invertible is equivalent to bijective   Let be a function. Prove: is invertible if and only if is bijective.    Let be the proposition that is invertible, and let be the proposition that is bijective. We prove the equivalence by proving the two implications and .   Proof of  We must show that if is invertible, then is bijective. Assume is invertible. Then has an inverse . We show separately that is injective and surjective, hence bijective.   is injective  We show via a chain of implications: .    is surjective  Let be an element of . We must show that there is an such that . Letting , we have .     Proof of  We must show that if is bijective, then is invertible. Assume is bijective. First we define a function as follows: for all , let be the unique element such that . Note that our definition of uses both that is surjective (there is some element such that )) and injective (there is exactly one element such that ).  We now prove that is the inverse of , showing and separately.    Take any and let . By definition of , we have and hence . This proves .     Take any . By definition of , is the unique such that . Thus . This proves .     "
},
{
  "id": "ex_proof_by_contradiction",
  "level": "2",
  "url": "s_proof_technique.html#ex_proof_by_contradiction",
  "type": "Example",
  "number": "0.4.4",
  "title": "Proof by contradiction.",
  "body": " Proof by contradiction   Prove by contradiction that has no multiplicative inverse in the reals: , there is no such that .    We prove the claim by contradiction. Assume there is an such that . Since for any (a property of multiplication by 0), we have : a contradiction since . We conclude that there is no such that .   "
},
{
  "id": "rm_proof_by_contradiction",
  "level": "2",
  "url": "s_proof_technique.html#rm_proof_by_contradiction",
  "type": "Remark",
  "number": "0.4.5",
  "title": "",
  "body": "  Proof by contradiction resembles, but is not quite the same thing as proving an implication via its contrapositive. Letting denote an arbitrary falsehood (the described above) what we do in a proof by contradiction is show that the implication is true. Since is false, and the implication is true, must be false: equivalently, must be true.   "
},
{
  "id": "sss_chain_equalities-4",
  "level": "2",
  "url": "s_proof_technique.html#sss_chain_equalities-4",
  "type": "Warning",
  "number": "0.4.6",
  "title": "",
  "body": " Never attempt to prove an equality by starting off with the equality you wish to prove, and then deduce a series of further equalities ending in some inanity: , . What this suggests is that you are in fact proving an implication: namely, if the desired equality is true, then  . Clearly this is not what we set out to prove! This type of fallacious argument is called begging the question ( petitio princippii in Latin), as we assume that which was to be proven.  "
},
{
  "id": "ss_mathematical_induction-3-1",
  "level": "2",
  "url": "s_proof_technique.html#ss_mathematical_induction-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "base "
},
{
  "id": "sss_weak_induction-3",
  "level": "2",
  "url": "s_proof_technique.html#sss_weak_induction-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "induction weak induction "
},
{
  "id": "sss_weak_induction-5-2",
  "level": "2",
  "url": "s_proof_technique.html#sss_weak_induction-5-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "induction hypothesis "
},
{
  "id": "rm_induction",
  "level": "2",
  "url": "s_proof_technique.html#rm_induction",
  "type": "Remark",
  "number": "0.4.7",
  "title": "“Step 0” of induction.",
  "body": " Step 0 of induction   When meeting a proposition in the wild that we wish to prove by induction, you should first take care to model the proposition in the form . Make explicit the predicate in question, as well as the base case . We illustrate this preparatory Step 0 in the examples below.   "
},
{
  "id": "eg_weak_induction",
  "level": "2",
  "url": "s_proof_technique.html#eg_weak_induction",
  "type": "Example",
  "number": "0.4.8",
  "title": "Weak induction.",
  "body": " Weak induction   Prove the identity for all . Recall: .    We prove the proposition by induction.   Step 0: preparation  The proposition is modeled logically as , where is the proposition that .    Base step:  The proposition is the statement that , which is true since .    Induction step  We must show the universal implication . Let , and assume is true: , The proposition states that . We prove this, assuming , via a chain of equalities: , as desired.   Having completed our base and induction steps, our proof is now finished.   "
},
{
  "id": "fig_proof_induction",
  "level": "2",
  "url": "s_proof_technique.html#fig_proof_induction",
  "type": "Figure",
  "number": "0.4.9",
  "title": "Mathematical induction as ladder of propositions",
  "body": " Mathematical induction as ladder of propositions  Mathematical induction as ladder of propositions     "
},
{
  "id": "sss_strong_induction-3",
  "level": "2",
  "url": "s_proof_technique.html#sss_strong_induction-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "strong induction "
},
{
  "id": "eg_strong_induction",
  "level": "2",
  "url": "s_proof_technique.html#eg_strong_induction",
  "type": "Example",
  "number": "0.4.10",
  "title": "Strong induction.",
  "body": " Strong induction   Prove that every integer can be written as a product of primes.    We prove the statement by induction.   Step 0: preparation  The proposition is modeled logically as , where is the proposition that is a product of primes.    Base step:  The proposition asserts that is a product of primes. This is true since is itself prime, hence a product of one prime number.    Strong induction step  We must show the universal implication . Let , and assume is true for all : , for all such we assume can be written as a product of primes. We use this assumption to prove : , that is a product of primes. We proceed in two cases, depending on whether is itself prime.   Case 1: is prime  If is prime, then it is trivially a product of one prime number, just as with the base case.    Case2 : is not prime  If is not prime, then we can factor nontrivially as . Here nontrivially means that we have . Using the strong induction hypothesis, we may assume that and are both products of primes: , we have , where and are prime for all and . It follows that , and hence that is also a product of primes, as desired.    Having completed the base and induction steps, our proof by induction is now finished.   "
},
{
  "id": "s_natural_numbers",
  "level": "1",
  "url": "s_natural_numbers.html",
  "type": "Section",
  "number": "1.1",
  "title": "Natural numbers: Peano axioms",
  "body": " Natural numbers: Peano axioms   Peano Axioms   There is a set satisfying the following properties.   There is a function defined on called the successor function .    There is an element such that for all .    The successor function is injective: i.e., for all , if , then . Using logical shorthand, this means , or equivalently, for all .    Induction principle  If is a subset of satisfying    , and    for all , if , then ,   then .           Once we have a set satisfying the properties of , called the Peano axioms , we can recognize our old friend by introducing the notation for all , and adding some additional names of elements resulting from successive application of starting with : , . Next with the help of the induction principle, we can define not just a successor function, but further a full-blown addition operation . We will not do this in detail, as it a tad technical (involving a further recursive principle ), but roughly speaking is defined as applying the successor function times to : , . At this point we are well on our way to reconstructing the usual arithmetic on ; we can give a similar type of definition for the multiplication operation . Next we can construct as     Let , and let be a subset of . If satisfies    , and    for all , if , then ,   then .    The fourth property of directly gives rise to a proof technique for showing that a given subset of is actually all of : namely, show that (i) , and (ii) show that for all , if , then . As stated, this is a proof technique for showing an equality of sets ( ). It is useful, however to give an equivalent formulation of this principle that yields a technique for proving a technique for proving universal quantifications of the form , where is a fixed starting integer, called the base , and is a predicate defined on the integers. Using logical shorthand, we seek a proof technique for showing that propositions of the form . The technique in question is called proof by induction .   Proof by induction   Let be an integer, and let be a predicate defined on all integers . To prove the proposition , proceed as follows.   Base step  Prove that is true.    Induction step  Prove that for all integers , if is true, then is true. Using logical: prove the proposition .        Induction: sum of first integers   Prove the identity for all . Recall: .    We prove the proposition by induction.   Step 0: preparation  The proposition is modeled logically as , where is the proposition that .    Base step:  The proposition is the statement that , which is true since .    Induction step  We must show the universal implication . Let , and assume is true: , The proposition states that . We prove this, assuming , via a chain of equalities: , as desired.   Having completed our base and induction steps, our proof is now finished.     Proof by strong induction   Let be an integer, and let be a predicate defined on all integers . To prove the proposition , proceed as follows.   Base step  Prove that is true.    Strong induction step  Prove that for all integers , if is true for all integers , then is true. Using logical: prove the proposition .        Well-ordering princple   Let be an integer. Given any nonempty subset of , has a least element: , there is an element such that for all .    This is left as a homework exercise.    "
},
{
  "id": "th_peano",
  "level": "2",
  "url": "s_natural_numbers.html#th_peano",
  "type": "Theorem",
  "number": "1.1.1",
  "title": "Peano Axioms.",
  "body": " Peano Axioms   There is a set satisfying the following properties.   There is a function defined on called the successor function .    There is an element such that for all .    The successor function is injective: i.e., for all , if , then . Using logical shorthand, this means , or equivalently, for all .    Induction principle  If is a subset of satisfying    , and    for all , if , then ,   then .          "
},
{
  "id": "s_natural_numbers-3",
  "level": "2",
  "url": "s_natural_numbers.html#s_natural_numbers-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Peano axioms "
},
{
  "id": "cor_generalized_induction",
  "level": "2",
  "url": "s_natural_numbers.html#cor_generalized_induction",
  "type": "Corollary",
  "number": "1.1.2",
  "title": "",
  "body": "  Let , and let be a subset of . If satisfies    , and    for all , if , then ,   then .   "
},
{
  "id": "s_natural_numbers-5",
  "level": "2",
  "url": "s_natural_numbers.html#s_natural_numbers-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "base proof by induction "
},
{
  "id": "proof_by_induction",
  "level": "2",
  "url": "s_natural_numbers.html#proof_by_induction",
  "type": "Procedure",
  "number": "1.1.3",
  "title": "Proof by induction.",
  "body": " Proof by induction   Let be an integer, and let be a predicate defined on all integers . To prove the proposition , proceed as follows.   Base step  Prove that is true.    Induction step  Prove that for all integers , if is true, then is true. Using logical: prove the proposition .      "
},
{
  "id": "eg_induction_sum_of_integers",
  "level": "2",
  "url": "s_natural_numbers.html#eg_induction_sum_of_integers",
  "type": "Example",
  "number": "1.1.4",
  "title": "Induction: sum of first <span class=\"process-math\">\\(n\\)<\/span> integers.",
  "body": " Induction: sum of first integers   Prove the identity for all . Recall: .    We prove the proposition by induction.   Step 0: preparation  The proposition is modeled logically as , where is the proposition that .    Base step:  The proposition is the statement that , which is true since .    Induction step  We must show the universal implication . Let , and assume is true: , The proposition states that . We prove this, assuming , via a chain of equalities: , as desired.   Having completed our base and induction steps, our proof is now finished.   "
},
{
  "id": "proof_by_strong_induction",
  "level": "2",
  "url": "s_natural_numbers.html#proof_by_strong_induction",
  "type": "Procedure",
  "number": "1.1.5",
  "title": "Proof by strong induction.",
  "body": " Proof by strong induction   Let be an integer, and let be a predicate defined on all integers . To prove the proposition , proceed as follows.   Base step  Prove that is true.    Strong induction step  Prove that for all integers , if is true for all integers , then is true. Using logical: prove the proposition .      "
},
{
  "id": "th_well-ordering",
  "level": "2",
  "url": "s_natural_numbers.html#th_well-ordering",
  "type": "Theorem",
  "number": "1.1.6",
  "title": "Well-ordering princple.",
  "body": " Well-ordering princple   Let be an integer. Given any nonempty subset of , has a least element: , there is an element such that for all .    This is left as a homework exercise.   "
},
{
  "id": "s_reals_integers_rationals",
  "level": "1",
  "url": "s_reals_integers_rationals.html",
  "type": "Section",
  "number": "1.2",
  "title": "Reals, rationals, fields",
  "body": " Reals, rationals, fields   Real numbers  Having established the existence of the natural numbers and integers with a reasonable degree of rigor, we now move on to build larger number systems. We will proceed somewhat nonlinearly, beginning with the real numbers and then defining the rational numbers as a subset of . In so doing, we are acting in blatant disregard of the fact that the standard constructions build the reals out of the rationals . Those constructions are landmark results in the history of mathematics, and it might come as a surprise that mathematicians didn't hit upon a rigorous construction of until the 19th century. The tools and concepts involved in these constructions, however, are properly the domain of real analysis, and as such, we do not tackle that task until the first quarter of our Math 320 or Math 321 sequence. Instead, we state without proof an existence theorem of that articulates some (but not all) key properties of this number system, as well as its relation to .   Real numbers   There is a set satisfying the following properties.    contains the integers as a subset: , .    Field  The addition and multiplication operations of extend to addition and multiplication operations on satisfying the field axioms of .    Ordered field  The the less than relation of the integers extends to a relation on satisfying the following properties.   For all , if , then .    For all and with , if , then .       Archimedean property  For all real numbers , there is a natural number such that .        Ordered archimedean field  The stated properties of establishes as an ordered archimedean field . It turns out that these properties alone are not enough to uniquely characterize . Indeed, it is easy to see that the rationals also satisfy these properties. However, it turns out that we can pin down uniquely with one additional property: the least upper bound property . We state it here for your reference, but again, this topic is really the domain of a real analysis course.   Least upper bound property  Given any nonempty subset , if has an upper bound in ( , there is a real number such that for all ), then has a least upper bound in ( , there is a real number such that is an upper bound for , and if is any other upper bound for , then ).   It is the existence of least upper bounds, as defined above, that make a much richer number system containing then say . For example, taking the set , it is easy to see that has an upper bound ( , ), and thus that there is a real number that is a least upper bound. You can then show that we must have , and hence that is a square root of .   The following corollary of the archimedean property follows from the induction principle of (or equivalently, the well-ordered property).   Archimedean principle   For any real number , there is a unique integer such that .    This is left as a homework exercise.     Floor function   Given , we denote by the unique integer satisfying . The function is called the floor function .      Fields   Field   A field is a set together with two operations called addition and multiplication respectively, satisfying the following axioms.   Commutativity  For all we have .    Associativity  For all we have .    Distributivity  For all we have .    Additive identity  There is an element satisfying for all . The element is called the additive identity .    Additive inverse  For all there is an element satisfying . The element is called the additive inverse of .    Multiplicative identity  There is an element satisfying for all . The element is called the multiplicative identity .    Multiplicative inverse  For all nonzero elements (i.e., ) there is an element satisfying . The element , also denoted , is called the multiplicative inverse of .        Anatomy lesson: function and Cartesian product notation  The expressions used in use a combination of function notation (see ) and Cartesian product notation (see ). Let's break it down.  Firstly, in general, given sets and , the set , called the Cartesian product of and , is defined as the set of all pairs , where and : , . Next, the notation denotes a function named whose domain is the set and whose codomain is the set . When we want to give more information about how the function is evaluated on inputs, we include a separate line below using the mapsto symbol : . Putting the two notations together, the expression denotes a function that takes as input a pair of elements , where and , and returns as output an element .    Arithmetic and existential axioms  We will call Axioms (i)-(iii) the arithmetic axioms , as they stipulate that our operations satisfy some familiar properties from arithmetic. Additionally, we will call Axioms (iv)-(vii) the existential axioms as they posit the existence of certain special elements inside the underlying set of the field: namely, special elements denoted and satisfying Axioms (iv) and (vi), for each element a special associated element satisfying Axiom (v), and for each nonzero element a special associated element satisfying Axiom (vii).    Names and prejudices  We use familiar looking notation to describe the special elements of a field ( , ), but keep in mind that these are just names for certain special elements satisfying various axioms in .  When verifying whether a given set with given operations and is a field, we make no assumptions beforehand as to which elements of serve as these special elements. It is up to us to identify these special elements and verify that they satisfy the relevant axioms. As such, it is important each time we are confronted with a new potential field, that we come with no prejudices as to which elements serve as additive\/multiplicate identities\/inverses; these roles depend on how the operations themselves are defined. is a nice illustration of this approach.   From the two field operations of addition and multiplication, along with the field axioms, we can define some simple additional operations like substraction, division, and integer exponentiation.   Subtraction, division, integer powers   Let be a field.   Subtraction  Given elements , we define their difference  as .    Division  Given elements with , we define their quotient  as .    Integer powers  Given any , we define and where is any positive integer.  Furthermore, if and , we define .        Real numbers   Thanks to the set ,together with the operations of real number addition and real number multiplication, constitutes a field.    As mentioned above, the rationals are another field containing : in fact, another ordered archimedean field . We define them now as a subset of .    The set of rational numbers is the subset of defined as .     is a field   Real number addition and multiplication restrict to well-defined operations that give the structure of a field.       It is clear that we can add and multiply two rational numbers; what we need to show is that the result of applying either of these operations to two rational numbers is again a rational number. In other words, we must show that the sum of two rational numbers is a rational number, and the product of two rational numbers is a rational number. To this end, let , and write and , where . We then have . Since , we see that , as desired.    Once we know that real number addition and multiplication restrict to well-defined operations on , that these restricted operations satisfy the field axioms follows directly from the fact that the original operations on satisfy these axioms. For example, since addition and multiplication are satisfy Axiom (i) for all real numbers , they certainly satisfy Axiom (i) for all rational numbers .  Similarly, the existential Axioms (iv)-(vii) are easily seen to be satisfied for the operations restricted to once we observe that , and that given any nonzero , we have .        Integers   Explain why is not a field with respect to interger addition and multiplication. More specifically, which field axioms are satisfied, and which fail?       An argument very similar to the one in shows that the sum and product of two integers is again an integer, and hence that restricting these operations to yields a well-defined operation on .    The integers fail to be a field with respect to these operations as Axiom (vii) fails. To this end, by way of counterexample, we claim that the integer does not have a multiplicative inverse in . Indeed, if there were an integer such that , then we'd have and . But for all nonzero integers , we have , and hence , a contradiction. We conclude that there is no integer satisfying , and hence that has no multiplicative inverse in . Thus is not a field with respect to these operations.  As it turns out, Axiom (vii) is the only field axiom that fails, making it still a pretty darn good number system to work with. In fact, we have a name for number systems that satisfy at least Axioms (i)-(vi) of the field axioms: they are called rings .        Field of two elements   Let be a set containing two distinct elements. Define addition and multiplication on as follows: . Verify that , together with these two operations, constitutes a field. Make explicit which elements of serve as the additive\/multiplicative identities\/inverses.    Since only has two elements, showing that Axioms (i)-(iii) hold is a simple matter of looking at all the possible cases: in other words, we can resort to a proof by exhaustion for these axioms. For example, verifying commutativity of multiplication requires looking at just 4 different cases. Furthermore, since it is trivially true that and , we need only look at the mixed products  and ; and in this case we see by the definition that . Similar arguments can be mounted for the rest of these arithmetic axioms.  We now turn to the existential axioms. First, we claim that serves as the additive identity in this case: , we have for this field. To verify this, we need to show that satisfies the defining axiom of the additive identity: namely, that for any . But this follows directly from the very definition of addition on , as we declared that and . A similar argument shows that the element acts as the multiplicative identity in this field: , we have .  Lastly we must show that each element of has an additive inverse satisfying Axiom (v), and that each nonzero element of has a multiplicative inverse satisfying Axiom (vii). Again, this is accomplished simply by inspection, building on our already established result that and . In detail, since and , we see that and . Turning at last to multiplicative inverses, note first that is the only nonzero element of (since ). Furthermore, since , we see that .  Since the operations on satisfy the field axioms, we conclude that is a field with respect to these operations. Having identified and , we can summarize the arithemetic rules of this particular field as follows: .    Take a moment to take in the exotic nature of the field in . Unlike and , its underlying set is finite! Further peculiar attributes of this field is that every element is its own additive inverse. Crazy! Clearly, this example is important enough to warrant its own name.   Field of two elements   The set , together with the operations , is called the field of two elements .     Finite fields  It turns out that any finite field ( , a field with finitely many elements) has prime cardinality. In other words if is finite and we can define operations on satisfying the field axioms, then , where is a prime integer.  Furthermore, given any prime integer , we can define addition and multiplication operations on the set that satisfy the field axioms. In other words, for every prime there is a field of elements. (These are things you learn in the Math 330\/331 sequences.)   We end with a proposition listing some basic further properties enjoyed by any field. Since we assume nothing about the underlying set of the field, our proofs of these properties can invoke only the field axioms themselves.   Basic properties of fields   Let be a field.   The additive and multiplicative identities and are unique .    For all , we have and .    For all we have if and only if .    For all and for all nonzero elements , we have if and only if .    For all , if , then or .        "
},
{
  "id": "th_reals",
  "level": "2",
  "url": "s_reals_integers_rationals.html#th_reals",
  "type": "Theorem",
  "number": "1.2.1",
  "title": "Real numbers.",
  "body": " Real numbers   There is a set satisfying the following properties.    contains the integers as a subset: , .    Field  The addition and multiplication operations of extend to addition and multiplication operations on satisfying the field axioms of .    Ordered field  The the less than relation of the integers extends to a relation on satisfying the following properties.   For all , if , then .    For all and with , if , then .       Archimedean property  For all real numbers , there is a natural number such that .      "
},
{
  "id": "ss_reals-4",
  "level": "2",
  "url": "s_reals_integers_rationals.html#ss_reals-4",
  "type": "Remark",
  "number": "1.2.2",
  "title": "Ordered archimedean field.",
  "body": " Ordered archimedean field  The stated properties of establishes as an ordered archimedean field . It turns out that these properties alone are not enough to uniquely characterize . Indeed, it is easy to see that the rationals also satisfy these properties. However, it turns out that we can pin down uniquely with one additional property: the least upper bound property . We state it here for your reference, but again, this topic is really the domain of a real analysis course.   Least upper bound property  Given any nonempty subset , if has an upper bound in ( , there is a real number such that for all ), then has a least upper bound in ( , there is a real number such that is an upper bound for , and if is any other upper bound for , then ).   It is the existence of least upper bounds, as defined above, that make a much richer number system containing then say . For example, taking the set , it is easy to see that has an upper bound ( , ), and thus that there is a real number that is a least upper bound. You can then show that we must have , and hence that is a square root of .  "
},
{
  "id": "cor_archimedean",
  "level": "2",
  "url": "s_reals_integers_rationals.html#cor_archimedean",
  "type": "Corollary",
  "number": "1.2.3",
  "title": "Archimedean principle.",
  "body": " Archimedean principle   For any real number , there is a unique integer such that .    This is left as a homework exercise.   "
},
{
  "id": "d_floor",
  "level": "2",
  "url": "s_reals_integers_rationals.html#d_floor",
  "type": "Definition",
  "number": "1.2.4",
  "title": "Floor function.",
  "body": " Floor function   Given , we denote by the unique integer satisfying . The function is called the floor function .   "
},
{
  "id": "d_field",
  "level": "2",
  "url": "s_reals_integers_rationals.html#d_field",
  "type": "Definition",
  "number": "1.2.5",
  "title": "Field.",
  "body": " Field   A field is a set together with two operations called addition and multiplication respectively, satisfying the following axioms.   Commutativity  For all we have .    Associativity  For all we have .    Distributivity  For all we have .    Additive identity  There is an element satisfying for all . The element is called the additive identity .    Additive inverse  For all there is an element satisfying . The element is called the additive inverse of .    Multiplicative identity  There is an element satisfying for all . The element is called the multiplicative identity .    Multiplicative inverse  For all nonzero elements (i.e., ) there is an element satisfying . The element , also denoted , is called the multiplicative inverse of .      "
},
{
  "id": "rm_real_ops_notation",
  "level": "2",
  "url": "s_reals_integers_rationals.html#rm_real_ops_notation",
  "type": "Remark",
  "number": "1.2.6",
  "title": "Anatomy lesson: function and Cartesian product notation.",
  "body": " Anatomy lesson: function and Cartesian product notation  The expressions used in use a combination of function notation (see ) and Cartesian product notation (see ). Let's break it down.  Firstly, in general, given sets and , the set , called the Cartesian product of and , is defined as the set of all pairs , where and : , . Next, the notation denotes a function named whose domain is the set and whose codomain is the set . When we want to give more information about how the function is evaluated on inputs, we include a separate line below using the mapsto symbol : . Putting the two notations together, the expression denotes a function that takes as input a pair of elements , where and , and returns as output an element .  "
},
{
  "id": "ss_fields-4",
  "level": "2",
  "url": "s_reals_integers_rationals.html#ss_fields-4",
  "type": "Remark",
  "number": "1.2.7",
  "title": "Arithmetic and existential axioms.",
  "body": " Arithmetic and existential axioms  We will call Axioms (i)-(iii) the arithmetic axioms , as they stipulate that our operations satisfy some familiar properties from arithmetic. Additionally, we will call Axioms (iv)-(vii) the existential axioms as they posit the existence of certain special elements inside the underlying set of the field: namely, special elements denoted and satisfying Axioms (iv) and (vi), for each element a special associated element satisfying Axiom (v), and for each nonzero element a special associated element satisfying Axiom (vii).  "
},
{
  "id": "warning_names_fields",
  "level": "2",
  "url": "s_reals_integers_rationals.html#warning_names_fields",
  "type": "Warning",
  "number": "1.2.8",
  "title": "Names and prejudices.",
  "body": " Names and prejudices  We use familiar looking notation to describe the special elements of a field ( , ), but keep in mind that these are just names for certain special elements satisfying various axioms in .  When verifying whether a given set with given operations and is a field, we make no assumptions beforehand as to which elements of serve as these special elements. It is up to us to identify these special elements and verify that they satisfy the relevant axioms. As such, it is important each time we are confronted with a new potential field, that we come with no prejudices as to which elements serve as additive\/multiplicate identities\/inverses; these roles depend on how the operations themselves are defined. is a nice illustration of this approach.  "
},
{
  "id": "d_field_subt_quot",
  "level": "2",
  "url": "s_reals_integers_rationals.html#d_field_subt_quot",
  "type": "Definition",
  "number": "1.2.9",
  "title": "Subtraction, division, integer powers.",
  "body": " Subtraction, division, integer powers   Let be a field.   Subtraction  Given elements , we define their difference  as .    Division  Given elements with , we define their quotient  as .    Integer powers  Given any , we define and where is any positive integer.  Furthermore, if and , we define .      "
},
{
  "id": "eg_R",
  "level": "2",
  "url": "s_reals_integers_rationals.html#eg_R",
  "type": "Example",
  "number": "1.2.10",
  "title": "Real numbers.",
  "body": " Real numbers   Thanks to the set ,together with the operations of real number addition and real number multiplication, constitutes a field.   "
},
{
  "id": "d_rationals",
  "level": "2",
  "url": "s_reals_integers_rationals.html#d_rationals",
  "type": "Definition",
  "number": "1.2.11",
  "title": "",
  "body": "  The set of rational numbers is the subset of defined as .   "
},
{
  "id": "prop_rationals_field",
  "level": "2",
  "url": "s_reals_integers_rationals.html#prop_rationals_field",
  "type": "Proposition",
  "number": "1.2.12",
  "title": "<span class=\"process-math\">\\(\\Q\\)<\/span> is a field.",
  "body": " is a field   Real number addition and multiplication restrict to well-defined operations that give the structure of a field.       It is clear that we can add and multiply two rational numbers; what we need to show is that the result of applying either of these operations to two rational numbers is again a rational number. In other words, we must show that the sum of two rational numbers is a rational number, and the product of two rational numbers is a rational number. To this end, let , and write and , where . We then have . Since , we see that , as desired.    Once we know that real number addition and multiplication restrict to well-defined operations on , that these restricted operations satisfy the field axioms follows directly from the fact that the original operations on satisfy these axioms. For example, since addition and multiplication are satisfy Axiom (i) for all real numbers , they certainly satisfy Axiom (i) for all rational numbers .  Similarly, the existential Axioms (iv)-(vii) are easily seen to be satisfied for the operations restricted to once we observe that , and that given any nonzero , we have .      "
},
{
  "id": "eg_integers",
  "level": "2",
  "url": "s_reals_integers_rationals.html#eg_integers",
  "type": "Example",
  "number": "1.2.13",
  "title": "Integers.",
  "body": " Integers   Explain why is not a field with respect to interger addition and multiplication. More specifically, which field axioms are satisfied, and which fail?       An argument very similar to the one in shows that the sum and product of two integers is again an integer, and hence that restricting these operations to yields a well-defined operation on .    The integers fail to be a field with respect to these operations as Axiom (vii) fails. To this end, by way of counterexample, we claim that the integer does not have a multiplicative inverse in . Indeed, if there were an integer such that , then we'd have and . But for all nonzero integers , we have , and hence , a contradiction. We conclude that there is no integer satisfying , and hence that has no multiplicative inverse in . Thus is not a field with respect to these operations.  As it turns out, Axiom (vii) is the only field axiom that fails, making it still a pretty darn good number system to work with. In fact, we have a name for number systems that satisfy at least Axioms (i)-(vi) of the field axioms: they are called rings .      "
},
{
  "id": "eg_F2",
  "level": "2",
  "url": "s_reals_integers_rationals.html#eg_F2",
  "type": "Example",
  "number": "1.2.14",
  "title": "Field of two elements.",
  "body": " Field of two elements   Let be a set containing two distinct elements. Define addition and multiplication on as follows: . Verify that , together with these two operations, constitutes a field. Make explicit which elements of serve as the additive\/multiplicative identities\/inverses.    Since only has two elements, showing that Axioms (i)-(iii) hold is a simple matter of looking at all the possible cases: in other words, we can resort to a proof by exhaustion for these axioms. For example, verifying commutativity of multiplication requires looking at just 4 different cases. Furthermore, since it is trivially true that and , we need only look at the mixed products  and ; and in this case we see by the definition that . Similar arguments can be mounted for the rest of these arithmetic axioms.  We now turn to the existential axioms. First, we claim that serves as the additive identity in this case: , we have for this field. To verify this, we need to show that satisfies the defining axiom of the additive identity: namely, that for any . But this follows directly from the very definition of addition on , as we declared that and . A similar argument shows that the element acts as the multiplicative identity in this field: , we have .  Lastly we must show that each element of has an additive inverse satisfying Axiom (v), and that each nonzero element of has a multiplicative inverse satisfying Axiom (vii). Again, this is accomplished simply by inspection, building on our already established result that and . In detail, since and , we see that and . Turning at last to multiplicative inverses, note first that is the only nonzero element of (since ). Furthermore, since , we see that .  Since the operations on satisfy the field axioms, we conclude that is a field with respect to these operations. Having identified and , we can summarize the arithemetic rules of this particular field as follows: .   "
},
{
  "id": "d_F2",
  "level": "2",
  "url": "s_reals_integers_rationals.html#d_F2",
  "type": "Definition",
  "number": "1.2.15",
  "title": "Field of two elements.",
  "body": " Field of two elements   The set , together with the operations , is called the field of two elements .   "
},
{
  "id": "ss_fields-16",
  "level": "2",
  "url": "s_reals_integers_rationals.html#ss_fields-16",
  "type": "Remark",
  "number": "1.2.16",
  "title": "Finite fields.",
  "body": " Finite fields  It turns out that any finite field ( , a field with finitely many elements) has prime cardinality. In other words if is finite and we can define operations on satisfying the field axioms, then , where is a prime integer.  Furthermore, given any prime integer , we can define addition and multiplication operations on the set that satisfy the field axioms. In other words, for every prime there is a field of elements. (These are things you learn in the Math 330\/331 sequences.)  "
},
{
  "id": "p_field_properties",
  "level": "2",
  "url": "s_reals_integers_rationals.html#p_field_properties",
  "type": "Proposition",
  "number": "1.2.17",
  "title": "Basic properties of fields.",
  "body": " Basic properties of fields   Let be a field.   The additive and multiplicative identities and are unique .    For all , we have and .    For all we have if and only if .    For all and for all nonzero elements , we have if and only if .    For all , if , then or .      "
},
{
  "id": "s_complex",
  "level": "1",
  "url": "s_complex.html",
  "type": "Section",
  "number": "1.3",
  "title": "Complex numbers",
  "body": " Complex numbers   In we defined the rational numbers as a number system sitting between the integers and the real numbers: . In that chain of set inclusions, the arithmetic operations (addition and multiplication) of each new number system extend those of the previous one. Furthermore, each new number system can be seen as an improvement of its predecessor in some sense. For example, can be thought of as the result of adding multiplicative inverses to all the nonzero elements of . Furthermore, in a manner that is made more precise in real analysis,  completes  by adding many additional numbers like for all positive . In this section we give a careful construction of the complex numbers , itself a field extending the arithmetic operations of , thus adding yet another number system to our chain of inclusions: . As such, this is as fitting place as any to include a classic quote from Leopold Kronecker:   Die ganzen Zahlen hat der liebe Gott gemacht, alles andere ist Menschenwerk.  [Tr. God created the integers. Everything else is the work of man.]     Complex arithmetic   Complex numbers, real and imaginary parts   The complex numbers is the set of all formal expressions of the form , where : , . Given a complex number , we call its real part , denoted , and we call its imaginary part , denoted : , we have .     Complex numbers  When introducing a complex number as , unless specified otherwise, it is assumed that .   You are justified in wondering what exactly is meant by a formal expression . A more correct formulation would be that a complex number is really just a pair of real numbers that for various reasons we denote as . Since it is somewhat awkward to write a complex number as , we will live with the ambiguity of , and identify complex numbers as pairs of real numbers via the map . To ensure that this is a well-defined bijection between and , we make official when two of our formal expressions are defined to be equal.   Complex equality   Complex numbers and are equal , denoted , if . In other words, we have .    For reasons that will be made more clear below, it is natural to identify the set of real numbers with the set of complex numbers of the form . This is the motivation behind the next definition.   Real and imaginary numbers   Let be a complex number. We say that is real if , and (purely) imaginary if . Henceforth we identify the real numbers with the real complex numbers: , we declare that . Furthermore we will use the following abbreviations for various real and purely imaginary complex numbers: .     Complex addition and multiplication   Let and be complex numbers.   Complex addition  We define the sum of and , denoted , as .    Complex multiplication  We define the product of and , denoted (or sometimes ) as .        Complex arithmetic   Let , . Compute the following complex numbers. Your answer must be expressed in the form , where .                   We have .    We have .          Compute .    We have, using the definition of multiplication, . Thus the element is seen to be a square-root of ! With a little more work, we can show that any complex number has a complex square-root. More on that later.     Complex arithmetic as extension of real arithmetic  Using the definition of complex multiplication, it is easy to see that given any real complex number , we have . In particular, given any two real complex numbers and , we have . In other words, when we restrict complex multiplication to the real complex numbers, we recover our familiar real multiplication operation. A similar statement applies for complex addition and real addition. In this sense, complex arithmetic is understood as an extension of real arithmetic.   Somewhat surprisingly, despite the somewhat nonintuitive definition of complex multiplication, turns out to be a field with respect to its addition and multiplication.   is a field   The set of all complex numbers, together with the operations of complex addition and multiplication defined in , constitutes a field.  In more detail, with respect to these operations, the additive and multiplicative identities are and , respectively, and given any , we have .    We must show that satisfies the seven field axioms of . For the sake of demonstration, we will do some of that work here, but will leave most of it as a homework exercise.   Addition is commutative (half of Axiom i)  Given and , we have .    Axiom iv  For all , we have . Thus, as claimed, the complex number satisfies the additive identity property.    Multiplicative identity  For all , we have . Thus, as claimed, the complex number satisfies the multiplicative identity property.        Further complex operations  Two further complex operations, the modulus and complex conjugation , will prove to be invaluable when doing complex arithmetic.   Complex modulus   The modulus (or absolute value ) of a complex number , denoted , is defined as . If , we say that has unit length .     Complex conjugation   Given the complex number , its (complex) conjugate  is defined as .     Conjugation properties   Let and be complex numbers.    .     .     .     .     and .     if and only if .         If , then .       This is left as a homework exercise.      Geometry of and polar form   ensures that the map defines a bijection between and , allowing us to identify complex numbers as pairs of real numbers. This identification in turn gives rise to a visual representation of complex numbers as points in the Cartesian plane , called the complex plane in this context. To make clear that we are using to visualize , we label the horizontal and vertical axes as and .   Complex plane   Complex plane: points     Using our identification , we see that the real numbers are represented geometrically as the -axis of the complex plane. Similarly, the purely imaginary complex numbers are represented geometrically as the the -axis of the complex plane. As you will see, we will get a lot of mileage out of this geometric representation of complex numbers.  Recall that for any pair we can write for some , and we call and  polar coordinates of the point in this case. These polar coordinates are not unique, but we do have the following fact: if is nonzero, and we have with and , then and for some integer . This leads directly to the following result about complex numbers.   Polar form   Let be a complex number.   We have for some nonnegative and . The choice of here is unique; in fact, we have .    If and we have for , then for some integer .        Polar form   Let be a complex number, and suppose and satisfy . We call the expression a polar form of and we call an argument of .     Polar form   Find a polar form for the given .                     Polar form properties   Let and where .         .     .    If , then .        Geometric interpretation of complex operations  Each of the identities of can be understood as providing a geometric interpretation of one of our complex operations.  In particular, statement (3) provides us with a more satisfying description of complex multiplication than the algebraic formula given by . Roughly speaking, the identity tells us that to multiply two complex numbers, we (a) add their arguments and (b) multiply their moduli.  Alternatively, tells us that to multiply by , we (a) rotate (considered as a point) by an angle about the origin, and (b) scale its distance from the origin by .  Similarly, tells us that the inverse of a complex number is obtained by taking the reciprocal of its modulus (the in the formula), and flipping its argument (the in the formula).    Polar form arithmetic   Let and . Compute the following complex numbers. Your answer should be expressed in polar form.    .     .            "
},
{
  "id": "d_complex_numbers",
  "level": "2",
  "url": "s_complex.html#d_complex_numbers",
  "type": "Definition",
  "number": "1.3.1",
  "title": "Complex numbers, real and imaginary parts.",
  "body": " Complex numbers, real and imaginary parts   The complex numbers is the set of all formal expressions of the form , where : , . Given a complex number , we call its real part , denoted , and we call its imaginary part , denoted : , we have .   "
},
{
  "id": "ss_complex_def-3",
  "level": "2",
  "url": "s_complex.html#ss_complex_def-3",
  "type": "Convention",
  "number": "1.3.2",
  "title": "Complex numbers.",
  "body": " Complex numbers  When introducing a complex number as , unless specified otherwise, it is assumed that .  "
},
{
  "id": "d_complex_equality",
  "level": "2",
  "url": "s_complex.html#d_complex_equality",
  "type": "Definition",
  "number": "1.3.3",
  "title": "Complex equality.",
  "body": " Complex equality   Complex numbers and are equal , denoted , if . In other words, we have .   "
},
{
  "id": "d_real_imaginary",
  "level": "2",
  "url": "s_complex.html#d_real_imaginary",
  "type": "Definition",
  "number": "1.3.4",
  "title": "Real and imaginary numbers.",
  "body": " Real and imaginary numbers   Let be a complex number. We say that is real if , and (purely) imaginary if . Henceforth we identify the real numbers with the real complex numbers: , we declare that . Furthermore we will use the following abbreviations for various real and purely imaginary complex numbers: .   "
},
{
  "id": "d_sum_product",
  "level": "2",
  "url": "s_complex.html#d_sum_product",
  "type": "Definition",
  "number": "1.3.5",
  "title": "Complex addition and multiplication.",
  "body": " Complex addition and multiplication   Let and be complex numbers.   Complex addition  We define the sum of and , denoted , as .    Complex multiplication  We define the product of and , denoted (or sometimes ) as .      "
},
{
  "id": "eg_arithmetic",
  "level": "2",
  "url": "s_complex.html#eg_arithmetic",
  "type": "Example",
  "number": "1.3.6",
  "title": "Complex arithmetic.",
  "body": " Complex arithmetic   Let , . Compute the following complex numbers. Your answer must be expressed in the form , where .                   We have .    We have .      "
},
{
  "id": "eg_squareroot_minusone",
  "level": "2",
  "url": "s_complex.html#eg_squareroot_minusone",
  "type": "Example",
  "number": "1.3.7",
  "title": "<span class=\"process-math\">\\(i^2\\)<\/span>.",
  "body": "   Compute .    We have, using the definition of multiplication, . Thus the element is seen to be a square-root of ! With a little more work, we can show that any complex number has a complex square-root. More on that later.   "
},
{
  "id": "rem_complex_arith",
  "level": "2",
  "url": "s_complex.html#rem_complex_arith",
  "type": "Remark",
  "number": "1.3.8",
  "title": "Complex arithmetic as extension of real arithmetic.",
  "body": " Complex arithmetic as extension of real arithmetic  Using the definition of complex multiplication, it is easy to see that given any real complex number , we have . In particular, given any two real complex numbers and , we have . In other words, when we restrict complex multiplication to the real complex numbers, we recover our familiar real multiplication operation. A similar statement applies for complex addition and real addition. In this sense, complex arithmetic is understood as an extension of real arithmetic.  "
},
{
  "id": "th_complex_field",
  "level": "2",
  "url": "s_complex.html#th_complex_field",
  "type": "Theorem",
  "number": "1.3.9",
  "title": "<span class=\"process-math\">\\(\\C\\)<\/span> is a field.",
  "body": " is a field   The set of all complex numbers, together with the operations of complex addition and multiplication defined in , constitutes a field.  In more detail, with respect to these operations, the additive and multiplicative identities are and , respectively, and given any , we have .    We must show that satisfies the seven field axioms of . For the sake of demonstration, we will do some of that work here, but will leave most of it as a homework exercise.   Addition is commutative (half of Axiom i)  Given and , we have .    Axiom iv  For all , we have . Thus, as claimed, the complex number satisfies the additive identity property.    Multiplicative identity  For all , we have . Thus, as claimed, the complex number satisfies the multiplicative identity property.    "
},
{
  "id": "d_modulus",
  "level": "2",
  "url": "s_complex.html#d_modulus",
  "type": "Definition",
  "number": "1.3.10",
  "title": "Complex modulus.",
  "body": " Complex modulus   The modulus (or absolute value ) of a complex number , denoted , is defined as . If , we say that has unit length .   "
},
{
  "id": "d_conj",
  "level": "2",
  "url": "s_complex.html#d_conj",
  "type": "Definition",
  "number": "1.3.11",
  "title": "Complex conjugation.",
  "body": " Complex conjugation   Given the complex number , its (complex) conjugate  is defined as .   "
},
{
  "id": "th_conj",
  "level": "2",
  "url": "s_complex.html#th_conj",
  "type": "Theorem",
  "number": "1.3.12",
  "title": "Conjugation properties.",
  "body": " Conjugation properties   Let and be complex numbers.    .     .     .     .     and .     if and only if .         If , then .       This is left as a homework exercise.   "
},
{
  "id": "ss_geometry_complex-2",
  "level": "2",
  "url": "s_complex.html#ss_geometry_complex-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "complex plane "
},
{
  "id": "fig_complex_plane",
  "level": "2",
  "url": "s_complex.html#fig_complex_plane",
  "type": "Figure",
  "number": "1.3.13",
  "title": "",
  "body": " Complex plane   Complex plane: points    "
},
{
  "id": "th_polar_form",
  "level": "2",
  "url": "s_complex.html#th_polar_form",
  "type": "Theorem",
  "number": "1.3.14",
  "title": "Polar form.",
  "body": " Polar form   Let be a complex number.   We have for some nonnegative and . The choice of here is unique; in fact, we have .    If and we have for , then for some integer .      "
},
{
  "id": "d_polar",
  "level": "2",
  "url": "s_complex.html#d_polar",
  "type": "Definition",
  "number": "1.3.15",
  "title": "Polar form.",
  "body": " Polar form   Let be a complex number, and suppose and satisfy . We call the expression a polar form of and we call an argument of .   "
},
{
  "id": "eg_polar",
  "level": "2",
  "url": "s_complex.html#eg_polar",
  "type": "Example",
  "number": "1.3.16",
  "title": "Polar form.",
  "body": " Polar form   Find a polar form for the given .                   "
},
{
  "id": "th_polar_mult",
  "level": "2",
  "url": "s_complex.html#th_polar_mult",
  "type": "Theorem",
  "number": "1.3.17",
  "title": "Polar form properties.",
  "body": " Polar form properties   Let and where .         .     .    If , then .      "
},
{
  "id": "ss_geometry_complex-10",
  "level": "2",
  "url": "s_complex.html#ss_geometry_complex-10",
  "type": "Remark",
  "number": "1.3.18",
  "title": "Geometric interpretation of complex operations.",
  "body": " Geometric interpretation of complex operations  Each of the identities of can be understood as providing a geometric interpretation of one of our complex operations.  In particular, statement (3) provides us with a more satisfying description of complex multiplication than the algebraic formula given by . Roughly speaking, the identity tells us that to multiply two complex numbers, we (a) add their arguments and (b) multiply their moduli.  Alternatively, tells us that to multiply by , we (a) rotate (considered as a point) by an angle about the origin, and (b) scale its distance from the origin by .  Similarly, tells us that the inverse of a complex number is obtained by taking the reciprocal of its modulus (the in the formula), and flipping its argument (the in the formula).  "
},
{
  "id": "eg_polar_form_",
  "level": "2",
  "url": "s_complex.html#eg_polar_form_",
  "type": "Example",
  "number": "1.3.19",
  "title": "Polar form arithmetic.",
  "body": " Polar form arithmetic   Let and . Compute the following complex numbers. Your answer should be expressed in polar form.    .     .          "
},
{
  "id": "s_vector_space",
  "level": "1",
  "url": "s_vector_space.html",
  "type": "Section",
  "number": "1.4",
  "title": "Vector spaces",
  "body": " Vector spaces   In the last sections we've been busy with isolating familiar arithmetic properties of and generalizing them in the form of our axiomatic definition of a field ( ). In introducing vector spaces in this section, we will go at things the other way around: we will axiomatically define a mathematical object called a vector space without having an original inspirational model, and then start building up a collection examples that you may not have been exposed to before.    Definition and first examples   stands for field   Henceforth, unless stated otherwise, will always denote a field and all statements of theory formulated in terms of are understood to be valid for any field.     Vector space  vector space definition  vector space zero vector  vector space vector inverse  vector space vector   Let be a field. A vector space over (or -vector space ) is a set together with two operations , called respectively vector addition and scalar multiplication , that satisfy the following vector space axioms .   Vector addition is commutative   for all .    Vector addition is associative   for all .    Zero vector  There is an element such that for all , we have . We call the zero vector of .    Vector inverses  For all , there is another element satisfying . We call the vector inverse of .    Distribution over vector addition   for all and .    Distribution over scalar addition   for all and .    Scalar multiplication is associative   for all and all .    Scalar multiplication identity   for all .   We call elements of the vector space  vectors and the elements of  scalars .     Arithmetic and existential axioms  As with the axioms in we divide the vector space axioms into the arithmetic axioms (Axioms (i)-(ii),(v)-(vi),(vii)) and the existential axioms (Axioms (iii)-(iv)).    Scalar multiplication: a hybrid operation  There are certainly some similarities between and , but we should point out one very important qualitative difference between the structural operations that define these two mathematical objects. Namely, note that the scalar multiplication operation that forms part of the definition of a vector space is a hybrid operation in the sense that it takes as input a pair , where is an element of the field (or scalar as we now call it), and is an element of the vector space, and outputs a new element of the vector space.   We now proceed to a litany of examples. Each one will be stated as a definition (for reference purposes), but nonetheless requires a proof that the given structure does indeed constitute a vector space. In a classic mathematical move, we begin with the simplest of all vector spaces, the zero space . Elementary as this example is, it serves well to illustrate the axiomatic nature of .   Zero space   Let be a field, and let , a set containing exactly one element. There is a unique -vector space structure that can be given to , defined as follows.   Vector operations  Vector addition on is defined as ; scalar multiplication on is defined as for all .    Zero vector  The zero vector of is : , .    Vector inverses  The vector inverse of is : , .   Since the unique element ends up serving as the zero vector, we have and call a zero space .     makes two claims: that the given operations make into a vector space, and that this is the only way to make into a vector space. As with all claims in mathematics, these need to be proved, but as you will see, the proof is a very light affair.   Proof for  Since only has one item, there is no choice for what vector addition and scalar multiplication can be. They must be defined in the manner given in . Similarly, we must have and , as once again, is the only element of ! This shows that there can be at most one way of giving a vector space structure.  It is now easy to see that these choices do indeed satisfy the vector space axioms. That satisfies the identity of Axiom defining the zero vector follows from the fact that for all we have (since ), and thus . Thus is the zero vector of the space.  Similarly, to show all elements of have vector inverses amounts to showing that has a vector inverse, since this is the only element of . It is claimed that ( , is its own vector inverse), which follows from the fact that . Lastly, the identities of Axioms (i)-(ii) and (v)-(viii) in this setting all reduce to trivial statements of the form . Consider Axiom (vii), for example. For all , we have , in which case and . Thus for all and .  We leave verification of the rest of the axioms to the reader.   It is worth formalizing the proof technique used above into an official procedure for showing whether something is a vector space.   Vector space verification   To decide whether a given set and operations is a vector space, proceed as follows.   Make explicit the underlying set of the proposed vector space.    Make explicit what the scalar multiplication and vector addition operations are.    Identify an element of that serves as the zero vector ( , satisfies ) and for each show that there is a vector satisfying .    Show that the two vector operations and our choice of zero vector and vector inverses satisfy the axioms of .        Vector space verification  Think of steps (1)-(3) of as the issuing of official declarations about the makeup of our proposed vector space: The underlying set shall be as stated ; We declare the vector operations thusly ; The zero vector shall be this element here, and vector inverses shall be assigned in this manner . Step (4) is where we get down to the nitty gritty of showing that the proposed vector space structure articulated in (1)-(3) does indeed satisfy all the necessary properties.  In each of the remaining examples below we carefully lay out the details of items (1)-(3) while often leaving much of the work of item (4) to you. You will meet these vector spaces frequently throughout the rest of your life. Each time you do, it will be helpful for orientation purposes to mentally run through items (1)-(3). Ask yourself: What is the underlying set? What are vector operations? What acts as the zero vector, and how do I assign vector inverses?    Fields are vector spaces   Show that a field is a vector space, where vector addition is field addition, and scalar multiplication is field multiplication.    The underlying set and operations have already been specified. We add that the field element will serve as the zero vector ( , we have ), and for each , its vector inverse will be the field additive inverse .  That our proposed vector space operations, zero vector, and vector inverses satisfy the axioms of now follows essentially immediately from the field axioms satisfied by ! For example, the vector space arithmetic axioms (i)-(ii), (v)-(viii) in this context are simply restatements that field addition is commutative and associative, that field multiplication distributes over field addition, that field multiplication is associative, and that satisfies the multiplicative identity property. Similarly, the zero vector identity is identical to the additive identity property of fields, giving us axiom (iii), and the vector inverse identity is identical to the additive inverse property of fields, giving us axiom (iv).     is a vector space   Let be a field, and let be the set of all pairs of elements of : , .  Define vector addition and scalar multiplication on as follows:   given , define ;    given and , define .   Show that is a vector space with respect to these two operations.    Let's follow the steps of . Once again, the underlying set and vector operations have been specified. We further declare that the zero vector of will be , and that given any , its vector inverse shall be . Let's verify some of the axioms. Let . We have , showing that axioms (i)-(ii) hold. Axioms (v)-(viii) follow in a similar manner, ultimately citing some arithmetic properties of itself. We leave those to the reader, and instead verify axioms (iii)-(iv). For all , we have , showing that satisfies the zero vector identity, and satifies the vector inverse identity for .     Vector space of -valued functions   Let be a field, and let be a set. We denote by or the set of all functions with domain and codomain .     Vector operations  Given functions and scalar , we let be the function in defined as for all , and we let be the function in defined as . The operations are called function addition and function scalar multiplication , respectively.    Zero vector  The zero vector of is the zero function  defined as for all .    Vector inverses  Given a function , its vector inverse is the function defined as for all .   We call , together with these vector operations, the space of functions from to .     Function spaces are vector spaces   Let be a field, and let be a set. The set is a vector space with respect to function addition and function scalar multiplication.          Real-valued functions   Let be an interval in the real line. The vector operations on correspond to the function-arithmetic operations you met in precalculus and calculus: , given functions , their vector sum is the function defined as for all . Similarly, given a scalar and function , the vector scalar multiple is the function defined as for all .  In this context it is possible to visualize our vector operations in terms of the graphs of the functions on the interval .   Visualizing function arithmetic in    Visualizing   Visualizing function addition      Visualizing   Visualizing function scalar multiplication           Vector space properties  We end this section with a few elementary vector space properties. Since these statements involve a general vector space (as opposed to a specific type of vector space), we will make no assumptions about and the base field , other than that satisfies the vector space axioms and satisfies the field axioms.   Uniqueness of zero vector and inverses   Let be an -vector space.   The zero vector in is unique: , there is one and only one element of that satisfies .    Inverse vectors are unique: , for all there is one and only one vector satisfying .          If satisfies for all , then in particular, taking , we see that . But since (using the defining property of , we see that . We conclude that , as desired.    Let . Given we have .        Vector space properties   Let be an -vector space.   For all , we have .    For all , we have .    For all , we have .    For all and , if , then or .       We provide proofs of (1) and (3), leaving (2) and (4) to the reader.  Our proof of (1) is almost identical to a similar statement in . For any , we have . But then we have , as desired.  Let . To prove (2), we will show that satisfies the defining property of ; since each vector has a unique vector inverse ( ), it will then follow that . To show satisfies , we observe that . Thus .     "
},
{
  "id": "fiat_F_field",
  "level": "2",
  "url": "s_vector_space.html#fiat_F_field",
  "type": "Fiat",
  "number": "1.4.1",
  "title": "<span class=\"process-math\">\\(F\\)<\/span> stands for field.",
  "body": " stands for field   Henceforth, unless stated otherwise, will always denote a field and all statements of theory formulated in terms of are understood to be valid for any field.   "
},
{
  "id": "d_vector_space",
  "level": "2",
  "url": "s_vector_space.html#d_vector_space",
  "type": "Definition",
  "number": "1.4.2",
  "title": "Vector space.",
  "body": " Vector space  vector space definition  vector space zero vector  vector space vector inverse  vector space vector   Let be a field. A vector space over (or -vector space ) is a set together with two operations , called respectively vector addition and scalar multiplication , that satisfy the following vector space axioms .   Vector addition is commutative   for all .    Vector addition is associative   for all .    Zero vector  There is an element such that for all , we have . We call the zero vector of .    Vector inverses  For all , there is another element satisfying . We call the vector inverse of .    Distribution over vector addition   for all and .    Distribution over scalar addition   for all and .    Scalar multiplication is associative   for all and all .    Scalar multiplication identity   for all .   We call elements of the vector space  vectors and the elements of  scalars .   "
},
{
  "id": "ss_vector_space-4",
  "level": "2",
  "url": "s_vector_space.html#ss_vector_space-4",
  "type": "Remark",
  "number": "1.4.3",
  "title": "Arithmetic and existential axioms.",
  "body": " Arithmetic and existential axioms  As with the axioms in we divide the vector space axioms into the arithmetic axioms (Axioms (i)-(ii),(v)-(vi),(vii)) and the existential axioms (Axioms (iii)-(iv)).  "
},
{
  "id": "ss_vector_space-5",
  "level": "2",
  "url": "s_vector_space.html#ss_vector_space-5",
  "type": "Remark",
  "number": "1.4.4",
  "title": "Scalar multiplication: a hybrid operation.",
  "body": " Scalar multiplication: a hybrid operation  There are certainly some similarities between and , but we should point out one very important qualitative difference between the structural operations that define these two mathematical objects. Namely, note that the scalar multiplication operation that forms part of the definition of a vector space is a hybrid operation in the sense that it takes as input a pair , where is an element of the field (or scalar as we now call it), and is an element of the vector space, and outputs a new element of the vector space.  "
},
{
  "id": "d_zero_space",
  "level": "2",
  "url": "s_vector_space.html#d_zero_space",
  "type": "Definition",
  "number": "1.4.5",
  "title": "Zero space.",
  "body": " Zero space   Let be a field, and let , a set containing exactly one element. There is a unique -vector space structure that can be given to , defined as follows.   Vector operations  Vector addition on is defined as ; scalar multiplication on is defined as for all .    Zero vector  The zero vector of is : , .    Vector inverses  The vector inverse of is : , .   Since the unique element ends up serving as the zero vector, we have and call a zero space .   "
},
{
  "id": "ss_vector_space-9",
  "level": "2",
  "url": "s_vector_space.html#ss_vector_space-9",
  "type": "Proof",
  "number": "1.4.1.1",
  "title": "Proof for Definition 1.4.5.",
  "body": " Proof for  Since only has one item, there is no choice for what vector addition and scalar multiplication can be. They must be defined in the manner given in . Similarly, we must have and , as once again, is the only element of ! This shows that there can be at most one way of giving a vector space structure.  It is now easy to see that these choices do indeed satisfy the vector space axioms. That satisfies the identity of Axiom defining the zero vector follows from the fact that for all we have (since ), and thus . Thus is the zero vector of the space.  Similarly, to show all elements of have vector inverses amounts to showing that has a vector inverse, since this is the only element of . It is claimed that ( , is its own vector inverse), which follows from the fact that . Lastly, the identities of Axioms (i)-(ii) and (v)-(viii) in this setting all reduce to trivial statements of the form . Consider Axiom (vii), for example. For all , we have , in which case and . Thus for all and .  We leave verification of the rest of the axioms to the reader.  "
},
{
  "id": "proc_vector_space",
  "level": "2",
  "url": "s_vector_space.html#proc_vector_space",
  "type": "Procedure",
  "number": "1.4.6",
  "title": "Vector space verification.",
  "body": " Vector space verification   To decide whether a given set and operations is a vector space, proceed as follows.   Make explicit the underlying set of the proposed vector space.    Make explicit what the scalar multiplication and vector addition operations are.    Identify an element of that serves as the zero vector ( , satisfies ) and for each show that there is a vector satisfying .    Show that the two vector operations and our choice of zero vector and vector inverses satisfy the axioms of .      "
},
{
  "id": "ss_vector_space-12",
  "level": "2",
  "url": "s_vector_space.html#ss_vector_space-12",
  "type": "Remark",
  "number": "1.4.7",
  "title": "Vector space verification.",
  "body": " Vector space verification  Think of steps (1)-(3) of as the issuing of official declarations about the makeup of our proposed vector space: The underlying set shall be as stated ; We declare the vector operations thusly ; The zero vector shall be this element here, and vector inverses shall be assigned in this manner . Step (4) is where we get down to the nitty gritty of showing that the proposed vector space structure articulated in (1)-(3) does indeed satisfy all the necessary properties.  In each of the remaining examples below we carefully lay out the details of items (1)-(3) while often leaving much of the work of item (4) to you. You will meet these vector spaces frequently throughout the rest of your life. Each time you do, it will be helpful for orientation purposes to mentally run through items (1)-(3). Ask yourself: What is the underlying set? What are vector operations? What acts as the zero vector, and how do I assign vector inverses?  "
},
{
  "id": "eg_fields_vector_space",
  "level": "2",
  "url": "s_vector_space.html#eg_fields_vector_space",
  "type": "Example",
  "number": "1.4.8",
  "title": "Fields are vector spaces.",
  "body": " Fields are vector spaces   Show that a field is a vector space, where vector addition is field addition, and scalar multiplication is field multiplication.    The underlying set and operations have already been specified. We add that the field element will serve as the zero vector ( , we have ), and for each , its vector inverse will be the field additive inverse .  That our proposed vector space operations, zero vector, and vector inverses satisfy the axioms of now follows essentially immediately from the field axioms satisfied by ! For example, the vector space arithmetic axioms (i)-(ii), (v)-(viii) in this context are simply restatements that field addition is commutative and associative, that field multiplication distributes over field addition, that field multiplication is associative, and that satisfies the multiplicative identity property. Similarly, the zero vector identity is identical to the additive identity property of fields, giving us axiom (iii), and the vector inverse identity is identical to the additive inverse property of fields, giving us axiom (iv).   "
},
{
  "id": "eg_F2_vector_space",
  "level": "2",
  "url": "s_vector_space.html#eg_F2_vector_space",
  "type": "Example",
  "number": "1.4.9",
  "title": "<span class=\"process-math\">\\(F^2\\)<\/span> is a vector space.",
  "body": " is a vector space   Let be a field, and let be the set of all pairs of elements of : , .  Define vector addition and scalar multiplication on as follows:   given , define ;    given and , define .   Show that is a vector space with respect to these two operations.    Let's follow the steps of . Once again, the underlying set and vector operations have been specified. We further declare that the zero vector of will be , and that given any , its vector inverse shall be . Let's verify some of the axioms. Let . We have , showing that axioms (i)-(ii) hold. Axioms (v)-(viii) follow in a similar manner, ultimately citing some arithmetic properties of itself. We leave those to the reader, and instead verify axioms (iii)-(iv). For all , we have , showing that satisfies the zero vector identity, and satifies the vector inverse identity for .   "
},
{
  "id": "d_function_vector_space",
  "level": "2",
  "url": "s_vector_space.html#d_function_vector_space",
  "type": "Definition",
  "number": "1.4.10",
  "title": "Vector space of <span class=\"process-math\">\\(F\\)<\/span>-valued functions.",
  "body": " Vector space of -valued functions   Let be a field, and let be a set. We denote by or the set of all functions with domain and codomain .     Vector operations  Given functions and scalar , we let be the function in defined as for all , and we let be the function in defined as . The operations are called function addition and function scalar multiplication , respectively.    Zero vector  The zero vector of is the zero function  defined as for all .    Vector inverses  Given a function , its vector inverse is the function defined as for all .   We call , together with these vector operations, the space of functions from to .   "
},
{
  "id": "th_function_space_vector_space",
  "level": "2",
  "url": "s_vector_space.html#th_function_space_vector_space",
  "type": "Theorem",
  "number": "1.4.11",
  "title": "Function spaces are vector spaces.",
  "body": " Function spaces are vector spaces   Let be a field, and let be a set. The set is a vector space with respect to function addition and function scalar multiplication.        "
},
{
  "id": "eg_real_functions",
  "level": "2",
  "url": "s_vector_space.html#eg_real_functions",
  "type": "Example",
  "number": "1.4.12",
  "title": "Real-valued functions.",
  "body": " Real-valued functions   Let be an interval in the real line. The vector operations on correspond to the function-arithmetic operations you met in precalculus and calculus: , given functions , their vector sum is the function defined as for all . Similarly, given a scalar and function , the vector scalar multiple is the function defined as for all .  In this context it is possible to visualize our vector operations in terms of the graphs of the functions on the interval .   Visualizing function arithmetic in    Visualizing   Visualizing function addition      Visualizing   Visualizing function scalar multiplication        "
},
{
  "id": "prop_zero_inv_unique",
  "level": "2",
  "url": "s_vector_space.html#prop_zero_inv_unique",
  "type": "Proposition",
  "number": "1.4.14",
  "title": "Uniqueness of zero vector and inverses.",
  "body": " Uniqueness of zero vector and inverses   Let be an -vector space.   The zero vector in is unique: , there is one and only one element of that satisfies .    Inverse vectors are unique: , for all there is one and only one vector satisfying .          If satisfies for all , then in particular, taking , we see that . But since (using the defining property of , we see that . We conclude that , as desired.    Let . Given we have .      "
},
{
  "id": "prop_vs_props",
  "level": "2",
  "url": "s_vector_space.html#prop_vs_props",
  "type": "Proposition",
  "number": "1.4.15",
  "title": "Vector space properties.",
  "body": " Vector space properties   Let be an -vector space.   For all , we have .    For all , we have .    For all , we have .    For all and , if , then or .       We provide proofs of (1) and (3), leaving (2) and (4) to the reader.  Our proof of (1) is almost identical to a similar statement in . For any , we have . But then we have , as desired.  Let . To prove (2), we will show that satisfies the defining property of ; since each vector has a unique vector inverse ( ), it will then follow that . To show satisfies , we observe that . Thus .   "
},
{
  "id": "appendix-notation",
  "level": "1",
  "url": "appendix-notation.html",
  "type": "Appendix",
  "number": "A",
  "title": "Notation",
  "body": " Notation   "
},
{
  "id": "appendix-exercises",
  "level": "1",
  "url": "appendix-exercises.html",
  "type": "Appendix",
  "number": "B",
  "title": "Exercises",
  "body": " Exercises   "
},
{
  "id": "appendix-defs",
  "level": "1",
  "url": "appendix-defs.html",
  "type": "Appendix",
  "number": "C",
  "title": "Definitions",
  "body": " Definitions   "
},
{
  "id": "appendix-thms",
  "level": "1",
  "url": "appendix-thms.html",
  "type": "Appendix",
  "number": "D",
  "title": "Theory and procedures",
  "body": " Theory and procedures   "
},
{
  "id": "appendix-egs",
  "level": "1",
  "url": "appendix-egs.html",
  "type": "Appendix",
  "number": "E",
  "title": "Examples",
  "body": " Examples   "
},
{
  "id": "appendix-sage",
  "level": "1",
  "url": "appendix-sage.html",
  "type": "Appendix",
  "number": "F",
  "title": "Sage examples",
  "body": " Sage examples   "
},
{
  "id": "appendix-figures",
  "level": "1",
  "url": "appendix-figures.html",
  "type": "Appendix",
  "number": "G",
  "title": "Figures and video examples",
  "body": " Figures and video examples   "
},
{
  "id": "appendix-matnras",
  "level": "1",
  "url": "appendix-matnras.html",
  "type": "Appendix",
  "number": "H",
  "title": "Mantras and fiats",
  "body": " Mantras and fiats   "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
