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
  "body": " Vector spaces   In the last sections we've been busy with isolating familiar arithmetic properties of and generalizing them in the form of our axiomatic definition of a field ( ). In introducing vector spaces in this section, we will go at things the other way around: we will axiomatically define a mathematical object called a vector space without having an original inspirational model, and then start building up a collection examples that you may not have been exposed to before.    Definition and first examples   stands for field   Henceforth, unless stated otherwise, will always denote a field and all statements of theory formulated in terms of are understood to be valid for any field.     Vector space  vector space definition  vector space zero vector  vector space vector inverse  vector space vector   Let be a field. A vector space over (or -vector space ) is a set together with two operations , called respectively vector addition and scalar multiplication , that satisfy the following vector space axioms .   Vector addition is commutative   for all .    Vector addition is associative   for all .    Zero vector  There is an element such that for all , we have . We call the zero vector of .    Vector inverses  For all , there is another element satisfying . We call the vector inverse of .    Distribution over vector addition   for all and .    Distribution over scalar addition   for all and .    Scalar multiplication is associative   for all and all .    Scalar multiplication identity   for all .   We call elements of the vector space  vectors and the elements of  scalars .     Arithmetic and existential axioms  As with the axioms in we divide the vector space axioms into the arithmetic axioms (Axioms (i)-(ii),(v)-(vi),(vii)) and the existential axioms (Axioms (iii)-(iv)).    Scalar multiplication: a hybrid operation  There are certainly some similarities between and , but we should point out one very important qualitative difference between the structural operations that define these two mathematical objects. Namely, note that the scalar multiplication operation that forms part of the definition of a vector space is a hybrid operation in the sense that it takes as input a pair , where is an element of the field (or scalar as we now call it), and is an element of the vector space, and outputs a new element of the vector space.   We now proceed to a litany of examples. Each one will be stated as a definition (for reference purposes), but nonetheless requires a proof that the given structure does indeed constitute a vector space. In a classic mathematical move, we begin with the simplest of all vector spaces, the zero space . Elementary as this example is, it serves well to illustrate the axiomatic nature of .   Zero space   Let be a field, and let , a set containing exactly one element. There is a unique -vector space structure that can be given to , defined as follows.   Vector operations  Vector addition on is defined as ; scalar multiplication on is defined as for all .    Zero vector  The zero vector of is : , .    Vector inverses  The vector inverse of is : , .   Since the unique element ends up serving as the zero vector, we have and call a zero space .     makes two claims: that the given operations make into a vector space, and that this is the only way to make into a vector space. As with all claims in mathematics, these need to be proved, but as you will see, the proof is a very light affair.   Proof for  Since only has one item, there is no choice for what vector addition and scalar multiplication can be. They must be defined in the manner given in . Similarly, we must have and , as once again, is the only element of ! This shows that there can be at most one way of giving a vector space structure.  It is now easy to see that these choices do indeed satisfy the vector space axioms. That satisfies the identity of Axiom defining the zero vector follows from the fact that for all we have (since ), and thus . Thus is the zero vector of the space.  Similarly, to show all elements of have vector inverses amounts to showing that has a vector inverse, since this is the only element of . It is claimed that ( , is its own vector inverse), which follows from the fact that . Lastly, the identities of Axioms (i)-(ii) and (v)-(viii) in this setting all reduce to trivial statements of the form . Consider Axiom (vii), for example. For all , we have , in which case and . Thus for all and .  We leave verification of the rest of the axioms to the reader.   It is worth formalizing the proof technique used above into an official procedure for showing whether something is a vector space.   Vector space verification   To decide whether a given set and operations is a vector space, proceed as follows.   Make explicit the underlying set of the proposed vector space.    Make explicit what the scalar multiplication and vector addition operations are.    Identify an element of that serves as the zero vector ( , satisfies ) and for each show that there is a vector satisfying .    Show that the two vector operations and our choice of zero vector and vector inverses satisfy the axioms of .        Vector space verification  Think of steps (1)-(3) of as the issuing of official declarations about the makeup of our proposed vector space: The underlying set shall be as stated ; We declare the vector operations thusly ; The zero vector shall be this element here, and vector inverses shall be assigned in this manner . Step (4) is where we get down to the nitty gritty of showing that the proposed vector space structure articulated in (1)-(3) does indeed satisfy all the necessary properties.  In each of the remaining examples below we carefully lay out the details of items (1)-(3) while often leaving much of the work of item (4) to you. You will meet these vector spaces frequently throughout the rest of your life. Each time you do, it will be helpful for orientation purposes to mentally run through items (1)-(3). Ask yourself: What is the underlying set? What are vector operations? What acts as the zero vector, and how do I assign vector inverses?    Fields are vector spaces   Show that a field is a vector space, where vector addition is field addition, and scalar multiplication is field multiplication.    The underlying set and operations have already been specified. We add that the field element will serve as the zero vector ( , we have ), and for each , its vector inverse will be the field additive inverse .  That our proposed vector space operations, zero vector, and vector inverses satisfy the axioms of now follows essentially immediately from the field axioms satisfied by ! For example, the vector space arithmetic axioms (i)-(ii), (v)-(viii) in this context are simply restatements that field addition is commutative and associative, that field multiplication distributes over field addition, that field multiplication is associative, and that satisfies the multiplicative identity property. Similarly, the zero vector identity is identical to the additive identity property of fields, giving us axiom (iii), and the vector inverse identity is identical to the additive inverse property of fields, giving us axiom (iv).     is a vector space   Let be a field, and let be the set of all pairs of elements of : , .  Define vector addition and scalar multiplication on as follows:   given , define ;    given and , define .   Show that is a vector space with respect to these two operations.    Let's follow the steps of . Once again, the underlying set and vector operations have been specified. We further declare that the zero vector of will be , and that given any , its vector inverse shall be . Let's verify some of the axioms. Let . We have , showing that axioms (i)-(ii) hold. Axioms (v)-(viii) follow in a similar manner, ultimately citing some arithmetic properties of itself. We leave those to the reader, and instead verify axioms (iii)-(iv). For all , we have , showing that satisfies the zero vector identity, and satifies the vector inverse identity for .     Vector space of -valued functions   Let be a field, and let be a set. We denote by or the set of all functions with domain and codomain .     Vector operations  Given functions and scalar , we let be the function in defined as for all , and we let be the function in defined as . The operations are called function addition and function scalar multiplication , respectively.    Zero vector  The zero vector of is the zero function  defined as for all .    Vector inverses  Given a function , its vector inverse is the function defined as for all .   We call , together with these vector operations, the space of functions from to .     Function spaces are vector spaces   Let be a field, and let be a set. The set is a vector space with respect to function addition and function scalar multiplication.    Left as a homework exercise.      Real-valued functions   Let be an interval in the real line. The vector operations on correspond to the function-arithmetic operations you met in precalculus and calculus: , given functions , their vector sum is the function defined as for all . Similarly, given a scalar and function , the vector scalar multiple is the function defined as for all .  In this context it is possible to visualize our vector operations in terms of the graphs of the functions on the interval .   Visualizing function arithmetic in    Visualizing   Visualizing function addition      Visualizing   Visualizing function scalar multiplication           Vector space properties  We end this section with a few elementary vector space properties. Since these statements involve a general vector space (as opposed to a specific type of vector space), we will make no assumptions about and the base field , other than that satisfies the vector space axioms and satisfies the field axioms.   Uniqueness of zero vector and inverses   Let be an -vector space.   The zero vector in is unique: , there is one and only one element of that satisfies .    Inverse vectors are unique: , for all there is one and only one vector satisfying .          If satisfies for all , then in particular, taking , we see that . But since (using the defining property of , we see that . We conclude that , as desired.    Let . Given we have .        Vector space properties   Let be an -vector space.   For all , we have .    For all , we have .    For all , we have .    For all and , if , then or .       We provide proofs of (1), leaving the rest as homework. Our proof is almost identical to a similar statement in . For any , we have . But then we have , as desired.      "
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
  "body": " Function spaces are vector spaces   Let be a field, and let be a set. The set is a vector space with respect to function addition and function scalar multiplication.    Left as a homework exercise.    "
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
  "body": " Vector space properties   Let be an -vector space.   For all , we have .    For all , we have .    For all , we have .    For all and , if , then or .       We provide proofs of (1), leaving the rest as homework. Our proof is almost identical to a similar statement in . For any , we have . But then we have , as desired.    "
},
{
  "id": "s_ntuples",
  "level": "1",
  "url": "s_ntuples.html",
  "type": "Section",
  "number": "1.5",
  "title": "Vector space of <span class=\"process-math\">\\(n\\)<\/span>-tuples",
  "body": " Vector space of -tuples   -tuples   -valued -tuples    set of -valued -tuples    Let be a field, and let be a positive integer. An -valued -tuple is a function . In this setting, we will use an alternative tuple notation , writing , where , the value of at , for all . We will also favor letters like to denote -tuples, as opposed to .  Given an -tuple , we call the length of , and for each index , we call the -th component (or coordinate , or entry , or term ) of .  The set of all -valued -tuples is denoted : , .    Observe that by definition, is just a special instance of our function space construction . In more detail, an -tuple is by definition a function defined as for all , and thus the set is precisely the function space , where . As a first convenient consequence of this fact, our definition of -tuples comes equipped with a well-defined notion of equality from their fundamental nature as functions: namely, we have if and only if for all . In other words, our rigorous notions of -tuples captures the often casually introduced notion of an ordered sequence . We record this as an official fact to make this prominent.   -tuple equality   Let be a field, and let be a positive integer. Given , we have .    Another consequence of being defined as for , is that, thanks to , automatically inherits the structure of a vector space. The theorem below makes this explicit, and rearticulates the function addition and scalar multiplication operations using tuple notation.   vector space structure   Let be a field, and let be a positive integer. The set of all -valued -tuples is a vector space with respect to the operations defined as for all and .         Special elements of    zero vector of     -th standard basis element of    Let be a field, and let be a positive integer.   Zero vector  The zero vector of , denoted (or for short), is the -tuple, all of whose entries are equal to : , .    Vector inverse  Given an -tuple , the vector inverse of , denoted , is the element of defined as .    Indicator vectors  For each , the -th standard basis element of , denoted , is the -tuple whose -th entry is equal to and whose -th entry is equal to for all .        Linear combination   Let be an -vector space, and let be a nonempty subset of . A linear combination of is a vector of the form , where and for all . The scalars appearing in are called the coefficients of the linear combination. The linear combination is trivial if for all , and nontrivial if for some .  In the special case where is described enumeratively as or , we will call a linear combination of a linear combination of the for short.  We will sometimes use sigma notation for linear combinations, writing for the linear combination of the vectors whose -th coefficient is .     Linear combination: -vectors   Show that every vector in is a linear combination of the standard basis vectors , , and .    Given any vector , we have .     Vector difference   Let be a vector space. Given vectors , we define their difference  as .      Visualizing  We will only explicitly visualize (or graph) elements of for and . However, these special cases bring to light an important point-vector duality in how we conceive of -tuples that carries over into higher values of . Fix for now. We will sometimes conceive of a triple as a point , in which case we will use capital letters to denote the triple ( , ), and will represent the point visually with respect to a coordinate system as the point in -space reached by starting at the origin and moving a directed distance units in the -direction, units in the -direction and units in the -direction.   Point visualization of triple. Made with GeoGebra .    Alternatively, when conceiving of a triple as a vector , we will use lowercase bold letters to denote it ( , or ), and represent it visually as a directed line segment ( , an arrow). In more detail, given the 3-vector , we choose an initial point  and represent as the directed line segment that starts at and ends at the point , the terminal point of . Note that in this manner we get infinitely-many different graphical representations of : one for each choice of starting point . Although these are technically different arrows (they have different starting points), we consider them to be equal as vectors . You can think of each particular choice of arrow-representation as an instance or incarnation of the vector . When the initial point of our arrow representation is chosen to be the origin , we have , where . We call the position vector of the point .   Vector visualization of triple . Drag to change the vector . Drag to change the initial point of . Made with GeoGebra .    The representation of vectors as arrows gives rise to the so-called tip-to-tail interpretation of vector addition. Let and . Starting with an initial point , we can represent as , where , and , where . But then we have , or alternatively, . In other words, if we choose our arrow representations so that the terminal point (the tip) of is placed at the initial point (the tail) of , then is represented by the arrow whose initial point is , and whose terminal point is reached by first traveling along , and then traveling along .   Tip-to-tail visualization of vector addition. Made with GeoGebra .    The tip-to-tail visualization of vector addition gives rise to a similar conceptualization of vector difference. Performing a little vector algebra on the definition , we see that . Using tip-to-tail terminology, this means if we represent and , then is the arrow that starts at the tip of and ends at the tip of . We thus have a tip-to-tip description of vector difference.   Tip-to-tip visualization of vector difference. Made with GeoGebra .    Next consider scalar multiplication. Given a vector and a scalar , the scalar multiple can be represented as an arrow that starts at and points along the line containing . As we will see in the next section, the length of the resulting arrow is multiplied by the factor , resulting in a stretched arrow if and a shrunk arrow if . Furthermore, if , then the arrow representing points in the same direction as ; if , it points in the opposite direction.   Visualization of scalar multiplication. Drag point labeled to change scalar. Made with GeoGebra .     "
},
{
  "id": "d_ntuples",
  "level": "2",
  "url": "s_ntuples.html#d_ntuples",
  "type": "Definition",
  "number": "1.5.1",
  "title": "<span class=\"process-math\">\\(F\\)<\/span>-valued <span class=\"process-math\">\\(n\\)<\/span>-tuples.",
  "body": " -valued -tuples    set of -valued -tuples    Let be a field, and let be a positive integer. An -valued -tuple is a function . In this setting, we will use an alternative tuple notation , writing , where , the value of at , for all . We will also favor letters like to denote -tuples, as opposed to .  Given an -tuple , we call the length of , and for each index , we call the -th component (or coordinate , or entry , or term ) of .  The set of all -valued -tuples is denoted : , .   "
},
{
  "id": "prop_ntuple_equality",
  "level": "2",
  "url": "s_ntuples.html#prop_ntuple_equality",
  "type": "Proposition",
  "number": "1.5.2",
  "title": "<span class=\"process-math\">\\(n\\)<\/span>-tuple equality.",
  "body": " -tuple equality   Let be a field, and let be a positive integer. Given , we have .   "
},
{
  "id": "th_ntuples_vector_space",
  "level": "2",
  "url": "s_ntuples.html#th_ntuples_vector_space",
  "type": "Theorem",
  "number": "1.5.3",
  "title": "<span class=\"process-math\">\\(F^n\\)<\/span> vector space structure.",
  "body": " vector space structure   Let be a field, and let be a positive integer. The set of all -valued -tuples is a vector space with respect to the operations defined as for all and .       "
},
{
  "id": "d_tuples_special_elements",
  "level": "2",
  "url": "s_ntuples.html#d_tuples_special_elements",
  "type": "Definition",
  "number": "1.5.4",
  "title": "Special elements of <span class=\"process-math\">\\(F^n\\)<\/span>.",
  "body": " Special elements of    zero vector of     -th standard basis element of    Let be a field, and let be a positive integer.   Zero vector  The zero vector of , denoted (or for short), is the -tuple, all of whose entries are equal to : , .    Vector inverse  Given an -tuple , the vector inverse of , denoted , is the element of defined as .    Indicator vectors  For each , the -th standard basis element of , denoted , is the -tuple whose -th entry is equal to and whose -th entry is equal to for all .      "
},
{
  "id": "d_lin_comb",
  "level": "2",
  "url": "s_ntuples.html#d_lin_comb",
  "type": "Definition",
  "number": "1.5.5",
  "title": "Linear combination.",
  "body": " Linear combination   Let be an -vector space, and let be a nonempty subset of . A linear combination of is a vector of the form , where and for all . The scalars appearing in are called the coefficients of the linear combination. The linear combination is trivial if for all , and nontrivial if for some .  In the special case where is described enumeratively as or , we will call a linear combination of a linear combination of the for short.  We will sometimes use sigma notation for linear combinations, writing for the linear combination of the vectors whose -th coefficient is .   "
},
{
  "id": "ss_ntuples-9",
  "level": "2",
  "url": "s_ntuples.html#ss_ntuples-9",
  "type": "Example",
  "number": "1.5.6",
  "title": "Linear combination: <span class=\"process-math\">\\(n\\)<\/span>-vectors.",
  "body": " Linear combination: -vectors   Show that every vector in is a linear combination of the standard basis vectors , , and .    Given any vector , we have .   "
},
{
  "id": "d_vec_difference",
  "level": "2",
  "url": "s_ntuples.html#d_vec_difference",
  "type": "Definition",
  "number": "1.5.7",
  "title": "Vector difference.",
  "body": " Vector difference   Let be a vector space. Given vectors , we define their difference  as .   "
},
{
  "id": "fig_point",
  "level": "2",
  "url": "s_ntuples.html#fig_point",
  "type": "Figure",
  "number": "1.5.8",
  "title": "",
  "body": " Point visualization of triple. Made with GeoGebra .   "
},
{
  "id": "ss_Rn_visual-4",
  "level": "2",
  "url": "s_ntuples.html#ss_Rn_visual-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "initial point terminal point position vector "
},
{
  "id": "fig_vec_vis",
  "level": "2",
  "url": "s_ntuples.html#fig_vec_vis",
  "type": "Figure",
  "number": "1.5.9",
  "title": "",
  "body": " Vector visualization of triple . Drag to change the vector . Drag to change the initial point of . Made with GeoGebra .   "
},
{
  "id": "fig_tip_tail",
  "level": "2",
  "url": "s_ntuples.html#fig_tip_tail",
  "type": "Figure",
  "number": "1.5.10",
  "title": "",
  "body": " Tip-to-tail visualization of vector addition. Made with GeoGebra .   "
},
{
  "id": "fig_tip_tip",
  "level": "2",
  "url": "s_ntuples.html#fig_tip_tip",
  "type": "Figure",
  "number": "1.5.11",
  "title": "",
  "body": " Tip-to-tip visualization of vector difference. Made with GeoGebra .   "
},
{
  "id": "fig_scal_mult",
  "level": "2",
  "url": "s_ntuples.html#fig_scal_mult",
  "type": "Figure",
  "number": "1.5.12",
  "title": "",
  "body": " Visualization of scalar multiplication. Drag point labeled to change scalar. Made with GeoGebra .   "
},
{
  "id": "s_span_ind",
  "level": "1",
  "url": "s_span_ind.html",
  "type": "Section",
  "number": "1.6",
  "title": "Span and linear independence",
  "body": " Span and linear independence   An -vector space is typically a very large set. Indeed, if the field is infinite ( , , , ), and is not the zero space, then will also be infinite (as you can show with the help of ). In developing our theory of vector spaces, one thing we will be concerned with is whether a smallish subset can be used to generate the larger vector space , where by generate we mean that every element of can be written as a linear combination of elements of . Using the terminology introduced below, we call a spanning set of in this case, and write .  Take the real vector space , for example. We saw in the last section that the set generates in precisely this sense. The utility of this state of affairs, is that any linear algebraic question about the (uncountably) infinite vector space can usually be reduced to a simple algebraic question about our finite set .  So where does linear independence fit in this picture. As you will quickly see, in general a nonzero vector space will have many different spanning sets. For example, the sets are all examples of spanning sets of . But with the aim of finding as small a spanning set as possible, we see that is preferable to and . Put another way, the spanning sets and have what you might call redundancies: , do we really need to include when it is already a linear combination of the ? This gives way to a host of important questions we could ask. Can we do better than ? Is there a spanning set of with fewer than three elements? It turns out that the concept of linear independence defined below is exactly what we need to answer these redundancy-type questions.    Span  As defined below, span of a set of vectors is just the set of all linear combinations of those vectors.   Span   Let be a subset of the -vector space . The span of , denoted , is defined as follows.   If , then we define .    If , then we define as the set of all linear combinations of the vectors in : , .        Let be tuple of vectors in .   The zero vector is always an element of . We treat the cases where is empty or nonempty separately.  If , then by definition.  If , then it contains some element , in which case by definition contains all its scalar multiples , . By , we have , showing that .    The set is contained in . Indeed, given any , we have .    For any singleton , we have , the set of all scalar multiples of .       Examples in   Let . For subset , identify as a familiar geometric object. Use the visualization methods discussed in .              ,                                , the set containing just the origin, by definition.     is the set of all scalar multiples of . Thus , the set containing just the origin.     is the set of all scalar multiples of the nonzero vector . Geometrically, this is the line that passes through the the origin and the point .    By definition .    By definition . It is easy to see that this set is equal to , the line with equation . Indeed, we have , since using our description above any element of is of the form , which satisfies , and thus lies in . Going the other way, given any , we have , where and , showing and thus . Since and , we conclude that .  Note that in this case we have , and thus that the vector is in some sense redundant with respect to the span operation.    By definition . Claim: . Since clearly, , it remains only to show that : , we must show that given any there exist such that , or . Interesting. To answer the question we need to show that for all , the linear system has a solution . In the next section we will develop a systematic approach for answering such questions. For now we can proceed in an ad hoc manner: namely, the first equation implies ; substituting this for in the second equation yields the equality . We conclude that is a solution. Tracing back through our logic we conclude that , and thus that for all , as desired.    From our remark above, we have . Since by definition, we conclude that .        Spanning set   A subset of an -vector space is called a spanning set (or is said to span ) if .    When getting to know a vector space, one of the first things we will do is identify a convenient spanning set. Below we identify some standard spanning sets for some of the vector spaces we have introduced.   Standard spanning sets  For most of the vector spaces we've introduced there is a natural spanning set that comes to mind. We will refer to these loosely as standard spanning sets.   Zero space  Let . By definition the empty set is a spanning set of . We call this the standard spanning set of the zero space.    -tuples  Let . We claim is a spanning set for , which we call its standard spanning set. Indeed, given any it is easy to see that .    Function space, finite domain  Recall that by definition is simply notation for the function space , where . Thinking of the elements as functions , we see they are defined as if and , otherwise. Such functions are called indicator functions (or characteristic functions ) on the set . As such we can generalize our result about as follows.  Let , where is a finite nonempty set. For each define the function as follows: . We claim that the set is a spanning set for . Indeed given any function , consider the function . For all , we have . We conclude that and thus that .       A crucial detail in the last example was that was a finite set . Indeed, since by definition a linear combination is a finite sum of scalar multiples of vectors, the expression only makes sense if is finite. Since there is no finiteness condition on in the definition of , however, we can still ask whether is a spanning set of in general. As the next example shows, the answer is no!   Function space, infinite domain   Let be a field, let , the set of functions from to , and for all , let be the indicator function defined as if and if . Show that does not span by producing an explicit function that cannot be written as a linear combination of the .    Consider the function defined by for all . We claim that . In fact, we will show that any satisfies for all but finitely many . It then follows that since is nonzero for all  .  To prove the claim, note that by definition, any , is of the form . But then for all in the infinite set , we have , showing that for all but finitely many .      Linear independence  As mentioned above, the notion of linear independence is precisely what we need to guarantee that a given spanning set has no redundancies . This is not immediately evident from , but will be made clear in .  It turns out that, unlike the notion of span, linear independence is best understood as a property not of a set of vectors, but rather of a tuple of vectors. As such, we will first go full tuple here before getting to the actual definition.   Tuples   Let and be sets. An -valued tuple indexed by is a function . The set of all -valued tuples indexed by is denoted : , . In this setting we will use an alternative tuple notation , writing to denote the function defined as for all .  Given a tuple , we call its -th component (or coordinate , or entry , or term ).  If is a finite set of cardinality , we say that has length  . Otherwise, we say that has infinite length.  In the case where , there is exactly one tuple in that we call the empty tuple , denoted . Note that the the empty tuple has length zero.    Having gotten the preliminaries out of the way, we can at last define what it means for a tuple of vectors to be linearly independent.   Linear independence   Let be an -vector space. A tuple of vectors of is linearly independent if there is no nontrivial linear combination of the equal to . In more detail, is linearly independent if for any tuple for which for all but finitely many indices , if , then for all . Using logical shorthand: . We say is linearly dependent if it is not linearly independent: , if there is a nontrivial linear combination .  Lastly, observe that in the case where , the empty tuple is linearly independent as it satisfies the implication vacuously.     The notation requires some clarification. When happens to be finite , there is issue. But what about when is infinite? In this case, we appear to be in trouble, since has infinitely many terms. We are saved, however, by the condition on the tuple of scalars : namely, that for all but finitely many . That means that all but finitely many terms of are nonzero, yielding a well-defined linear combination.  In any case, we will mostly be dealing with finite index sets, like , in which case the all but finitely many condition is automatic.     Linear independence   For each tuple of the given vector space , decide whether is linearly independent.    ,      , , where as usual, is the -th indicator function.     , , where .          The tuple is linearly independent. We show that the only linear combination of the equal to is the trivial one: .    The tuple is linearly independent. Before showing this, take a moment to orient yourself in this vector space: in particular, note that the elements of the vector space are functions, and that the zero vector is the zero function, denoted . Note also that we make no assumptions on : in particular, our proof should work whether or not is infinite.  Take any tuple satisfying for all but finitely many . We have . We conclude that is linearly independent.  Observe that the previous example is just the special case of this example where , since the tuple is really just the indicator function in disguise!    We observer, by inspection that , and hence that is a nontrivial linear combination of the equal to . We conclude that the tuple is linearly dependent.  You might be somewhat uncomfortable with this by inspection approach. Fear not! We will soon develop a procedure for solving systems of linear equations that we can then apply to answering questions like this in a systematic manner.       It will be useful to extend out notion of spans of sets of vectors to spans of tuples of vectors. Now is as good a place as any to get that definition out of the way.   Span of tuple of vectors   Let be a tuple of vectors in the -vector space . We define the span of , denoted , to be the span of the set : , . Note that in the case of the empty tuple, we have .      Span and independence   Let be a nonempty tuple of vectors of the vector space . The following statements are equivalent.    is linearly dependent.    There is an index such that can be written as a linear combination of the other 's: , there exists and and a finite set of indices not containing , such that for some .  Additionally, when this is the case we have .       If the tuple is linearly dependent, then there is a nontrivial linear combination , where . Since the linear combination is nontrivial, we have for some . After a little vector arithmetic, we can then solve for : . This shows is a linear combination of the vectors , where , and thus that .  Conversely, if we have , then we have for some and , whence it follows that is a nontrivial linear combination of the equal to . We conclude that is linearly dependent.  We have thus proved that is linearly dependent if and only if some can be written as a linear combination of the other vectors . We now prove that when this is the case, we have . It is clear that . Indeed, more generally, if , then clearly , since any linear combination of the smaller set is also a linear combination of the larger set .  For the other direction, take . By definition, we can write as a finite linear combination of the vectors . It follows that can write , where is a finite subset of not containing . (Note that is allowed to be 0 here.) Since is assumed to be a linear combination of the other vectors , we can express as in , in which case we have . Since for all , and since , we see that this is a linear combination of the tuple . Thus , showing that , as desired.      "
},
{
  "id": "d_span",
  "level": "2",
  "url": "s_span_ind.html#d_span",
  "type": "Definition",
  "number": "1.6.1",
  "title": "Span.",
  "body": " Span   Let be a subset of the -vector space . The span of , denoted , is defined as follows.   If , then we define .    If , then we define as the set of all linear combinations of the vectors in : , .      "
},
{
  "id": "rm_span",
  "level": "2",
  "url": "s_span_ind.html#rm_span",
  "type": "Remark",
  "number": "1.6.2",
  "title": "",
  "body": " Let be tuple of vectors in .   The zero vector is always an element of . We treat the cases where is empty or nonempty separately.  If , then by definition.  If , then it contains some element , in which case by definition contains all its scalar multiples , . By , we have , showing that .    The set is contained in . Indeed, given any , we have .    For any singleton , we have , the set of all scalar multiples of .     "
},
{
  "id": "eg_span_2space",
  "level": "2",
  "url": "s_span_ind.html#eg_span_2space",
  "type": "Example",
  "number": "1.6.3",
  "title": "Examples in <span class=\"process-math\">\\(\\R^2\\)<\/span>.",
  "body": " Examples in   Let . For subset , identify as a familiar geometric object. Use the visualization methods discussed in .              ,                                , the set containing just the origin, by definition.     is the set of all scalar multiples of . Thus , the set containing just the origin.     is the set of all scalar multiples of the nonzero vector . Geometrically, this is the line that passes through the the origin and the point .    By definition .    By definition . It is easy to see that this set is equal to , the line with equation . Indeed, we have , since using our description above any element of is of the form , which satisfies , and thus lies in . Going the other way, given any , we have , where and , showing and thus . Since and , we conclude that .  Note that in this case we have , and thus that the vector is in some sense redundant with respect to the span operation.    By definition . Claim: . Since clearly, , it remains only to show that : , we must show that given any there exist such that , or . Interesting. To answer the question we need to show that for all , the linear system has a solution . In the next section we will develop a systematic approach for answering such questions. For now we can proceed in an ad hoc manner: namely, the first equation implies ; substituting this for in the second equation yields the equality . We conclude that is a solution. Tracing back through our logic we conclude that , and thus that for all , as desired.    From our remark above, we have . Since by definition, we conclude that .      "
},
{
  "id": "d_spanning_tuple",
  "level": "2",
  "url": "s_span_ind.html#d_spanning_tuple",
  "type": "Definition",
  "number": "1.6.4",
  "title": "Spanning set.",
  "body": " Spanning set   A subset of an -vector space is called a spanning set (or is said to span ) if .   "
},
{
  "id": "eg_spanning_sets",
  "level": "2",
  "url": "s_span_ind.html#eg_spanning_sets",
  "type": "Example",
  "number": "1.6.5",
  "title": "Standard spanning sets.",
  "body": " Standard spanning sets  For most of the vector spaces we've introduced there is a natural spanning set that comes to mind. We will refer to these loosely as standard spanning sets.   Zero space  Let . By definition the empty set is a spanning set of . We call this the standard spanning set of the zero space.    -tuples  Let . We claim is a spanning set for , which we call its standard spanning set. Indeed, given any it is easy to see that .    Function space, finite domain  Recall that by definition is simply notation for the function space , where . Thinking of the elements as functions , we see they are defined as if and , otherwise. Such functions are called indicator functions (or characteristic functions ) on the set . As such we can generalize our result about as follows.  Let , where is a finite nonempty set. For each define the function as follows: . We claim that the set is a spanning set for . Indeed given any function , consider the function . For all , we have . We conclude that and thus that .      "
},
{
  "id": "eg_span_func_space_infinite",
  "level": "2",
  "url": "s_span_ind.html#eg_span_func_space_infinite",
  "type": "Example",
  "number": "1.6.6",
  "title": "Function space, infinite domain.",
  "body": " Function space, infinite domain   Let be a field, let , the set of functions from to , and for all , let be the indicator function defined as if and if . Show that does not span by producing an explicit function that cannot be written as a linear combination of the .    Consider the function defined by for all . We claim that . In fact, we will show that any satisfies for all but finitely many . It then follows that since is nonzero for all  .  To prove the claim, note that by definition, any , is of the form . But then for all in the infinite set , we have , showing that for all but finitely many .   "
},
{
  "id": "d_tuples_redux",
  "level": "2",
  "url": "s_span_ind.html#d_tuples_redux",
  "type": "Definition",
  "number": "1.6.7",
  "title": "Tuples.",
  "body": " Tuples   Let and be sets. An -valued tuple indexed by is a function . The set of all -valued tuples indexed by is denoted : , . In this setting we will use an alternative tuple notation , writing to denote the function defined as for all .  Given a tuple , we call its -th component (or coordinate , or entry , or term ).  If is a finite set of cardinality , we say that has length  . Otherwise, we say that has infinite length.  In the case where , there is exactly one tuple in that we call the empty tuple , denoted . Note that the the empty tuple has length zero.   "
},
{
  "id": "d_lin_ind",
  "level": "2",
  "url": "s_span_ind.html#d_lin_ind",
  "type": "Definition",
  "number": "1.6.8",
  "title": "Linear independence.",
  "body": " Linear independence   Let be an -vector space. A tuple of vectors of is linearly independent if there is no nontrivial linear combination of the equal to . In more detail, is linearly independent if for any tuple for which for all but finitely many indices , if , then for all . Using logical shorthand: . We say is linearly dependent if it is not linearly independent: , if there is a nontrivial linear combination .  Lastly, observe that in the case where , the empty tuple is linearly independent as it satisfies the implication vacuously.   "
},
{
  "id": "ss_lin_ind-7",
  "level": "2",
  "url": "s_span_ind.html#ss_lin_ind-7",
  "type": "Remark",
  "number": "1.6.9",
  "title": "",
  "body": " The notation requires some clarification. When happens to be finite , there is issue. But what about when is infinite? In this case, we appear to be in trouble, since has infinitely many terms. We are saved, however, by the condition on the tuple of scalars : namely, that for all but finitely many . That means that all but finitely many terms of are nonzero, yielding a well-defined linear combination.  In any case, we will mostly be dealing with finite index sets, like , in which case the all but finitely many condition is automatic.  "
},
{
  "id": "eg_lin_ind",
  "level": "2",
  "url": "s_span_ind.html#eg_lin_ind",
  "type": "Example",
  "number": "1.6.10",
  "title": "Linear independence.",
  "body": " Linear independence   For each tuple of the given vector space , decide whether is linearly independent.    ,      , , where as usual, is the -th indicator function.     , , where .          The tuple is linearly independent. We show that the only linear combination of the equal to is the trivial one: .    The tuple is linearly independent. Before showing this, take a moment to orient yourself in this vector space: in particular, note that the elements of the vector space are functions, and that the zero vector is the zero function, denoted . Note also that we make no assumptions on : in particular, our proof should work whether or not is infinite.  Take any tuple satisfying for all but finitely many . We have . We conclude that is linearly independent.  Observe that the previous example is just the special case of this example where , since the tuple is really just the indicator function in disguise!    We observer, by inspection that , and hence that is a nontrivial linear combination of the equal to . We conclude that the tuple is linearly dependent.  You might be somewhat uncomfortable with this by inspection approach. Fear not! We will soon develop a procedure for solving systems of linear equations that we can then apply to answering questions like this in a systematic manner.      "
},
{
  "id": "d_span_tuple",
  "level": "2",
  "url": "s_span_ind.html#d_span_tuple",
  "type": "Definition",
  "number": "1.6.11",
  "title": "Span of tuple of vectors.",
  "body": " Span of tuple of vectors   Let be a tuple of vectors in the -vector space . We define the span of , denoted , to be the span of the set : , . Note that in the case of the empty tuple, we have .   "
},
{
  "id": "th_span_ind",
  "level": "2",
  "url": "s_span_ind.html#th_span_ind",
  "type": "Theorem",
  "number": "1.6.12",
  "title": "Span and independence.",
  "body": " Span and independence   Let be a nonempty tuple of vectors of the vector space . The following statements are equivalent.    is linearly dependent.    There is an index such that can be written as a linear combination of the other 's: , there exists and and a finite set of indices not containing , such that for some .  Additionally, when this is the case we have .       If the tuple is linearly dependent, then there is a nontrivial linear combination , where . Since the linear combination is nontrivial, we have for some . After a little vector arithmetic, we can then solve for : . This shows is a linear combination of the vectors , where , and thus that .  Conversely, if we have , then we have for some and , whence it follows that is a nontrivial linear combination of the equal to . We conclude that is linearly dependent.  We have thus proved that is linearly dependent if and only if some can be written as a linear combination of the other vectors . We now prove that when this is the case, we have . It is clear that . Indeed, more generally, if , then clearly , since any linear combination of the smaller set is also a linear combination of the larger set .  For the other direction, take . By definition, we can write as a finite linear combination of the vectors . It follows that can write , where is a finite subset of not containing . (Note that is allowed to be 0 here.) Since is assumed to be a linear combination of the other vectors , we can express as in , in which case we have . Since for all , and since , we see that this is a linear combination of the tuple . Thus , showing that , as desired.   "
},
{
  "id": "s_systems",
  "level": "1",
  "url": "s_systems.html",
  "type": "Section",
  "number": "1.7",
  "title": "Systems of linear equations",
  "body": " Systems of linear equations   In computing examples of within vector spaces, we were lead naturally to a system of linear equations . In the next few sections we dedicate ourselves to the study of such systems. In addition to yielding a complete theory of the solutions to linear systems, as well as a systematic procedure for determining (and expressing) these solutions, our study will also give us more opportunities to practice our proof writing.    Systems of linear equations  Let's begin with a motivating example.   Span of two vectors   Let , where and , and let .   Describe visually the set , using our geometric interpretations of vector operations. What sort of geometric is ?    Show that can be described as the set of all solutions to the equation : , .       First observe that contains , the line passing through and , and , the line passing through and . Next, an arbitrary element of can be visualized as traveling a along the line through a certain distance and direction (determined by the scalar ), and then traveling in a line parallel to the line through a certain distance and direction (determined by the scalar ). Put another way, starting with the point on , adding arbitrary scalar multiples of , yields an entire line passing through and parallel to . This gives rise to a conception of as a union of a bunch of lines parallel to , obtained by translation in the direction .      Linear equations  linear equation   Let be a field. A linear expression over in the unknowns is an expression of the form , where .  A linear equation in the unknowns is an equation that can be simplified, using only addition and subtraction, to an equation of the form which we call its standard form . An equation in the unknowns is nonlinear if it cannot be simplified to the form using only addition and subtraction.  A linear equation in standard form is nontrivial if for some . It is homogeneous if and nonhomogeneous if .     Linear and nonlinear equations      Consider . This is a linear equation in the unknowns . Its standard form is . Since the right-hand side is nonzero, we see that the equation is nonhomogeneous.    The equation is a nonlinear equation in the unknowns and .    The equation is nonlinear. Interestingly, however, the set of solutions to this equation is equal to the set of solutions to the linear equation . This illustrates that is concerned strictly with the form of an equation, and not with the solutions to that equation.       We next provide a precise definition of a solution of a linear equation.   Solutions to linear equations   Let be a field. A solution to a linear equation over  is an -tuple such that . We say  solves the equation in this case.    A system of linear equations (or linear system), is simply a collection of linear equations.   Systems of linear equations  linear system   Let bea field. A system of linear equations (or linear system ) over is a set of linear equations. The scalars are called the coefficients of the system. The linear system is homogeneous if each of its equations is homogeneous: , if for all .  A solution to the system is an -tuple that is a solution to each of the system's equations. We say  solves the system in this case.  A linear system is consistent if a solution to the system exists, and inconsistent otherwise.    When displaying a system of equations in the unknowns , we typically write each equation in standard form and align the corresponding terms of each equation into columns: A homogeneous system is thus typically written as:    Displaying linear systems  As indicated in , when displaying a system of equations in the unknowns , we typically write each individual equation in standard form and align the corresponding terms of each equation into columns. The presence of multiple equations and multiple unknowns necessitates the use of double-indexing for the coefficients appearing in the system. The following breakdown will hopefully help you orient yourself with respect to the double-indexing:   The appearing in and indicates the -th row in our displayed system, or equivalently, the -th equation.    The appearing in indicates the -th column in our displayed system, which is associated to the -th variable, for .       Solutions to elementary systems   For each linear system over below, determine the set of solutions to the system.                 The first equation implies . Substituting for in the second equation, we would then have , a contradiction. Thus there are no solutions: i.e., is the empty set, denoted or .    The first equation implies . Making this substitution in the second equation yields , or . Thus is the unique solution, and .    The second equation is just twice the first. It follows that both equations have the exact same set of solutions, and so we need only find all solutions to . Note that we can set for any real number . Solving for in terms of we get for any , and thus , an infinite set!       The solutions to the the three linear systems of can be described qualitatively as follows: nonexistent, unique, and infinite. This turns out to be characteristic more generally of any linear system over an infinite field . In other words, given a linear system over an infinite field , the set of solutions will take one of three qualitative forms:    : , there are no solutions and the system is inconsistent.     contains exactly one element: , there is a unique solution.     is infinite: , there are infinitely many solutions.   We will prove this in full rigor later. However, we get an inkling of why this should be true in the case of two or three unknowns, where we can put our geometric understanding to work. For example, consider a general system of equations in just two unknowns and : Assume for simplicity that each equation in the system is nontrivial, and thus that for each , the -th equation of this system defines a line . A solution of the system, being a solution of each equation , must lie on each of the lines . In other words, the set of solutions to the system is precisely the set of points lying in the common intersection of all of these lines. Thus our qualitative description of the set of solutions to this system amounts to the geometric fact that the intersection of any collection of lines in is either empty, contains a unique point, or is infinite. We illustrate this by reexamining from a geometric point of view.   Solutions to elementary systems (again)   For each system in , use a geometric argument to determine how many solutions there are.    We proceed geometrically by observing that each equation in a given system defines a line, that a pair is a solution to the given equation if and only if it is a point on the corresponding line, and thus that a pair is a solution to both equations if and only if it is a point lying on both lines. Thus, geometrically speaking, the set of solutions to a given system is equal to the intersection of the two corresponding lines.   In this case the two lines and are parallel (and not equal to one another). It follows that their intersection is empty. We conclude that there are no solutions to the system.    In this case the two lines and are nonparallel. It follows that they intersect in a single point. We conclude that the system has a unique solution.    In this case the two equations and define the same line , and thus that their intersection is also equal to . The set of solutions to the system is then equal to the set of points of , which is infinite.         Row operations  In we were able to combine some simple logic and arithmetic to solve each system completely. Of course, things get more complicated as the number of equations and\/or unknowns in the system increases.  For example, consider the system Observe first that the triple is not a solution to the system; one easily checks that is satisfies the first and second equations, but not the third. Similarly, it is easy to verify that and are both solutions to the system. The question remains: How do we find all solutions to the linear system in a systematic way?   Notice the somewhat funny spacing in . This is in force in order to align the unknowns in separate columns. In general, when handed a linear system in the wild, your first step should be to write each equation in standard form, and make sure the unknowns are aligned vertically in this manner.    Some systems are easier to solve than others  Below you find two systems of three equations in three unknowns. The staircase pattern of allows us to solve easily by backwards substitution . In more detail:   Equation 3 in tells us that .    Now substitute into Equation 2 of and solve for to get .    Finally, substitute and into Equation 1 of and solve for to get . We conclude that is a solution to .    Furthermore, since at each step we had no choice in the matter ( must be equal to 2, then must be equal to 4, etc.), we see that in fact is the only solution to .   Our method for solving a more complicated system, like above, will be to transform it to a simpler system like .   Key point . In order for this method to work, we need to make sure that the transformed system has exactly the same solutions as the original system! To this end we will restrict our permissible transformations to the elementary operations define below.   Elementary operations on linear systems  elementary operations linear systems  elementary operations linear systems scalar multiplication  elementary operations linear systems equation swap  elementary operations linear systems equation addition  row reduction of systems   An elementary operation (or elementary row operation ) is one of the three types of operations on linear systems described below.   Scalar multiplication  Multiply an equation by a nonzero number : i.e., replace the -th equation of the system with for . Note: is the result of multiplying the left and right sides of equation by .    Equation swap  Swap the -th and -th equations of the system, : i.e., replace equation of the system with , and replace equation with .    Equation addition  Add a multiple of one equation to another: i.e., replace with for some , , and .   The act of transforming a system of equations using elementary operations is called reduction (or row reduction ).    After reducing a linear system using elementary operations, we are left with a new system . The systems and will generally look very different from one another. Note, however, that the two systems will have the same number of equations, and the same number of variables. More importantly, the two systems will have identical sets of solutions; that is, the set of solutions of the new system is identical to the set of solutions to !  To convince ourselves of this last assertion, it suffices to show that the application of any one of these elementary row operations produces a new system with exactly the same set of solutions as ; if this is so, then performing any finite sequence of elementary row operations must also preserve the set of solutions in this sense. makes this argument official. First we introduce the notion of equivalent linear systems , mainly to spare ourselves from the mouthful that is obtained by applying a finite sequence of elementary row operations .   Row equivalent linear systems   We say two systems of linear equations are row equivalent if the one can be obtained from the other by a finite sequence of elementary operations.     Row equivalence theorem   Row equivalent systems of linear equations have identical sets of solutions.    We prove by induction that if system is the result of applying elementary operations to system , , then and have the same set of solutions.   Base case:  In this case (we have applied no operations) and the statement is obvious.    Induction step  Assume that applying a sequence of elementary operations to a linear system preserves the set of solutions.  Suppose is the result of applying elementary operations to the system . Let be the result of applying the first of these operations. By the induction hypothesis, systems and have the same set of solutions.  Since the system is obtained from by applying exactly one elementary operation, it now suffices to show that applying a single row operation does not change the set of solutions to a linear system. We now show this for each of the three types of elementary operations. To this end, let be the starting linear system , let be the system obtained from by applying the elementary operation in question, and let denote the -th equation of .    Scalar multiplication  Suppose is obtained from by multiplying the -th equation of by the nonzero scalar . In this case for all , and for some . Since only the -th equation has changed, it suffices to show that is a solution to if and only if is a solution to . Let's prove each direction of this if and only if separately.  If satisfies , then . Multiplying both sides by we see that and hence that is also a solution of .  For the other direction, if satisfies , then Now, since , we can multiply both sides of this equation by to see that and hence that is a solution to .    Row swap  Suppose is obtained from by swapping equations and . In this case the systems and consist of the same equations, just written in a different order. Thus the -tuple satisfies if and only if it satisfies each of the equations , if and only if it satisfies each of the equations , since these are the same equations! It follows that is a solution of if and only if it is a solution to .    Row addition  Suppose is the system satisfying for all , and for some scalar and integer . Expanding out in terms of the coefficients of yields . If satisfies , then it satisfies and , in which case, evaluating the left hand side of at  , which is equal to (the right side of ) since . This shows that satisfies , and hence is a solution to . Now suppose satisfies . Since satisfies , we have Since satisfies , we have . Substituting into the equation above we get , and hence . This shows that satisfies , and thus that satisfies .   We conclude that and have the same set of solutions, as desired.      Complete example  Consider again the linear system   We transform the system as as follows:   Now put the logic together. Our original linear system was transformed by a sequence of elementary row operations to a new system :   We saw already that the second system has exactly one solution, namely the triple .  Since transforming a system by row operations preserves solutions, the first and second systems have exactly the same solutions .  Thus is the only solution to the original system!    Elementary operation notation  As we will see later, keeping track of the exact sequence of row operations is important in some situations. The notation used in the last example is useful for this bookkeeping. Let's explicate the notation somewhat.  The notation indicates that system is obtained from by replacing equation with .  The notation indicates that system is obtained from by swapping rows and .  The notation indicates that system is obtained from by replacing equation with .    Mandate  You may be tempted to do multiple operations in a single step during this procedure. Resist this temptation for now until we have a better understanding of things.  Furthermore, if later on you do give in to this temptation, make sure that the two (or more row operations) you perform are independent of one another. For example, do not swap with and replace with in the same step.    "
},
{
  "id": "eg_span_two_vectors",
  "level": "2",
  "url": "s_systems.html#eg_span_two_vectors",
  "type": "Example",
  "number": "1.7.1",
  "title": "Span of two vectors.",
  "body": " Span of two vectors   Let , where and , and let .   Describe visually the set , using our geometric interpretations of vector operations. What sort of geometric is ?    Show that can be described as the set of all solutions to the equation : , .       First observe that contains , the line passing through and , and , the line passing through and . Next, an arbitrary element of can be visualized as traveling a along the line through a certain distance and direction (determined by the scalar ), and then traveling in a line parallel to the line through a certain distance and direction (determined by the scalar ). Put another way, starting with the point on , adding arbitrary scalar multiples of , yields an entire line passing through and parallel to . This gives rise to a conception of as a union of a bunch of lines parallel to , obtained by translation in the direction .    "
},
{
  "id": "d_lin-equation",
  "level": "2",
  "url": "s_systems.html#d_lin-equation",
  "type": "Definition",
  "number": "1.7.2",
  "title": "Linear equations.",
  "body": " Linear equations  linear equation   Let be a field. A linear expression over in the unknowns is an expression of the form , where .  A linear equation in the unknowns is an equation that can be simplified, using only addition and subtraction, to an equation of the form which we call its standard form . An equation in the unknowns is nonlinear if it cannot be simplified to the form using only addition and subtraction.  A linear equation in standard form is nontrivial if for some . It is homogeneous if and nonhomogeneous if .   "
},
{
  "id": "ss_linear_equations-5",
  "level": "2",
  "url": "s_systems.html#ss_linear_equations-5",
  "type": "Example",
  "number": "1.7.3",
  "title": "Linear and nonlinear equations.",
  "body": " Linear and nonlinear equations      Consider . This is a linear equation in the unknowns . Its standard form is . Since the right-hand side is nonzero, we see that the equation is nonhomogeneous.    The equation is a nonlinear equation in the unknowns and .    The equation is nonlinear. Interestingly, however, the set of solutions to this equation is equal to the set of solutions to the linear equation . This illustrates that is concerned strictly with the form of an equation, and not with the solutions to that equation.      "
},
{
  "id": "d_lin_eq_sol",
  "level": "2",
  "url": "s_systems.html#d_lin_eq_sol",
  "type": "Definition",
  "number": "1.7.4",
  "title": "Solutions to linear equations.",
  "body": " Solutions to linear equations   Let be a field. A solution to a linear equation over  is an -tuple such that . We say  solves the equation in this case.   "
},
{
  "id": "d_lin-sys",
  "level": "2",
  "url": "s_systems.html#d_lin-sys",
  "type": "Definition",
  "number": "1.7.5",
  "title": "Systems of linear equations.",
  "body": " Systems of linear equations  linear system   Let bea field. A system of linear equations (or linear system ) over is a set of linear equations. The scalars are called the coefficients of the system. The linear system is homogeneous if each of its equations is homogeneous: , if for all .  A solution to the system is an -tuple that is a solution to each of the system's equations. We say  solves the system in this case.  A linear system is consistent if a solution to the system exists, and inconsistent otherwise.   "
},
{
  "id": "ss_linear_equations-11",
  "level": "2",
  "url": "s_systems.html#ss_linear_equations-11",
  "type": "Remark",
  "number": "1.7.6",
  "title": "Displaying linear systems.",
  "body": " Displaying linear systems  As indicated in , when displaying a system of equations in the unknowns , we typically write each individual equation in standard form and align the corresponding terms of each equation into columns. The presence of multiple equations and multiple unknowns necessitates the use of double-indexing for the coefficients appearing in the system. The following breakdown will hopefully help you orient yourself with respect to the double-indexing:   The appearing in and indicates the -th row in our displayed system, or equivalently, the -th equation.    The appearing in indicates the -th column in our displayed system, which is associated to the -th variable, for .     "
},
{
  "id": "s_systems_eg_2eqns2varss",
  "level": "2",
  "url": "s_systems.html#s_systems_eg_2eqns2varss",
  "type": "Example",
  "number": "1.7.7",
  "title": "Solutions to elementary systems.",
  "body": " Solutions to elementary systems   For each linear system over below, determine the set of solutions to the system.                 The first equation implies . Substituting for in the second equation, we would then have , a contradiction. Thus there are no solutions: i.e., is the empty set, denoted or .    The first equation implies . Making this substitution in the second equation yields , or . Thus is the unique solution, and .    The second equation is just twice the first. It follows that both equations have the exact same set of solutions, and so we need only find all solutions to . Note that we can set for any real number . Solving for in terms of we get for any , and thus , an infinite set!      "
},
{
  "id": "eg_system_of_lines",
  "level": "2",
  "url": "s_systems.html#eg_system_of_lines",
  "type": "Example",
  "number": "1.7.8",
  "title": "Solutions to elementary systems (again).",
  "body": " Solutions to elementary systems (again)   For each system in , use a geometric argument to determine how many solutions there are.    We proceed geometrically by observing that each equation in a given system defines a line, that a pair is a solution to the given equation if and only if it is a point on the corresponding line, and thus that a pair is a solution to both equations if and only if it is a point lying on both lines. Thus, geometrically speaking, the set of solutions to a given system is equal to the intersection of the two corresponding lines.   In this case the two lines and are parallel (and not equal to one another). It follows that their intersection is empty. We conclude that there are no solutions to the system.    In this case the two lines and are nonparallel. It follows that they intersect in a single point. We conclude that the system has a unique solution.    In this case the two equations and define the same line , and thus that their intersection is also equal to . The set of solutions to the system is then equal to the set of points of , which is infinite.      "
},
{
  "id": "ss_row_equivalence-4",
  "level": "2",
  "url": "s_systems.html#ss_row_equivalence-4",
  "type": "Remark",
  "number": "1.7.9",
  "title": "",
  "body": " Notice the somewhat funny spacing in . This is in force in order to align the unknowns in separate columns. In general, when handed a linear system in the wild, your first step should be to write each equation in standard form, and make sure the unknowns are aligned vertically in this manner.  "
},
{
  "id": "d_eqops",
  "level": "2",
  "url": "s_systems.html#d_eqops",
  "type": "Definition",
  "number": "1.7.10",
  "title": "Elementary operations on linear systems.",
  "body": " Elementary operations on linear systems  elementary operations linear systems  elementary operations linear systems scalar multiplication  elementary operations linear systems equation swap  elementary operations linear systems equation addition  row reduction of systems   An elementary operation (or elementary row operation ) is one of the three types of operations on linear systems described below.   Scalar multiplication  Multiply an equation by a nonzero number : i.e., replace the -th equation of the system with for . Note: is the result of multiplying the left and right sides of equation by .    Equation swap  Swap the -th and -th equations of the system, : i.e., replace equation of the system with , and replace equation with .    Equation addition  Add a multiple of one equation to another: i.e., replace with for some , , and .   The act of transforming a system of equations using elementary operations is called reduction (or row reduction ).   "
},
{
  "id": "d_rowequivalent",
  "level": "2",
  "url": "s_systems.html#d_rowequivalent",
  "type": "Definition",
  "number": "1.7.11",
  "title": "Row equivalent linear systems.",
  "body": " Row equivalent linear systems   We say two systems of linear equations are row equivalent if the one can be obtained from the other by a finite sequence of elementary operations.   "
},
{
  "id": "s_systems_th_rowops",
  "level": "2",
  "url": "s_systems.html#s_systems_th_rowops",
  "type": "Theorem",
  "number": "1.7.12",
  "title": "Row equivalence theorem.",
  "body": " Row equivalence theorem   Row equivalent systems of linear equations have identical sets of solutions.    We prove by induction that if system is the result of applying elementary operations to system , , then and have the same set of solutions.   Base case:  In this case (we have applied no operations) and the statement is obvious.    Induction step  Assume that applying a sequence of elementary operations to a linear system preserves the set of solutions.  Suppose is the result of applying elementary operations to the system . Let be the result of applying the first of these operations. By the induction hypothesis, systems and have the same set of solutions.  Since the system is obtained from by applying exactly one elementary operation, it now suffices to show that applying a single row operation does not change the set of solutions to a linear system. We now show this for each of the three types of elementary operations. To this end, let be the starting linear system , let be the system obtained from by applying the elementary operation in question, and let denote the -th equation of .    Scalar multiplication  Suppose is obtained from by multiplying the -th equation of by the nonzero scalar . In this case for all , and for some . Since only the -th equation has changed, it suffices to show that is a solution to if and only if is a solution to . Let's prove each direction of this if and only if separately.  If satisfies , then . Multiplying both sides by we see that and hence that is also a solution of .  For the other direction, if satisfies , then Now, since , we can multiply both sides of this equation by to see that and hence that is a solution to .    Row swap  Suppose is obtained from by swapping equations and . In this case the systems and consist of the same equations, just written in a different order. Thus the -tuple satisfies if and only if it satisfies each of the equations , if and only if it satisfies each of the equations , since these are the same equations! It follows that is a solution of if and only if it is a solution to .    Row addition  Suppose is the system satisfying for all , and for some scalar and integer . Expanding out in terms of the coefficients of yields . If satisfies , then it satisfies and , in which case, evaluating the left hand side of at  , which is equal to (the right side of ) since . This shows that satisfies , and hence is a solution to . Now suppose satisfies . Since satisfies , we have Since satisfies , we have . Substituting into the equation above we get , and hence . This shows that satisfies , and thus that satisfies .   We conclude that and have the same set of solutions, as desired.   "
},
{
  "id": "eg_systems_eg_long",
  "level": "2",
  "url": "s_systems.html#eg_systems_eg_long",
  "type": "Example",
  "number": "1.7.13",
  "title": "Complete example.",
  "body": " Complete example  Consider again the linear system   We transform the system as as follows:   Now put the logic together. Our original linear system was transformed by a sequence of elementary row operations to a new system :   We saw already that the second system has exactly one solution, namely the triple .  Since transforming a system by row operations preserves solutions, the first and second systems have exactly the same solutions .  Thus is the only solution to the original system!  "
},
{
  "id": "s_systems_notation_rowops",
  "level": "2",
  "url": "s_systems.html#s_systems_notation_rowops",
  "type": "Remark",
  "number": "1.7.14",
  "title": "Elementary operation notation.",
  "body": " Elementary operation notation  As we will see later, keeping track of the exact sequence of row operations is important in some situations. The notation used in the last example is useful for this bookkeeping. Let's explicate the notation somewhat.  The notation indicates that system is obtained from by replacing equation with .  The notation indicates that system is obtained from by swapping rows and .  The notation indicates that system is obtained from by replacing equation with .  "
},
{
  "id": "s_systems_rm_oneoperation",
  "level": "2",
  "url": "s_systems.html#s_systems_rm_oneoperation",
  "type": "Remark",
  "number": "1.7.15",
  "title": "Mandate.",
  "body": " Mandate  You may be tempted to do multiple operations in a single step during this procedure. Resist this temptation for now until we have a better understanding of things.  Furthermore, if later on you do give in to this temptation, make sure that the two (or more row operations) you perform are independent of one another. For example, do not swap with and replace with in the same step.  "
},
{
  "id": "s_linsys_solve",
  "level": "1",
  "url": "s_linsys_solve.html",
  "type": "Section",
  "number": "1.8",
  "title": "Solving linear systems",
  "body": " Solving linear systems   In we sketched a procedure for solving a linear system . That procedure involved applying a sequence of row operations to to obtain a simpler system .  We will fill out this sketch in the next two sections. Specifically, we will:   describe precisely what we mean by a simpler system (see );    provide an algorithm (or recipe) that decides exactly what sequence of row operations to apply to obtain this simpler system (see );    explain how to find all solutions of the resulting simpler system (see ).       Row echelon matrices  Our first step in this direction will be to introduce a notational convenience. As you may have noticed, when performing row operations on a system of equations, we essentially treat the unknowns, as well as the plus and equals symbols, as placeholders; the only things that actually change in a given step are the coefficients in the equations. The augmented matrix associated to a linear system is a formal way of extracting just the information of the coefficients from a linear system. Of course, before introducing an augmented matrix we must at last introduce the notion of a matrix itself. As defined below, a matrix is just an -tuple where the index set is of the special form . As with -tuples, we will introduce special notational conventions for this particular type of tuple.   Matrices    set of with entries in    Let be a field, let and be positive integers, and let . An -valued matrix of size (or dimension ) is an -valued tuple indexed by . We will write instead of , and call the -th entry of the matrix. Additionally, to distinguish matrices from -tuples, one the following bracket notations will be used: . We will favor capital letters ( , ) when naming matrices, and will often display a matrix as a rectangular array as , where the entry in the -th row and -th column of the array is . The set of all -valued matrices is denoted : , .     Augmented matrix  augmented matrix    augmented matrix    Let be the linear system . The augmented matrix associated to  is the matrix .     Note that a system of equations in unknowns gives rise to an augmented matrix that has rows (one row for each equation) and columns (one column for each unknown and an additional column for the right-hand side constants ). The vertical line in the augmented matrix helps distinguish between the columns corresponding to unknowns (to the left of the vertical line) and the column of constants (to the right of the vertical line). When we wish to further emphasize this distinction among the columns, we will label the first columns with their corresponding variable name as in .   Augmented matrix with labeled columns   Augmented matrix with labeled columns      Here is our precise formulation of a simple linear system; it is a system whose associated augmented matrix is in row echelon form , as described below.   Row echelon form   A zero row of a matrix, is a row whose entries are all equal to zero; a nonzero row is a row that contains at least one nonzero entry.  A matrix is in row echelon form if the following conditions hold.  Zero rows at bottom  If the -th row of is a zero matrix, then for all , the -th row of is also a zero row: , all zero rows are grouped at the bottom of .    Leading ones  For all , if the -th row of is nonzero, then the first ( , leftmost) nonzero entry of this row is equal to . Such an entry is called a leading one of the row: , it is the first nonzero entry of the row, and is equal to .    Staircase pattern  For all if the -th and -th rows of are nonzero, then the leading one of the -th row lies strictly to the right of the leading one in the -th row. In more detail: if the leading ones of the two rows are the -th and -th entries of , respectively, then .     A matrix is in reduced row echelon form if it is in row echelon form and additionally satisfies the following condition.   Reduced row echelon form  For all , if the -th column of contains a leading one, then all other entries of that column are equal to zero.     A linear system is in row echelon form (resp. reduced row echelon form ) if its augmented matrix is in row echelon form (resp. reduced row echelon form).    A matrix in row echelon form displays a staircase pattern of ones as illustrated in .   Staircase pattern of row echelon form   Staircase pattern of row echelon form     In practice to decide whether a matrix is in in (reduced) row echelon form, follow these steps:   First verify whether all zero rows are at the bottom.    For each nonzero row, determine whether the first nonzero entry is a 1, and put a box around it.    Make sure your boxes make a staircase pattern.    (For reduced row echelon form only.) Decide whether each column with a box has 0's everywhere else.      Row echelon versus reduced row echelon form   For each matrix decide (a) whether it is in row echelon form, and (b) whether it is in reduced row echelon form.                   Below you find the matrix with leading ones boxed. This matrix fails to be in row echelon form (and hence also reduced row echelon form) for a variety of reasons: the zero rows are not all grouped at the bottom; the first row is nonzero, but does not have a leading one; the leading one of the fourth row is to the left of the leading one of the leading one in the row above it.     Below you find the matrix with leading ones boxed. This matrix is in row echelon form: the zero rows (rows 4 and 5) are grouped at the bottom; each nonzero row has a leading one (boxed in the matrix below); the leading ones step strictly to the right as we move down the rows. The matrix is not in reduced row echelon form, as the last column contains a leading one in its third row, and a nonzero entry in its first row.         Gaussian elimination  We will now describe a systematic procedure, called Gaussian elimination , that allows us to reduce a given linear system to a system in row echelon form. In keeping with the foregoing discussion, we will identify a system with its augmented matrix . Furthermore, reducing a linear system using elementary operations on equations is now cast as performing elementary row operations on matrices. At the risk of redundancy we now officially translate a number of our former notions regarding reduction of linear systems to the setting of matrices.   Elementary row operations on matrices  elementary row operations  elementary row operations scalar multiplication  elementary row operations row swap  elementary row operations row addition  row reduction of matrices  row equivalence of matrices   An elementary row operation is one of the three following types of matrix operations. In what follows, we let .   Scalar multiplication  Given and nonzero , multiply all entries of the -th row by : , replace with for all .    Row swap  Given , swap the -th and -th rows of : , replace with and with for all .    Row addition  Given and , replace the -th row of with the sum of the -th row and times the -th row: , replace with for all .   The act of transforming a matrix using elementary row operations is called row reduction .  Two matrices are row equivalent if the one can be obtained from the other by performing a finite sequence of elementary row operations.     Row operation notation  Our former elementary operation notation easily transfers to row operations on matrices. The expressions denote the operations that replace row in with , swap rows and in , and replace in with , respectively.   At last we are ready to define Gaussian elimination. In its essence this is simply a procedure, or algorithm , that takes an input matrix and row reduces it to a matrix in row echelon form. It is important to note that although we employ Gaussian elimination in this chapter primarily to the end of simplifying and solving linear systems, this is not its only application. Indeed, we will come back to the procedure again and again, in a great variety of contexts and to greatly diverse ends. Gaussian elimination is one of linear algebra's most important tools. We memorialize this here as an official principle.   Gaussian elimination mantra   Gaussian elimination is the workhorse of linear algebra.     Gaussian elimination  Gaussian elimination    Gaussian elimination is the algorithm described below. It takes as an input a matrix and returns as an output a row equivalent matrix in row echelon form.   If is the zero matrix, then return . Otherwise, find the first nonzero column of : , find the smallest integer for which the -th column is nonzero. Let be the smallest integer in such that . Use a row swap to move to the top of the column.    Scale the new top row to produce a leading one in the entry of the matrix.    For each , perform a row operation of the form to replace with : , make all the entries below the leading one produced in Step 2 equal to zero.    If consists of one row, stop. Otherwise, apply steps 1-4 to the submatrix of obtained by deleting its first row. In more detail, let , apply steps 1-4 to to obtain a matrix , and replace with for all .         Model example  Use the following example as a model of how to both perform and annotate the steps in Gaussian elimination. When first learning this procedure, make sure to follow it to the letter . In particular, in the spirit of the mandate issued in , you should only perform one row operation at a time, and only in the sequence prescribed in Steps 1-4 of .   Row echelon form  We use Gaussian elimination to reduce the linear system to a system in row echelon form.  First we apply Gaussian elimination to the augmented matrix associated to our system. . We conclude that our original system is equivalent to the system , which is in row echelon form.   The matrix outputted by Gaussian elimination is guaranteed to be in row echelon form, but it may not be in reduced row echelon form. Gauss-Jordan elimination describes a systematic way to continue reducing to this even simpler state.   Gauss-Jordan elimination    Gauss-Jordan elimination is the algorithm described below. It takes as an input a matrix and returns a row equivalent matrix in reduced row echelon form.   Apply Gaussian elimination to transform to a matrix in row echelon form.    Let be the indices of the columns of that contain leading ones. Beginning with the -th column and working backwards, use row operations to replace all entries above the leading one in that column with zeros.        Reduced row echelon form  We continue our work in to reach a matrix in reduced row echelon form. . Notice that the resulting system is slightly simpler than the system in row echelon form of : .    and are really theorems in disguise: implicit in both procedure descriptions is (a) that the procedure terminates, and (b) that itproduces a matrix that is row equivalent to the original one in row echelon (resp., reduced row echelon) form. Let's make this explicit.   Row equivalent matrix forms      Row echelon forms exist  Any matrix is row equivalent to a matrix in row echelon form. Indeed, applying Gaussian elimination to produces a matrix in row echelon form that is row equivalent to .    Reduced row echelon forms exist  Any matrix is row equivalent to a matrix in reduced row echelon form. Indeed, applying Gauss-Jordan elimination to produces a matrix in reduced row echelon form that is row equivalent to .    Reduced row echelon forms are unique  Any matrix is row equivalent to a unique matrix in reduced row echelon form.       We will make heavy use of the first two results of . The proofs of these statements are not difficult, but not especially illuminating. Accordingly we omit them here, and point the interested reader to Robert Beezer's A First Course in Linear Algebra . (See Theorem REMEF .)  The third statement of , that every matrix is row equivalent to a unique matrix in reduced row echelon form, does in fact have an enlightening proof. We will postpone this proof, however, until we have a little more theory at our disposal. Until then we will conscientiously not make use of this fact when developing any of our further theory.   Row echelon form is not unique   Show that a matrix may be row equivalent to two or more matrices in row echelon form.    Take . This row reduces to using Gaussian elimination; and it row reduces further to using Gauss-Jordan elimination. Thus we see that is row equivalent to two different matrices in row echelon form. (According to , the matrix is the only matrix in reduced row echelon that is row equivalent to .)     Gaussian elimination  In the first Sage cell below you find a recursive implementation of Gaussian elimination in Sage that includes explanatory comments. Evaluate this cell in order to load the row_echelon_form function. The second cell allows you to apply the Gaussian elimination algorithm to a matrix of your choosing. As you can see, the show function provides a nice latex version of the output.    Sage has its own row reduction method, rref , which transforms a matrix to reduced row echelon form. Let's compare the outputs of these two algorithms.   The function row_echelon_form_steps() defined below ia a non-recursive implementation of Gaussian elimination that also displays all the steps of the algorithm. The last cell applies this function to a random matrix (with a significant number of zero entries). By modifying this cell appropriately, you can check your work when performing Gaussian elimination to the letter on a given matrix.       Model example continued  We begin by illustrating the general method for solving a linear system, continuing with our model example . A careful description of the procedure, along with a proof of its validity, is found in .  A key first step involves separating the variables of the system into free and leading variables.   Free and leading variables   variables  leading    variables  free    Let be a linear system in the unknowns , and let be its associated augmented matrix. Assume (and hence ) is in row echelon form.  The unknown is a leading variable if the corresponding column in (i.e., the -th column) contains a leading one; it is a free variable if the corresponding column in does not contain a leading one.     Free and leading variables   Let be the linear system in the unknowns with augmented matrix . Then are leading variables, since the first, second, and fourth columns of have leading ones, as indicated by the boxes. The variable is free since the third column of has no leading one.     Solving linear systems  In our model example we transformed the original system to the equivalent system below: . The free variables of are and ; the leading variables are , and .  Starting with the last equation and working our way backwards we can express each leading variable  ( ) in terms of the of the free variables  and (and possibly a constant): . It follows that any assignment of values to the free variables of the form extends to a unique solution of of the form . Thus for any choice of real numbers and we get a unique solution of the form . We conclude the set of solutions to is given as Alternatively, we can give a parametric equations description of the solutions to : .    Mandate  parametric equations  Get used to describing solutions to linear systems using either the set notation form of or the parametric equation form of .  Note also the distinct roles played by free and leading variables in the description of solutions. We assign each free variable freely to any choice of real parameters ( and in our example), and then solve for the leading variables in terms of these parameters in a unique manner. In particular, the leading variables are completely determined by our assignment of free variables.     General method for solving linear systems  The procedure used in is easily generalized to yield a systematic method for finding all solutions to a linear system. In a nutshell we proceed as follows: reduce the system to one in row echelon form, sort the unknowns into free and leading variables, express the leading variables in terms of the free variables, assign any real values to each free variable and determine the corresponding values of the leading variables. provides a more precise description, as well as a proof that the method is valid.   Solving linear systems   Let be a linear system in the unknowns , and let be the set of all solutions of . We compute as follows.   Gaussian elimination  Apply Gaussian elimination to reduce to an equivalent system in row echelon form with augmented matrix .    No solutions  If the last column of has a leading one, then is inconsistent: , is the empty set. Otherwise, proceed to the next step.    Sort variables  Determine which of the unknowns are leading variables and which are free variables by applying to .    Unique solution  If there are no free variables, solve for each unknown starting with the last equation and working backwards . In this case there is a unique solution to .    Infinite solutions  Otherwise, let be the leading variables of , and let be the free variables. Starting with the last nonzero equation and working backwards , express the leading variables as functions of the free variables: . Each solution of corresponds to a unique assignment of values to the free variables. In more detail, for each choice of assignments , we get the corresponding solution to described parametrically as follows: .        First recall that and have the same set of solutions ( ). So it suffices to show that the algorithm returns the correct set of solutions to .  Regarding consistency: if the last column of the augmented matrix associated to has a leading one in the -th row, then the corresponding equation in is Clearly this equation has no solutions, and hence the set of solutions to is empty.  Suppose now that the last column of does not have a leading one.  Consider first the case where there are no free variables, so that are all leading variables. It follows that, starting at the -th equation of , we have equations of the form and that all other equations of are of the form , and as such may be disregarded since they are satisfied by any choice of the . Starting with the last equation and working backwards to solve for each previous variable, it is clear that there is a unique choice of assignments to the variables yielding a solution. Indeed, we have , and so on down to . This intuitive argument can be made rigorous using a simple induction argument summarized as follows: assume we have shown that we must have for some unique values ; then is uniquely determined as . Suppose now that there are free variables, let be the leading variables of , and let be the free variables. Again, since does not have a leading one in the last column, there are exactly nonzero equations in : one for each leading variable. After bringing any terms involving free variables to the right, the -th such equation takes the form . As in the previous case, back-substitution now allows us to express each leading variable as a function only of the free variables, yielding an equivalent system of the form . We conclude that any assignment of the free variables extends to a solution of for which the leading variables satisfy .  Lastly, we must show that every solution of is described as above. To this end, suppose is a solution. From the discussion above, we know that corresponding to the free variable assignment there is a unique solution of , and that the free variables for this solution satisfy . Thus must be this same solution.    Free versus leading  We observe again the important difference in the role played by free and leading variables in this procedure. Once we determine the free variables of the system (using Gaussian elimination), the general solution is obtained in a twofold manner: first assign arbitrary values to the free variables as in , then determine the values of the leading variables in terms of these assignments as in . In this manner, we see that we can freely assign any real value to the free variables, but for each such assignment, the values of the leading variables in a solution are then completely determined.    Solving linear systems   Use to describe the set of solutions to the given linear system. Express your answer both in set notation form and, when appropriate, parametric equation form.                        First observe, using the fact that equality is transitive, that solves this chain of two equalities if and only if it solves the system , which in standard form is . The augmented matrix of the system row reduces as , as you can check yourself (or with the help of ).  Since the leading ones of the reduced matrix appear only in the first two columns, the first two unknowns and are leading variables, and the last unknown is free. Taking the corresponding system and solving for the leading variables in terms of the free variables yields . The parametric equations description of the general solution is then . Using set notation, the set of solutions is .    In this case the augmented matrix of the system row reduces as . Since the last column of the reduced matrix has a leading one, we conclude that the system is inconsistent, and hence has no solutions. Thus .    In this case the augmented matrix of the system row reduces as . From the placement of the leading ones, we see that the first and third unknowns are leading, and the rest are free. Writing the leading variables in terms of the free ones, we have . The parametric equations description of the general solution is then . Using set notation, the set of solutions is         Video: solving linear systems   Video: solving linear systems  Video: solving linear systems      Video: solving linear systems   Video: solving linear systems 2  Video: solving linear systems 2      Solving linear systems  Sage has a number of means of solving systems of equations, both linear and nonlinear. In the cell below we compute the set of solutions to this section's working example. Note that the three equations are entered as a list.   Notice that the algorithm used here does not seem to follow the method we describe: the unknowns and are set as free parameters r1 and r2 , and the rest of the unknowns are expressed in terms of these. The solve routine in Sage allows for an additional option that selects a specific algorithm for solving the system. In the next cell, we specify the sympy algorithm and get an answer more in line with our example.   Now all unknowns are expressed in terms of the second and fourth unknowns and , which are treated as free variables, just as in our computed example.  Lastly, we can take a matrix approach with Sage to solve the system. Below we create the augmented matrix associated to our starting system and then reduce the system to reduced row echelon form using the rref method. From there it is a simple matter of assigning parameter names and using back-substitution, as described in .    In addition to providing a recipe for describing the full set of solutions to a linear system, also tells us that qualitatively this set must take one of three forms: the set is empty (inconsistent, no solutions); there is a unique solution (consistent, no free variables); there are infinitely many solutions (consistent, free variables). We record this fact, useful in its own right, as a corollary.   , , or -many solutions   Let be an infinite field ( , , , ), and let be a linear system of equations over . Let be an equivalent system in row reduced form, and let be the augmented matrix associated to .  The system has either no solutions, exactly one solution, or infinitely many solutions. In more detail:   if has a leading one in its last column, then has no solutions;    if does not have a leading one in its last column and has no free variables, then has a unique solution;    if does not have a leading one in its last column and has a free variable, then has infinitely many solutions.       The decision tree in concisely summarizes the different cases articulated in .   Decision tree for number of solutions to a system  Decision tree for the number of solutions to a linear system over an infinite field with augmented matrix in row echelon form.       Consider the special case of a homogeneous system Such a system is always consistent. Why? Observe that is guaranteed to be a solution. Alternatively, it is easy to see that row reducing the system results in an augmented matrix whose last column is a zero column: a zero column certainly contains no leading ones. Thus, in the special case of a homogeneous system, boils down to the following result.   Solutions to homogeneous equations   Let be an infinite field ( , , , ), and let be a homogeneous linear system over .   If all the variables are leading variables, then the system has a unique solution (i.e., solution).    If there is a free variable, then the system has infinitely many solutions.         Vector parametrization description  Consider again the solution set to the linear system in , which we described using parametric equations as , and using set building notation as . Using the vector space structure of , we can give yet another description of the general solution: . We will call this the vector parametrization description of the solution set. This description is obtained in steps by first breaking up the expression into a constant vector plus a vector involving the parameters and , and then rewriting the latter as a linear combination of two vectors with and as the coefficients: . The solution set of any consistent linear system can be described in this manner. In general, given a consistent system in unknowns with free variables, the general solution of the system is given by a vector parametrization of the form . The vector parametrization leads to a useful geometric understanding of the set of solutions to a linear system. The point can be thought of as a particular solution to the equation: the solution you obtain by choosing in . The general solution is then obtained by adding to the point any linear combination of the vectors .   Vector parametrization  Consider the linear equation . The corresponding augmented matrix of this equation is , which is already in row echelon form. Using , we see that the general solution is . This vector parametrization description allows us to visualize the plane with equation as the set of all points obtained by translating the point by various linear combinations of and . In this manner, the two vectors and determine a (non-rectangular) grid on .   Vector parametrization of plane    Vector parametrization of plane        Application to span and linear independence  As a first illustration of , we show how to use to answer questions about span and linear independence.   Span and linear independence   For each vector space and tuple of vectors determine (i) whether the tuple is linearly independent, and (ii) determine .    , , where      , , where      , , where        First we decide whether is linearly independent. To this end, we ask whether there is a nonzero triple such that . Expanding the linear combination on the left and setting each coordinate equal to 0 yields the linear system . We apply to this system: . We see that the system is consistent and that the unknown is free. It follows that there are infinitely many solutions to the system, and thus in particular, a nonzero one. Thus there is a nonzero triple satisfying , and we conclude that the tuple is linearly dependent.  To determine , we ask which triples can be expressed as for some some . This is equivalent to asking for which triples is the linear system consistent. Once again, we apply . Observe how we can reuse much of the work we did above. We will take some shortcuts in our Gaussian elimination for brevity: . At this point we see that the system is consistent if and only if . We conclude that .    As the last example illustrates, when answering the two questions posed separately, we repeat a lot of the same Gaussian elimination work. Let's change things up slightly here and consider first the span question. We ask which matrices can be expressed as for some . Expanding out the linear combination of the , this equality becomes . Equating the entries of both matrice, we see that the span question is equivalent to asking for which -tuples the linear system is consistent. We apply to this system: . Since there are leading ones in all four of the columns corresponding to unknowns, we see that that system is always consistent, and furthermore, that for any there is a unique solution . We conclude that . In other words, is a spanning set for !  Turning to linear independence, our reasoning shows that for any matrix there is a unique tuple satisfying . In particular, taking , we see that there is a unique tuple satisfying . Since is such a tuple, we conclude that implies , and thus is linearly independent.    The work here is very similar to the previous part. In this case, tuples satisfying correspond to solutions of the linear system with augmented matrix . This matrix row reduces to the matrix . We conclude in this case that , the set of all symmetric matrices. The special case where we consider linear combinations of the form corresponds to the system where we set . In this case, the system is consistent (as always, since it is homogenous), and the presence of a free variable implies that there are infinitely many tuples solving the system. This in turn implies that is linearly dependent, since there are then nontrivial linear combinations of the equal to the zero matrix.     Linear independence   Let be a tuple of vectors of the -vector space . To decide whether is linearly independent, proceed as follows.   Write out the general expression for a linear combination equal to the zero vector: .    If possible, translate this vector equation into a homogeneous system of linear equations in the unknowns using the definition of equality for your vector space.    Decide, using Gaussian elimination, whether this system has any nonzero ( , nontrivial) solutions. If it has no nontrivial solution, is linearly independent; if it has a nontrivial solution, is linearly dependent.        "
},
{
  "id": "d_matrix",
  "level": "2",
  "url": "s_linsys_solve.html#d_matrix",
  "type": "Definition",
  "number": "1.8.1",
  "title": "Matrices.",
  "body": " Matrices    set of with entries in    Let be a field, let and be positive integers, and let . An -valued matrix of size (or dimension ) is an -valued tuple indexed by . We will write instead of , and call the -th entry of the matrix. Additionally, to distinguish matrices from -tuples, one the following bracket notations will be used: . We will favor capital letters ( , ) when naming matrices, and will often display a matrix as a rectangular array as , where the entry in the -th row and -th column of the array is . The set of all -valued matrices is denoted : , .   "
},
{
  "id": "d_augmented_matrix",
  "level": "2",
  "url": "s_linsys_solve.html#d_augmented_matrix",
  "type": "Definition",
  "number": "1.8.2",
  "title": "Augmented matrix.",
  "body": " Augmented matrix  augmented matrix    augmented matrix    Let be the linear system . The augmented matrix associated to  is the matrix .   "
},
{
  "id": "ss_ge_row_echelon-5",
  "level": "2",
  "url": "s_linsys_solve.html#ss_ge_row_echelon-5",
  "type": "Remark",
  "number": "1.8.3",
  "title": "",
  "body": " Note that a system of equations in unknowns gives rise to an augmented matrix that has rows (one row for each equation) and columns (one column for each unknown and an additional column for the right-hand side constants ). The vertical line in the augmented matrix helps distinguish between the columns corresponding to unknowns (to the left of the vertical line) and the column of constants (to the right of the vertical line). When we wish to further emphasize this distinction among the columns, we will label the first columns with their corresponding variable name as in .   Augmented matrix with labeled columns   Augmented matrix with labeled columns     "
},
{
  "id": "d_row_echelon",
  "level": "2",
  "url": "s_linsys_solve.html#d_row_echelon",
  "type": "Definition",
  "number": "1.8.5",
  "title": "Row echelon form.",
  "body": " Row echelon form   A zero row of a matrix, is a row whose entries are all equal to zero; a nonzero row is a row that contains at least one nonzero entry.  A matrix is in row echelon form if the following conditions hold.  Zero rows at bottom  If the -th row of is a zero matrix, then for all , the -th row of is also a zero row: , all zero rows are grouped at the bottom of .    Leading ones  For all , if the -th row of is nonzero, then the first ( , leftmost) nonzero entry of this row is equal to . Such an entry is called a leading one of the row: , it is the first nonzero entry of the row, and is equal to .    Staircase pattern  For all if the -th and -th rows of are nonzero, then the leading one of the -th row lies strictly to the right of the leading one in the -th row. In more detail: if the leading ones of the two rows are the -th and -th entries of , respectively, then .     A matrix is in reduced row echelon form if it is in row echelon form and additionally satisfies the following condition.   Reduced row echelon form  For all , if the -th column of contains a leading one, then all other entries of that column are equal to zero.     A linear system is in row echelon form (resp. reduced row echelon form ) if its augmented matrix is in row echelon form (resp. reduced row echelon form).   "
},
{
  "id": "fig_echelon",
  "level": "2",
  "url": "s_linsys_solve.html#fig_echelon",
  "type": "Figure",
  "number": "1.8.6",
  "title": "",
  "body": " Staircase pattern of row echelon form   Staircase pattern of row echelon form    "
},
{
  "id": "ss_ge_row_echelon-11",
  "level": "2",
  "url": "s_linsys_solve.html#ss_ge_row_echelon-11",
  "type": "Example",
  "number": "1.8.7",
  "title": "Row echelon versus reduced row echelon form.",
  "body": " Row echelon versus reduced row echelon form   For each matrix decide (a) whether it is in row echelon form, and (b) whether it is in reduced row echelon form.                   Below you find the matrix with leading ones boxed. This matrix fails to be in row echelon form (and hence also reduced row echelon form) for a variety of reasons: the zero rows are not all grouped at the bottom; the first row is nonzero, but does not have a leading one; the leading one of the fourth row is to the left of the leading one of the leading one in the row above it.     Below you find the matrix with leading ones boxed. This matrix is in row echelon form: the zero rows (rows 4 and 5) are grouped at the bottom; each nonzero row has a leading one (boxed in the matrix below); the leading ones step strictly to the right as we move down the rows. The matrix is not in reduced row echelon form, as the last column contains a leading one in its third row, and a nonzero entry in its first row.      "
},
{
  "id": "d_rowops",
  "level": "2",
  "url": "s_linsys_solve.html#d_rowops",
  "type": "Definition",
  "number": "1.8.8",
  "title": "Elementary row operations on matrices.",
  "body": " Elementary row operations on matrices  elementary row operations  elementary row operations scalar multiplication  elementary row operations row swap  elementary row operations row addition  row reduction of matrices  row equivalence of matrices   An elementary row operation is one of the three following types of matrix operations. In what follows, we let .   Scalar multiplication  Given and nonzero , multiply all entries of the -th row by : , replace with for all .    Row swap  Given , swap the -th and -th rows of : , replace with and with for all .    Row addition  Given and , replace the -th row of with the sum of the -th row and times the -th row: , replace with for all .   The act of transforming a matrix using elementary row operations is called row reduction .  Two matrices are row equivalent if the one can be obtained from the other by performing a finite sequence of elementary row operations.   "
},
{
  "id": "rm_ge_notation",
  "level": "2",
  "url": "s_linsys_solve.html#rm_ge_notation",
  "type": "Remark",
  "number": "1.8.9",
  "title": "Row operation notation.",
  "body": " Row operation notation  Our former elementary operation notation easily transfers to row operations on matrices. The expressions denote the operations that replace row in with , swap rows and in , and replace in with , respectively.  "
},
{
  "id": "princ_GE",
  "level": "2",
  "url": "s_linsys_solve.html#princ_GE",
  "type": "Mantra",
  "number": "1.8.10",
  "title": "Gaussian elimination mantra.",
  "body": " Gaussian elimination mantra   Gaussian elimination is the workhorse of linear algebra.   "
},
{
  "id": "proc_GE",
  "level": "2",
  "url": "s_linsys_solve.html#proc_GE",
  "type": "Procedure",
  "number": "1.8.11",
  "title": "Gaussian elimination.",
  "body": " Gaussian elimination  Gaussian elimination    Gaussian elimination is the algorithm described below. It takes as an input a matrix and returns as an output a row equivalent matrix in row echelon form.   If is the zero matrix, then return . Otherwise, find the first nonzero column of : , find the smallest integer for which the -th column is nonzero. Let be the smallest integer in such that . Use a row swap to move to the top of the column.    Scale the new top row to produce a leading one in the entry of the matrix.    For each , perform a row operation of the form to replace with : , make all the entries below the leading one produced in Step 2 equal to zero.    If consists of one row, stop. Otherwise, apply steps 1-4 to the submatrix of obtained by deleting its first row. In more detail, let , apply steps 1-4 to to obtain a matrix , and replace with for all .      "
},
{
  "id": "eg_model_example",
  "level": "2",
  "url": "s_linsys_solve.html#eg_model_example",
  "type": "Example",
  "number": "1.8.12",
  "title": "Row echelon form.",
  "body": " Row echelon form  We use Gaussian elimination to reduce the linear system to a system in row echelon form.  First we apply Gaussian elimination to the augmented matrix associated to our system. . We conclude that our original system is equivalent to the system , which is in row echelon form.  "
},
{
  "id": "proc_GaussJordan",
  "level": "2",
  "url": "s_linsys_solve.html#proc_GaussJordan",
  "type": "Procedure",
  "number": "1.8.13",
  "title": "Gauss-Jordan elimination.",
  "body": " Gauss-Jordan elimination    Gauss-Jordan elimination is the algorithm described below. It takes as an input a matrix and returns a row equivalent matrix in reduced row echelon form.   Apply Gaussian elimination to transform to a matrix in row echelon form.    Let be the indices of the columns of that contain leading ones. Beginning with the -th column and working backwards, use row operations to replace all entries above the leading one in that column with zeros.      "
},
{
  "id": "eg_model_rref",
  "level": "2",
  "url": "s_linsys_solve.html#eg_model_rref",
  "type": "Example",
  "number": "1.8.14",
  "title": "Reduced row echelon form.",
  "body": " Reduced row echelon form  We continue our work in to reach a matrix in reduced row echelon form. . Notice that the resulting system is slightly simpler than the system in row echelon form of : .  "
},
{
  "id": "th_matrixforms",
  "level": "2",
  "url": "s_linsys_solve.html#th_matrixforms",
  "type": "Theorem",
  "number": "1.8.15",
  "title": "Row equivalent matrix forms.",
  "body": " Row equivalent matrix forms      Row echelon forms exist  Any matrix is row equivalent to a matrix in row echelon form. Indeed, applying Gaussian elimination to produces a matrix in row echelon form that is row equivalent to .    Reduced row echelon forms exist  Any matrix is row equivalent to a matrix in reduced row echelon form. Indeed, applying Gauss-Jordan elimination to produces a matrix in reduced row echelon form that is row equivalent to .    Reduced row echelon forms are unique  Any matrix is row equivalent to a unique matrix in reduced row echelon form.      "
},
{
  "id": "s_ge_ex_REFnotunique",
  "level": "2",
  "url": "s_linsys_solve.html#s_ge_ex_REFnotunique",
  "type": "Example",
  "number": "1.8.16",
  "title": "Row echelon form is not unique.",
  "body": " Row echelon form is not unique   Show that a matrix may be row equivalent to two or more matrices in row echelon form.    Take . This row reduces to using Gaussian elimination; and it row reduces further to using Gauss-Jordan elimination. Thus we see that is row equivalent to two different matrices in row echelon form. (According to , the matrix is the only matrix in reduced row echelon that is row equivalent to .)   "
},
{
  "id": "sage_ge",
  "level": "2",
  "url": "s_linsys_solve.html#sage_ge",
  "type": "Sage Example",
  "number": "1",
  "title": "Gaussian elimination.",
  "body": " Gaussian elimination  In the first Sage cell below you find a recursive implementation of Gaussian elimination in Sage that includes explanatory comments. Evaluate this cell in order to load the row_echelon_form function. The second cell allows you to apply the Gaussian elimination algorithm to a matrix of your choosing. As you can see, the show function provides a nice latex version of the output.    Sage has its own row reduction method, rref , which transforms a matrix to reduced row echelon form. Let's compare the outputs of these two algorithms.   The function row_echelon_form_steps() defined below ia a non-recursive implementation of Gaussian elimination that also displays all the steps of the algorithm. The last cell applies this function to a random matrix (with a significant number of zero entries). By modifying this cell appropriately, you can check your work when performing Gaussian elimination to the letter on a given matrix.    "
},
{
  "id": "d_free-leading",
  "level": "2",
  "url": "s_linsys_solve.html#d_free-leading",
  "type": "Definition",
  "number": "1.8.17",
  "title": "Free and leading variables.",
  "body": " Free and leading variables   variables  leading    variables  free    Let be a linear system in the unknowns , and let be its associated augmented matrix. Assume (and hence ) is in row echelon form.  The unknown is a leading variable if the corresponding column in (i.e., the -th column) contains a leading one; it is a free variable if the corresponding column in does not contain a leading one.   "
},
{
  "id": "s_solving_eg_free-leading",
  "level": "2",
  "url": "s_linsys_solve.html#s_solving_eg_free-leading",
  "type": "Example",
  "number": "1.8.18",
  "title": "Free and leading variables.",
  "body": " Free and leading variables   Let be the linear system in the unknowns with augmented matrix . Then are leading variables, since the first, second, and fourth columns of have leading ones, as indicated by the boxes. The variable is free since the third column of has no leading one.   "
},
{
  "id": "eg_solving_system",
  "level": "2",
  "url": "s_linsys_solve.html#eg_solving_system",
  "type": "Example",
  "number": "1.8.19",
  "title": "Solving linear systems.",
  "body": " Solving linear systems  In our model example we transformed the original system to the equivalent system below: . The free variables of are and ; the leading variables are , and .  Starting with the last equation and working our way backwards we can express each leading variable  ( ) in terms of the of the free variables  and (and possibly a constant): . It follows that any assignment of values to the free variables of the form extends to a unique solution of of the form . Thus for any choice of real numbers and we get a unique solution of the form . We conclude the set of solutions to is given as Alternatively, we can give a parametric equations description of the solutions to : .  "
},
{
  "id": "s_solving_rm_parametric",
  "level": "2",
  "url": "s_linsys_solve.html#s_solving_rm_parametric",
  "type": "Remark",
  "number": "1.8.20",
  "title": "Mandate.",
  "body": " Mandate  parametric equations  Get used to describing solutions to linear systems using either the set notation form of or the parametric equation form of .  Note also the distinct roles played by free and leading variables in the description of solutions. We assign each free variable freely to any choice of real parameters ( and in our example), and then solve for the leading variables in terms of these parameters in a unique manner. In particular, the leading variables are completely determined by our assignment of free variables.  "
},
{
  "id": "proc_solveSystem",
  "level": "2",
  "url": "s_linsys_solve.html#proc_solveSystem",
  "type": "Procedure",
  "number": "1.8.21",
  "title": "Solving linear systems.",
  "body": " Solving linear systems   Let be a linear system in the unknowns , and let be the set of all solutions of . We compute as follows.   Gaussian elimination  Apply Gaussian elimination to reduce to an equivalent system in row echelon form with augmented matrix .    No solutions  If the last column of has a leading one, then is inconsistent: , is the empty set. Otherwise, proceed to the next step.    Sort variables  Determine which of the unknowns are leading variables and which are free variables by applying to .    Unique solution  If there are no free variables, solve for each unknown starting with the last equation and working backwards . In this case there is a unique solution to .    Infinite solutions  Otherwise, let be the leading variables of , and let be the free variables. Starting with the last nonzero equation and working backwards , express the leading variables as functions of the free variables: . Each solution of corresponds to a unique assignment of values to the free variables. In more detail, for each choice of assignments , we get the corresponding solution to described parametrically as follows: .      "
},
{
  "id": "ss_solveSystem-4",
  "level": "2",
  "url": "s_linsys_solve.html#ss_solveSystem-4",
  "type": "Proof",
  "number": "1.8.5.1",
  "title": "",
  "body": " First recall that and have the same set of solutions ( ). So it suffices to show that the algorithm returns the correct set of solutions to .  Regarding consistency: if the last column of the augmented matrix associated to has a leading one in the -th row, then the corresponding equation in is Clearly this equation has no solutions, and hence the set of solutions to is empty.  Suppose now that the last column of does not have a leading one.  Consider first the case where there are no free variables, so that are all leading variables. It follows that, starting at the -th equation of , we have equations of the form and that all other equations of are of the form , and as such may be disregarded since they are satisfied by any choice of the . Starting with the last equation and working backwards to solve for each previous variable, it is clear that there is a unique choice of assignments to the variables yielding a solution. Indeed, we have , and so on down to . This intuitive argument can be made rigorous using a simple induction argument summarized as follows: assume we have shown that we must have for some unique values ; then is uniquely determined as . Suppose now that there are free variables, let be the leading variables of , and let be the free variables. Again, since does not have a leading one in the last column, there are exactly nonzero equations in : one for each leading variable. After bringing any terms involving free variables to the right, the -th such equation takes the form . As in the previous case, back-substitution now allows us to express each leading variable as a function only of the free variables, yielding an equivalent system of the form . We conclude that any assignment of the free variables extends to a solution of for which the leading variables satisfy .  Lastly, we must show that every solution of is described as above. To this end, suppose is a solution. From the discussion above, we know that corresponding to the free variable assignment there is a unique solution of , and that the free variables for this solution satisfy . Thus must be this same solution.  "
},
{
  "id": "rm_free_versus_leading",
  "level": "2",
  "url": "s_linsys_solve.html#rm_free_versus_leading",
  "type": "Remark",
  "number": "1.8.22",
  "title": "Free versus leading.",
  "body": " Free versus leading  We observe again the important difference in the role played by free and leading variables in this procedure. Once we determine the free variables of the system (using Gaussian elimination), the general solution is obtained in a twofold manner: first assign arbitrary values to the free variables as in , then determine the values of the leading variables in terms of these assignments as in . In this manner, we see that we can freely assign any real value to the free variables, but for each such assignment, the values of the leading variables in a solution are then completely determined.  "
},
{
  "id": "eg_solve_sys",
  "level": "2",
  "url": "s_linsys_solve.html#eg_solve_sys",
  "type": "Example",
  "number": "1.8.23",
  "title": "Solving linear systems.",
  "body": " Solving linear systems   Use to describe the set of solutions to the given linear system. Express your answer both in set notation form and, when appropriate, parametric equation form.                        First observe, using the fact that equality is transitive, that solves this chain of two equalities if and only if it solves the system , which in standard form is . The augmented matrix of the system row reduces as , as you can check yourself (or with the help of ).  Since the leading ones of the reduced matrix appear only in the first two columns, the first two unknowns and are leading variables, and the last unknown is free. Taking the corresponding system and solving for the leading variables in terms of the free variables yields . The parametric equations description of the general solution is then . Using set notation, the set of solutions is .    In this case the augmented matrix of the system row reduces as . Since the last column of the reduced matrix has a leading one, we conclude that the system is inconsistent, and hence has no solutions. Thus .    In this case the augmented matrix of the system row reduces as . From the placement of the leading ones, we see that the first and third unknowns are leading, and the rest are free. Writing the leading variables in terms of the free ones, we have . The parametric equations description of the general solution is then . Using set notation, the set of solutions is       "
},
{
  "id": "vid_eg_GE1",
  "level": "2",
  "url": "s_linsys_solve.html#vid_eg_GE1",
  "type": "Example",
  "number": "1.8.24",
  "title": "Video: solving linear systems.",
  "body": " Video: solving linear systems   Video: solving linear systems  Video: solving linear systems    "
},
{
  "id": "vid_eg_GE2",
  "level": "2",
  "url": "s_linsys_solve.html#vid_eg_GE2",
  "type": "Example",
  "number": "1.8.26",
  "title": "Video: solving linear systems.",
  "body": " Video: solving linear systems   Video: solving linear systems 2  Video: solving linear systems 2    "
},
{
  "id": "sage_solve_system",
  "level": "2",
  "url": "s_linsys_solve.html#sage_solve_system",
  "type": "Sage Example",
  "number": "2",
  "title": "Solving linear systems.",
  "body": " Solving linear systems  Sage has a number of means of solving systems of equations, both linear and nonlinear. In the cell below we compute the set of solutions to this section's working example. Note that the three equations are entered as a list.   Notice that the algorithm used here does not seem to follow the method we describe: the unknowns and are set as free parameters r1 and r2 , and the rest of the unknowns are expressed in terms of these. The solve routine in Sage allows for an additional option that selects a specific algorithm for solving the system. In the next cell, we specify the sympy algorithm and get an answer more in line with our example.   Now all unknowns are expressed in terms of the second and fourth unknowns and , which are treated as free variables, just as in our computed example.  Lastly, we can take a matrix approach with Sage to solve the system. Below we create the augmented matrix associated to our starting system and then reduce the system to reduced row echelon form using the rref method. From there it is a simple matter of assigning parameter names and using back-substitution, as described in .   "
},
{
  "id": "c_qualitative",
  "level": "2",
  "url": "s_linsys_solve.html#c_qualitative",
  "type": "Corollary",
  "number": "1.8.28",
  "title": "<span class=\"process-math\">\\(0\\text{,}\\)<\/span> <span class=\"process-math\">\\(1\\text{,}\\)<\/span> or <span class=\"process-math\">\\(\\infty\\)<\/span>-many solutions.",
  "body": " , , or -many solutions   Let be an infinite field ( , , , ), and let be a linear system of equations over . Let be an equivalent system in row reduced form, and let be the augmented matrix associated to .  The system has either no solutions, exactly one solution, or infinitely many solutions. In more detail:   if has a leading one in its last column, then has no solutions;    if does not have a leading one in its last column and has no free variables, then has a unique solution;    if does not have a leading one in its last column and has a free variable, then has infinitely many solutions.      "
},
{
  "id": "fig_decision_tree",
  "level": "2",
  "url": "s_linsys_solve.html#fig_decision_tree",
  "type": "Figure",
  "number": "1.8.29",
  "title": "Decision tree for number of solutions to a system",
  "body": " Decision tree for number of solutions to a system  Decision tree for the number of solutions to a linear system over an infinite field with augmented matrix in row echelon form.     "
},
{
  "id": "s_solving_homogeneous",
  "level": "2",
  "url": "s_linsys_solve.html#s_solving_homogeneous",
  "type": "Corollary",
  "number": "1.8.30",
  "title": "Solutions to homogeneous equations.",
  "body": " Solutions to homogeneous equations   Let be an infinite field ( , , , ), and let be a homogeneous linear system over .   If all the variables are leading variables, then the system has a unique solution (i.e., solution).    If there is a free variable, then the system has infinitely many solutions.      "
},
{
  "id": "s_linsys_solve-8-3",
  "level": "2",
  "url": "s_linsys_solve.html#s_linsys_solve-8-3",
  "type": "Example",
  "number": "1.8.31",
  "title": "Vector parametrization.",
  "body": " Vector parametrization  Consider the linear equation . The corresponding augmented matrix of this equation is , which is already in row echelon form. Using , we see that the general solution is . This vector parametrization description allows us to visualize the plane with equation as the set of all points obtained by translating the point by various linear combinations of and . In this manner, the two vectors and determine a (non-rectangular) grid on .   Vector parametrization of plane    Vector parametrization of plane     "
},
{
  "id": "eg_span_ind_computation",
  "level": "2",
  "url": "s_linsys_solve.html#eg_span_ind_computation",
  "type": "Example",
  "number": "1.8.33",
  "title": "Span and linear independence.",
  "body": " Span and linear independence   For each vector space and tuple of vectors determine (i) whether the tuple is linearly independent, and (ii) determine .    , , where      , , where      , , where        First we decide whether is linearly independent. To this end, we ask whether there is a nonzero triple such that . Expanding the linear combination on the left and setting each coordinate equal to 0 yields the linear system . We apply to this system: . We see that the system is consistent and that the unknown is free. It follows that there are infinitely many solutions to the system, and thus in particular, a nonzero one. Thus there is a nonzero triple satisfying , and we conclude that the tuple is linearly dependent.  To determine , we ask which triples can be expressed as for some some . This is equivalent to asking for which triples is the linear system consistent. Once again, we apply . Observe how we can reuse much of the work we did above. We will take some shortcuts in our Gaussian elimination for brevity: . At this point we see that the system is consistent if and only if . We conclude that .    As the last example illustrates, when answering the two questions posed separately, we repeat a lot of the same Gaussian elimination work. Let's change things up slightly here and consider first the span question. We ask which matrices can be expressed as for some . Expanding out the linear combination of the , this equality becomes . Equating the entries of both matrice, we see that the span question is equivalent to asking for which -tuples the linear system is consistent. We apply to this system: . Since there are leading ones in all four of the columns corresponding to unknowns, we see that that system is always consistent, and furthermore, that for any there is a unique solution . We conclude that . In other words, is a spanning set for !  Turning to linear independence, our reasoning shows that for any matrix there is a unique tuple satisfying . In particular, taking , we see that there is a unique tuple satisfying . Since is such a tuple, we conclude that implies , and thus is linearly independent.    The work here is very similar to the previous part. In this case, tuples satisfying correspond to solutions of the linear system with augmented matrix . This matrix row reduces to the matrix . We conclude in this case that , the set of all symmetric matrices. The special case where we consider linear combinations of the form corresponds to the system where we set . In this case, the system is consistent (as always, since it is homogenous), and the presence of a free variable implies that there are infinitely many tuples solving the system. This in turn implies that is linearly dependent, since there are then nontrivial linear combinations of the equal to the zero matrix.   "
},
{
  "id": "proc_linear_independence",
  "level": "2",
  "url": "s_linsys_solve.html#proc_linear_independence",
  "type": "Procedure",
  "number": "1.8.34",
  "title": "Linear independence.",
  "body": " Linear independence   Let be a tuple of vectors of the -vector space . To decide whether is linearly independent, proceed as follows.   Write out the general expression for a linear combination equal to the zero vector: .    If possible, translate this vector equation into a homogeneous system of linear equations in the unknowns using the definition of equality for your vector space.    Decide, using Gaussian elimination, whether this system has any nonzero ( , nontrivial) solutions. If it has no nontrivial solution, is linearly independent; if it has a nontrivial solution, is linearly dependent.      "
},
{
  "id": "s_matrix",
  "level": "1",
  "url": "s_matrix.html",
  "type": "Section",
  "number": "1.9",
  "title": "Matrix arithmetic",
  "body": " Matrix arithmetic   Matrices played a small supporting role in our discussion of linear systems in . In this section we bring them to center stage and give them a full-blown treatment as independent mathematical objects in their own right.  Like any mathematical entity worth its salt, matrices can be employed in a vast multitude of ways. As such it is important to allow matrices to transcend their humble beginnings in this course as boiled down systems of linear equations. We record this observation as another principle.   Matrix mantra   A matrix is a matrix is a matrix.  Not every matrix should be thought of as an augmented matrix associated to a linear system.      The basics  Recall that a matrix is just an -valued tuple indexed by the index set . We use the notation to denote the matrix whose -th entry is for all . Occasionally, we will wish to focus on a single entry of a matrix , in which case the entry notation introduced in will come in handy.   Matrix notation    Matrix whose -th entry is     -th entry of the matrix       Matrix-building notation  matrix matrix-building notation  The notation denotes the matrix whose -th entry is for all . When there is no danger of confusion, this notation is often shortened to .    Matrix entry notation  matrix matrix entry notation  Given a matrix , the notation denotes the -th entry of .   Thus if , then for all and .     The matrix-building notation is often used simply to give names to the entries of an arbitrary matrix. However, it can also be used to describe a matrix whose -th entry is given by specified rule or formula.  For example, let , where . This is the matrix whose -th entry is . Thus . In this example we have and for .   Using matrix notation we can now precisely define what the rows and columns of a matrix are.   Rows and columns of a matrix   Let be an matrix. For each , the -th row of is the -tuple .  Similarly, for each , the -th column of is the -tuple . Given -tuples , we denote by the matrix whose -th row is .  Similarly, given -tuples , we denote by the matrix whose -th column is .    It will be convenient to have names for matrices of particular shapes, as we now define.   Matrices of particular shape  matrix square   matrix row vector   matrix column vector    A matrix is square if its dimension is : , if . The diagonal of a square matrix consists of the entries of of the form for .  A matrix is called a row vector . The -th entry of a row vector is denoted   An matrix , is called a column vector . The -th entry of a column vector is denoted .    Before going further, we need to address the notion of equality of matrices. To do so, we consider more generally when two tuples and are equal. Recall that by definition a tuple is just a function: , the tuple is just the function , where for all ; and similarly, the tuple is just the function , where for all . Thus, the tuples and are equal if and only if the functions and are equal, and these two functions are equal if and only if (they have the same domain), (they have the same codomain), and for all . We conclude then, that an -valued tuple is equal to the -valued tuple if and only if , , and for all .  Restricting ourselves for the moment to the world of -valued matrices, we derive the following notion of equality.   Equality of matrices   The -valued matrices and are equal if and only if    and ;     for all and .   In other words, two -valued matrices are equal if and only if they have the same dimensions and the same entries in each position.    Note first that both matrices are -valued, and thus are both -valued tuples, taking care of that condition of tuple equality. Unpacking the the notational conventions, we have , where and , where . Thus the two matrices are equal if and only if and for all . The first condition is equivalent to and , and the second condition is equivalent to for all and .    Returning to the larger universe of tuples of all sorts, note how our rigorous notion of equality allows us to distinguish between the three quite similar looking tuples below: . Indeed, unpacking the notational definitions, we see that the three all have different indexing sets :   the first has     the second has ;    the third has .   Thus, strictly speaking -tuples, row vectors, and column vectors are distinct mathematical objects. That said, it is useful to have some flexibility in moving between these three different classes of objects, allowing us to begin with an -tuple and treat it as a row vector or column vector, or conversely. When so doing, we will use phrases like treated as a row vector , treated as a column vector , or treated as an -tuple to clarify.  It turns out that it is particularly convenient to conflate -tuples with column vectors , as you will see when we discuss the relation between solutions to linear systems and solutions to matrix equations. In fact, it is so convenient that we will simply declare by fiat that -tuples and column vectors are one and the same thing! This means that going forward we are permitted to treat tuples as column vectors and vice versa without further comment.   Column vectors shall be -tuples, and vice versa   We hereby declare that for all we have . In other words, -tuples are henceforth the same thing as column vectors.     Matrix entries, rows, and columns  Sage syntax for accessing specific entries of a matrix is similar in spirit to our matrix entry notation. However, as with all things Python, we always count from 0. Thus if A is assigned to a matrix in Sage, A[i,j] is its -th entry.   Prescribed subsets of matrix entries are obtained via slicing methods: for example, A[a:b, c:d] returns the collection of entries with and , arranged as a matrix.   Leaving the left or right side of : blank in this notation removes the corresponding restriction bound (left or right) from the index in question. Thus A[2, :] returns the third row of , and A[1:, 3] returns the portion of the fourth column of beginning with its second entry.   Alternatively, we can obtain a list of all rows or columns of using the the methods rows() and columns() .   Use the empty cell below to try out some of these commands.       Matrix multiplication  Recall that the set of all matrices has a vector space structure with respect to the operations of matrix addition and matrix scalar multiplication defined as , that the additive identity of is the zero matrix , and that the additive inverse of a matrix is the matrix .  We now add a third operation to this matrix arithmetic: matrix multiplication . Looking at the definition of matrix addition (which is defined entry-wise), you might guess that matrix multiplication is defined similarly: that is, that the product of two matrices should be defined simply by multiplying the corresponding entries. Not so! Though there is nothing fundamentally wrong with such a proposal, for reasons that will be made clear later, it turns out that the more complicated (and less intuitive) definition below is the one we are after.   Matrix multiplication  matrix multiplication   Let be positive integers. Given -valued matrices and , we define their product to be the matrix defined as . Equivalently, using matrix-entry notation, we have for all and .  The operation is called matrix multiplication .     Visualizing matrix multiplication  In , the -th entry is computed by moving across the -th row of and down the -th column of .       Size and matrix multiplication  Observe how, like addition, matrix multiplication is not defined for any pair of matrices: there must be a certain agreement in their dimensions.  In more detail, for the product of and to be defined, we need . In other words we need the inner dimensions of and to be equal: . If this condition is met, the dimension of the resulting matrix is determined by the outer dimensions of and . Schematically, you can think of the inner dimensions as being canceled out :     Matrix multiplication  Consider the real-valued matrices . Since the inner dimensions of and agree, we can form the product matrix , which has dimension . Let for all . Using , we compute . We conclude that .   The definition of a matrix product is undoubtedly more complicated than you expected, and seems to come completely out of the blue. All of this will make more sense once we begin thinking of matrices as defining certain functions . Our formula for the entries of is chosen precisely so that this new matrix corresponds to the composition of the functions and : so that . Under this interpretation, the ponderous restriction on the dimensions of the ingredient matrices ensures that the two functions and can be composed.   Matrix arithmetic  We use + and * for matrix addition and multiplication.   As evidence of Sage's flexibility, the same symbol * is also used for scalar multiplication.   Edit the cell below to practice these operations.      Alternative methods of multiplication  In addition to the given definition of matrix multiplication, we will make heavy use of two further ways of computing matrix products, called the column and row methods of matrix multiplication.   Column method of matrix multiplication  matrix multiplication column method   Let and . The column method of matrix multiplication computes using the two steps below.   Step 1  Let be the -th column of , considered as a column vector. Then .    Step 2  Let be the -th column of , considered as a column vector. Given any column vector we have .       We prove the equalities in both steps separately.   Proof of Step 1  We must show , where . First we show and have the same size. By definition of matrix multiplication, is . By construction has columns and its -th column is . Since and have size and , respectively, has size . Thus each of the columns of is an column vector. It follows that is , as desired.  Next we show that for all , . Since the -th entry of is the -th entry of the -th column of , we have .    Proof of Step 2  We must show that , where . The usual argument shows that both and are column vectors. It remains only to show that the -th entry of the column is equal to the -th entry of for all . For any such we have .       amounts to a two-step process for computing an arbitrary matrix product .  The first statement (Step 1) tells us that the -th column of the matrix can be obtained by computing the product of with the -th column of .  The second statement (Step 2) tells us that each product can itself be computed as a certain linear combination of the columns of with coefficients drawn from .  A similar remark applies to computing matrix products using the row method, as described below in .    Row method of matrix multiplication  matrix multiplication row method   Let and . The row method of matrix multiplication computes using the two steps below.   Step 1  Let be the -th row of . Then .    Step 2  Let be the -th row of . Given any row vector we have .       The proof is very similar to that of and is left to the reader.     Column and row methods   Let and   Compute using (a) the definition of matrix multiplication, (b) the column method, (c) the row method.       Using the definition, we see easily that     Let be the columns of , and let be the columns of . We have     Now let be the rows of , and let be the rows of . We have         Column and row methods  Let's verify the validity of the column and row methods using Sage in some specific examples. Below we generate random integer matrices and of dimension and , respectively, and compute their product .   Let's check that the -th column of is equal to the product of with the -th column of .   Alternatively, we can visually confirm these equalities using the display of in the first cell above. Observe that the result of A*colsB[i] is displayed by Sage as a tuple, though technically for us this is a column vector.   Next, let's verify that the result of multiplying and the -th column of is the corresponding linear combination of the columns of given by the coefficients of this column.   Now use the Sage cells below to demonstrate the validity of the row method for the product . Simply modify the code in the two cells above to reflect the row method, as opposed to the column method.      Video example of matrix multiplication   Video: three methods of matrix multiplication       Transpose of a matrix  We end this section with one last operation, matrix transposition . We will not make much use of this operation until later, but this is as good a place as any to introduce it.   Matrix transposition  matrix transposition  transpose   Given an matrix its transpose is the matrix whose -entry is the -th entry of . In other words, is the matrix satisfying for all and .     Given a matrix we can give a column- or row-based description of as follows:    is the matrix whose -th row is the -th column of .     is the matrix whose -th column is the -th row of .       Transpose   Let ; then .  Let , then .     Matrix transposition  Matrix transposition is implemented in Sage as the transpose() method. In the cell below we (a) choose random integers , (b) choose a random matrix with integer entries, and (c) compute the transpose of .   As usual, experiment with the Sage cell below.      WeBWork Exercises      Enter T or F depending on whether the statement is true or false. (You must enter T or F -- True and False will not work.)    If AB is defined, then BA is also defined.    If A is a square matrix such that AA equals the 0 matrix, then A must equal the 0 matrix.              Matrix Products: Consider the matrices   Of the possible matrix products ,  which make sense?    C            If A is B is and C is then:  a) BA has dimension    b) CB has dimension    c) AC has dimension                                            Determine and such that                           Determine the value(s) of such that   =  Note: If there is more than one value separate them by commas.                  For each part below write down the most general matrix satisfying the given condition (use letter names ,etc. for entries).     for all .     for all      for .        Let  . Compute the following matrices, or else explain why the given expression is not well defined.                       Let . Compute the following using either the row or column method of matrix multiplication. Make sure to show how you are using the relevant method.   the first column of ;    the second row of ;    the third column of .          Using expansion by columns, the first column of is given by times the first column of . We compute          Use the row or column method to quickly compute the following product:     I'll just describe the row method here.  Note that the rows of are all identical, and equal to . From the row method it follows that each row of is given by .  Thus the rows of are all identical, and the row method computes the product above by taking the corresponding alternating sum of the rows of : .  Thus is the the matrix, all of whose rows are .      Each of the matrices below performs a specific row operation when multiplying a matrix on the left; i.e., the matrix is the result of performing a certain row operation on the matrix . Use the row method of matrix multiplication to decide what row operation each performs. .       Let be an integer. Prove, by induction on , that for any matrices and scalars , we have for all , .      "
},
{
  "id": "princ_matrix_mantra",
  "level": "2",
  "url": "s_matrix.html#princ_matrix_mantra",
  "type": "Mantra",
  "number": "1.9.1",
  "title": "Matrix mantra.",
  "body": " Matrix mantra   A matrix is a matrix is a matrix.  Not every matrix should be thought of as an augmented matrix associated to a linear system.   "
},
{
  "id": "d_matrix_notation",
  "level": "2",
  "url": "s_matrix.html#d_matrix_notation",
  "type": "Definition",
  "number": "1.9.2",
  "title": "Matrix notation.",
  "body": " Matrix notation    Matrix whose -th entry is     -th entry of the matrix       Matrix-building notation  matrix matrix-building notation  The notation denotes the matrix whose -th entry is for all . When there is no danger of confusion, this notation is often shortened to .    Matrix entry notation  matrix matrix entry notation  Given a matrix , the notation denotes the -th entry of .   Thus if , then for all and .   "
},
{
  "id": "ss_matrix_attributes-4",
  "level": "2",
  "url": "s_matrix.html#ss_matrix_attributes-4",
  "type": "Remark",
  "number": "1.9.3",
  "title": "",
  "body": " The matrix-building notation is often used simply to give names to the entries of an arbitrary matrix. However, it can also be used to describe a matrix whose -th entry is given by specified rule or formula.  For example, let , where . This is the matrix whose -th entry is . Thus . In this example we have and for .  "
},
{
  "id": "d_rows_columns",
  "level": "2",
  "url": "s_matrix.html#d_rows_columns",
  "type": "Definition",
  "number": "1.9.4",
  "title": "Rows and columns of a matrix.",
  "body": " Rows and columns of a matrix   Let be an matrix. For each , the -th row of is the -tuple .  Similarly, for each , the -th column of is the -tuple . Given -tuples , we denote by the matrix whose -th row is .  Similarly, given -tuples , we denote by the matrix whose -th column is .   "
},
{
  "id": "d_square_matrices",
  "level": "2",
  "url": "s_matrix.html#d_square_matrices",
  "type": "Definition",
  "number": "1.9.5",
  "title": "Matrices of particular shape.",
  "body": " Matrices of particular shape  matrix square   matrix row vector   matrix column vector    A matrix is square if its dimension is : , if . The diagonal of a square matrix consists of the entries of of the form for .  A matrix is called a row vector . The -th entry of a row vector is denoted   An matrix , is called a column vector . The -th entry of a column vector is denoted .   "
},
{
  "id": "prop_equality_matrix",
  "level": "2",
  "url": "s_matrix.html#prop_equality_matrix",
  "type": "Proposition",
  "number": "1.9.6",
  "title": "Equality of matrices.",
  "body": " Equality of matrices   The -valued matrices and are equal if and only if    and ;     for all and .   In other words, two -valued matrices are equal if and only if they have the same dimensions and the same entries in each position.    Note first that both matrices are -valued, and thus are both -valued tuples, taking care of that condition of tuple equality. Unpacking the the notational conventions, we have , where and , where . Thus the two matrices are equal if and only if and for all . The first condition is equivalent to and , and the second condition is equivalent to for all and .   "
},
{
  "id": "declaration_tuples_columns",
  "level": "2",
  "url": "s_matrix.html#declaration_tuples_columns",
  "type": "Fiat",
  "number": "1.9.7",
  "title": "Column vectors shall be <span class=\"process-math\">\\(n\\)<\/span>-tuples, and vice versa.",
  "body": " Column vectors shall be -tuples, and vice versa   We hereby declare that for all we have . In other words, -tuples are henceforth the same thing as column vectors.   "
},
{
  "id": "sage_matrix_entries_rows_cols",
  "level": "2",
  "url": "s_matrix.html#sage_matrix_entries_rows_cols",
  "type": "Sage Example",
  "number": "3",
  "title": "Matrix entries, rows, and columns.",
  "body": " Matrix entries, rows, and columns  Sage syntax for accessing specific entries of a matrix is similar in spirit to our matrix entry notation. However, as with all things Python, we always count from 0. Thus if A is assigned to a matrix in Sage, A[i,j] is its -th entry.   Prescribed subsets of matrix entries are obtained via slicing methods: for example, A[a:b, c:d] returns the collection of entries with and , arranged as a matrix.   Leaving the left or right side of : blank in this notation removes the corresponding restriction bound (left or right) from the index in question. Thus A[2, :] returns the third row of , and A[1:, 3] returns the portion of the fourth column of beginning with its second entry.   Alternatively, we can obtain a list of all rows or columns of using the the methods rows() and columns() .   Use the empty cell below to try out some of these commands.   "
},
{
  "id": "d_matrix_mult",
  "level": "2",
  "url": "s_matrix.html#d_matrix_mult",
  "type": "Definition",
  "number": "1.9.8",
  "title": "Matrix multiplication.",
  "body": " Matrix multiplication  matrix multiplication   Let be positive integers. Given -valued matrices and , we define their product to be the matrix defined as . Equivalently, using matrix-entry notation, we have for all and .  The operation is called matrix multiplication .   "
},
{
  "id": "fig_matrix_mult",
  "level": "2",
  "url": "s_matrix.html#fig_matrix_mult",
  "type": "Figure",
  "number": "1.9.9",
  "title": "Visualizing matrix multiplication",
  "body": " Visualizing matrix multiplication  In , the -th entry is computed by moving across the -th row of and down the -th column of .     "
},
{
  "id": "ss_matrix_mult-6",
  "level": "2",
  "url": "s_matrix.html#ss_matrix_mult-6",
  "type": "Remark",
  "number": "1.9.10",
  "title": "Size and matrix multiplication.",
  "body": " Size and matrix multiplication  Observe how, like addition, matrix multiplication is not defined for any pair of matrices: there must be a certain agreement in their dimensions.  In more detail, for the product of and to be defined, we need . In other words we need the inner dimensions of and to be equal: . If this condition is met, the dimension of the resulting matrix is determined by the outer dimensions of and . Schematically, you can think of the inner dimensions as being canceled out :   "
},
{
  "id": "eg_matrix_mult",
  "level": "2",
  "url": "s_matrix.html#eg_matrix_mult",
  "type": "Example",
  "number": "1.9.11",
  "title": "Matrix multiplication.",
  "body": " Matrix multiplication  Consider the real-valued matrices . Since the inner dimensions of and agree, we can form the product matrix , which has dimension . Let for all . Using , we compute . We conclude that .  "
},
{
  "id": "ss_matrix_mult-9",
  "level": "2",
  "url": "s_matrix.html#ss_matrix_mult-9",
  "type": "Sage Example",
  "number": "4",
  "title": "Matrix arithmetic.",
  "body": " Matrix arithmetic  We use + and * for matrix addition and multiplication.   As evidence of Sage's flexibility, the same symbol * is also used for scalar multiplication.   Edit the cell below to practice these operations.   "
},
{
  "id": "th_column_method",
  "level": "2",
  "url": "s_matrix.html#th_column_method",
  "type": "Theorem",
  "number": "1.9.12",
  "title": "Column method of matrix multiplication.",
  "body": " Column method of matrix multiplication  matrix multiplication column method   Let and . The column method of matrix multiplication computes using the two steps below.   Step 1  Let be the -th column of , considered as a column vector. Then .    Step 2  Let be the -th column of , considered as a column vector. Given any column vector we have .       We prove the equalities in both steps separately.   Proof of Step 1  We must show , where . First we show and have the same size. By definition of matrix multiplication, is . By construction has columns and its -th column is . Since and have size and , respectively, has size . Thus each of the columns of is an column vector. It follows that is , as desired.  Next we show that for all , . Since the -th entry of is the -th entry of the -th column of , we have .    Proof of Step 2  We must show that , where . The usual argument shows that both and are column vectors. It remains only to show that the -th entry of the column is equal to the -th entry of for all . For any such we have .    "
},
{
  "id": "s_column_row_method-4",
  "level": "2",
  "url": "s_matrix.html#s_column_row_method-4",
  "type": "Remark",
  "number": "1.9.13",
  "title": "",
  "body": "  amounts to a two-step process for computing an arbitrary matrix product .  The first statement (Step 1) tells us that the -th column of the matrix can be obtained by computing the product of with the -th column of .  The second statement (Step 2) tells us that each product can itself be computed as a certain linear combination of the columns of with coefficients drawn from .  A similar remark applies to computing matrix products using the row method, as described below in .  "
},
{
  "id": "th_row_method",
  "level": "2",
  "url": "s_matrix.html#th_row_method",
  "type": "Theorem",
  "number": "1.9.14",
  "title": "Row method of matrix multiplication.",
  "body": " Row method of matrix multiplication  matrix multiplication row method   Let and . The row method of matrix multiplication computes using the two steps below.   Step 1  Let be the -th row of . Then .    Step 2  Let be the -th row of . Given any row vector we have .       The proof is very similar to that of and is left to the reader.   "
},
{
  "id": "s_matrix_ex_product",
  "level": "2",
  "url": "s_matrix.html#s_matrix_ex_product",
  "type": "Example",
  "number": "1.9.15",
  "title": "Column and row methods.",
  "body": " Column and row methods   Let and   Compute using (a) the definition of matrix multiplication, (b) the column method, (c) the row method.       Using the definition, we see easily that     Let be the columns of , and let be the columns of . We have     Now let be the rows of , and let be the rows of . We have       "
},
{
  "id": "s_column_row_method-7",
  "level": "2",
  "url": "s_matrix.html#s_column_row_method-7",
  "type": "Sage Example",
  "number": "5",
  "title": "Column and row methods.",
  "body": " Column and row methods  Let's verify the validity of the column and row methods using Sage in some specific examples. Below we generate random integer matrices and of dimension and , respectively, and compute their product .   Let's check that the -th column of is equal to the product of with the -th column of .   Alternatively, we can visually confirm these equalities using the display of in the first cell above. Observe that the result of A*colsB[i] is displayed by Sage as a tuple, though technically for us this is a column vector.   Next, let's verify that the result of multiplying and the -th column of is the corresponding linear combination of the columns of given by the coefficients of this column.   Now use the Sage cells below to demonstrate the validity of the row method for the product . Simply modify the code in the two cells above to reflect the row method, as opposed to the column method.    "
},
{
  "id": "video_eg_matrix_mult_vid",
  "level": "2",
  "url": "s_matrix.html#video_eg_matrix_mult_vid",
  "type": "Example",
  "number": "1.9.16",
  "title": "Video example of matrix multiplication.",
  "body": " Video example of matrix multiplication   Video: three methods of matrix multiplication    "
},
{
  "id": "d_transpose",
  "level": "2",
  "url": "s_matrix.html#d_transpose",
  "type": "Definition",
  "number": "1.9.18",
  "title": "Matrix transposition.",
  "body": " Matrix transposition  matrix transposition  transpose   Given an matrix its transpose is the matrix whose -entry is the -th entry of . In other words, is the matrix satisfying for all and .   "
},
{
  "id": "s_matrix-6-4",
  "level": "2",
  "url": "s_matrix.html#s_matrix-6-4",
  "type": "Remark",
  "number": "1.9.19",
  "title": "",
  "body": " Given a matrix we can give a column- or row-based description of as follows:    is the matrix whose -th row is the -th column of .     is the matrix whose -th column is the -th row of .     "
},
{
  "id": "eg_transpose",
  "level": "2",
  "url": "s_matrix.html#eg_transpose",
  "type": "Example",
  "number": "1.9.20",
  "title": "Transpose.",
  "body": " Transpose   Let ; then .  Let , then .   "
},
{
  "id": "s_matrix-6-6",
  "level": "2",
  "url": "s_matrix.html#s_matrix-6-6",
  "type": "Sage Example",
  "number": "6",
  "title": "Matrix transposition.",
  "body": " Matrix transposition  Matrix transposition is implemented in Sage as the transpose() method. In the cell below we (a) choose random integers , (b) choose a random matrix with integer entries, and (c) compute the transpose of .   As usual, experiment with the Sage cell below.   "
},
{
  "id": "ss_matrix_ww-2",
  "level": "2",
  "url": "s_matrix.html#ss_matrix_ww-2",
  "type": "WeBWorK",
  "number": "1.9.21",
  "title": "",
  "body": "    Enter T or F depending on whether the statement is true or false. (You must enter T or F -- True and False will not work.)    If AB is defined, then BA is also defined.    If A is a square matrix such that AA equals the 0 matrix, then A must equal the 0 matrix.         "
},
{
  "id": "ss_matrix_ww-3",
  "level": "2",
  "url": "s_matrix.html#ss_matrix_ww-3",
  "type": "WeBWorK",
  "number": "1.9.22",
  "title": "",
  "body": "    Matrix Products: Consider the matrices   Of the possible matrix products ,  which make sense?    C       "
},
{
  "id": "ss_matrix_ww-4",
  "level": "2",
  "url": "s_matrix.html#ss_matrix_ww-4",
  "type": "WeBWorK",
  "number": "1.9.23",
  "title": "",
  "body": "    If A is B is and C is then:  a) BA has dimension    b) CB has dimension    c) AC has dimension                                       "
},
{
  "id": "ss_matrix_ww-5",
  "level": "2",
  "url": "s_matrix.html#ss_matrix_ww-5",
  "type": "WeBWorK",
  "number": "1.9.24",
  "title": "",
  "body": "    Determine and such that                      "
},
{
  "id": "ss_matrix_ww-6",
  "level": "2",
  "url": "s_matrix.html#ss_matrix_ww-6",
  "type": "WeBWorK",
  "number": "1.9.25",
  "title": "",
  "body": "    Determine the value(s) of such that   =  Note: If there is more than one value separate them by commas.            "
},
{
  "id": "s_matrix_ex-1-1",
  "level": "2",
  "url": "s_matrix.html#s_matrix_ex-1-1",
  "type": "Exercise",
  "number": "1.9.6.1",
  "title": "",
  "body": "  For each part below write down the most general matrix satisfying the given condition (use letter names ,etc. for entries).     for all .     for all      for .     "
},
{
  "id": "s_matrix_ex-1-2",
  "level": "2",
  "url": "s_matrix.html#s_matrix_ex-1-2",
  "type": "Exercise",
  "number": "1.9.6.2",
  "title": "",
  "body": "  Let  . Compute the following matrices, or else explain why the given expression is not well defined.                    "
},
{
  "id": "s_matrix_ex-1-3",
  "level": "2",
  "url": "s_matrix.html#s_matrix_ex-1-3",
  "type": "Exercise",
  "number": "1.9.6.3",
  "title": "",
  "body": "  Let . Compute the following using either the row or column method of matrix multiplication. Make sure to show how you are using the relevant method.   the first column of ;    the second row of ;    the third column of .          Using expansion by columns, the first column of is given by times the first column of . We compute       "
},
{
  "id": "s_matrix_ex-1-4",
  "level": "2",
  "url": "s_matrix.html#s_matrix_ex-1-4",
  "type": "Exercise",
  "number": "1.9.6.4",
  "title": "",
  "body": "  Use the row or column method to quickly compute the following product:     I'll just describe the row method here.  Note that the rows of are all identical, and equal to . From the row method it follows that each row of is given by .  Thus the rows of are all identical, and the row method computes the product above by taking the corresponding alternating sum of the rows of : .  Thus is the the matrix, all of whose rows are .   "
},
{
  "id": "s_matrix_ex-1-5",
  "level": "2",
  "url": "s_matrix.html#s_matrix_ex-1-5",
  "type": "Exercise",
  "number": "1.9.6.5",
  "title": "",
  "body": "  Each of the matrices below performs a specific row operation when multiplying a matrix on the left; i.e., the matrix is the result of performing a certain row operation on the matrix . Use the row method of matrix multiplication to decide what row operation each performs. .    "
},
{
  "id": "ex_entry_lin_comb",
  "level": "2",
  "url": "s_matrix.html#ex_entry_lin_comb",
  "type": "Exercise",
  "number": "1.9.6.6",
  "title": "",
  "body": "  Let be an integer. Prove, by induction on , that for any matrices and scalars , we have for all , .   "
},
{
  "id": "s_matrix_algebra",
  "level": "1",
  "url": "s_matrix_algebra.html",
  "type": "Section",
  "number": "1.10",
  "title": "Matrix algebra",
  "body": " Matrix algebra   The last section was devoted to what might be called the arithmetic of matrices. We learned the basic operations of adding, multiplying, scaling, and transposing matrices. In this section we tackle the algebra of matrices. We will investigate the properties enjoyed (and not enjoyed) by our matrix operations, and will show how to use these operations to solve matrix equations.  As you learn about matrix algebra, always keep in mind your old friend, real number algebra. For the most part these two algebraic systems closely resemble one another, as below makes clear. However, there are two crucial points where they differ (see ): two important properties of real number algebra that do not hold for matrices. The consequences of these two simple aberrations are far-reaching and imbue matrix algebra with a fascinating richness in comparison to real number algebra.    Matrix multiplication properties  We begin with a few results that establish a close connection between matrix multiplication and real number multiplication.   Properties of matrix multiplication   In what follows will denote positive integers.   Associative law   for all     Left-distributive law   for all and .    Right-distributive law   for all and .    Scaling commutative law   for all , , .       How does one actually prove one of these properties? These are all matrix equalities of the form , and according to , two matrices are equal if (a) they are of the same shape, and (b) their corresponding entries are equal. Let's make an official procedure out of this, using matrix-entry notation.   Proving matrix equalities   Let be an matrix, and let be an matrix. To show that proceed as follows.   Same dimensions  Show that and : , show that and have the same shape.    Same entries  Having shown that both matrices are of dimension , show that for all . Equivalently, if and , show that for all .       Let's illustrate by proving the multiplication associative law of .   Proof of : associative law  We prove only the associative law . Let , , . To show , we must show (1) that and have the same dimension, and (2) that for all possible .  Addressing the dimensions of the left and right sides, note that since , we have (using ) . Thus and are both matrices.  Next, given any with and , we have:   This proves that all entries of the two matrices are equal, and hence .    Video example: proving matrix equalities   Video: matrix multiplication is associative     Like real number algebra, there are certain matrices that satisfy special properties with regard to the operations of addition and multiplication. We have seen examples of this already thanks to the natural vector space structure of . For example, the zero matrix acts as an additive indentity ( , for all ) and vector inverses act as additive inverses ( , for all ). We now introduce the identity matrices , which satisfy a multiplicative identity property with respect to matrix multiplication, and thus play a role analogous to the number among real numbers.   Identity matrix  identity matrix  matrix identity matrix    inverse matrix    The identity matrix , denoted , is the square matrix with ones along the diagonal and zeros everywhere else. In other words, for all and , we have . When there is no confusion about which dimension identity matrix is intended, we will often write simply instead of .     Multiplicative identities   Let be a positive integer. The identity matrix acts as a multiplicative identity among matrices in the following sense: for all we have .     Left as an exercise.     Cancellation laws fulfilled and violated  When performing real number algebra, we frequently make use of cancellation laws, and these laws come in a variety of flavors. For example, the additive cancellation law asserts that for all . Similarly, the multiplicative cancellation law asserts that for any nonzero  , we have for all . We now investigate the extent to which these laws apply in matrix algebra. The results, as you will see, are mixed!   Additive cancellation of matrices   Given matrices , and , we have if and only if . Using logical notation:     As simple as this claim might seem, remember that we are dealing with a completely new algebraic system here. We will prove both implications of if and only if statement separately.   Proof:  We prove this via a chain of implications: .    Proof:  This direction is obvious: if and are equal matrices, then they remain equal when we add to each of them.      The algebraic importance of is that we can perform additive cancellation in matrix equations just as we do in real number algebra. For example, we can solve the matrix equation for as follows:  .   Though we can perform additive cancellation in matrix algebra, we can not always perform multiplicative cancellation . For example, consider the matrices . Check for yourself that , and yet . In other words, we cannot always cancel  from the matrix equation .   The example in our warning above is but one instance of the general failure of the principle of multiplicative cancellation in matrix algebra. This in turn is a consequence of the following theorem, which identifies the two crucial places where matrix algebra differs significantly from real number algebra.   Matrix algebra abnormalities      Matrix multiplication is not commutative  Given matrices and , we do not necessarily have .    Products of nonzero matrices may be equal to zero  If the product of two matrices is the zero matrix, we cannot conclude that one of matrices is the zero matrix. In logical notation: .       This is a good place to point out that to prove an identity does not hold, it suffices to provide a single counterexample to that effect. We do so for each failed identity of in turn. There is no significance to the particular counterexamples chosen here, and indeed there are infinitely many counterexamples to choose from in both cases.   We have and thus .    Observe that . This is an example of two nonzero matrices whose product is the zero matrix.     An important consequence of the abnormality is that matrix algebra does not enjoy the property of multiplicative cancellation.   Failure of multiplicative cancellation     Suppose matrices satisfy and . We cannot conclude that . In logical notation:     Suppose matrices satisfy and . We cannot conclude that . In logical notation:        Again, we need only provide explicit counterexamples for each statement.    Let , , . Verify for yourself that . Thus , but clearly .    Let , , . We have . Thus , but .      Mark well this important abnormality of matrix algebra. Confronted with a real number equation of the form , we have a deeply ingrained impulse to declare that either or . (If we're sloppy we may forget about that first possibility.) The corresponding maneuver for the matrix equation is simply not available to us, unless we know something more about .     Transpostition properties  We end our foray into matrix algebra with some properties articulating how matrix transposition interacts with matrix addition, multiplication and scalar multiplication.   Properties of matrix transposition   In what follows will denote positive integers.    for all .     for all and .     for all .     for all .       We prove only the first statement. First observe that if is , then so is and . Then is by . Similarly, we see that is .  Next, given any with , , we have . Since the -entries of both matrices are equal for each , it follows that .     Video example: proving matrix equalities   Video: transpose property       WeBWork Exercises      Determine which of the following statements are true and which are false.    If and are square matrices of the same size then .    The matrices and are always square, regardless of the size of .    If and is a column vector, then is a linear combination of the columns of .    If and is a column vector, then is a linear combination of the rows of .    If and are square matrices of the same size, then .               Let be a 5 by 8 matrix. Then is a by matrix, and is a by matrix.                                Let   Then   where  ,  ,  ,  ,  and   where  ,  ,  ,  .                                                     In this exercise you will complete the proof of .    Prove the .    Prove the .    Prove the .        Prove .      In this exercise you will complete the proof of .    Prove Statement .    Prove Statement .    Prove Statement .        Let an matrix. We define its square  as .    In real number algebra we know that . By contrast, show that there are infinitely many matrices satisfying .  Optional: can you describe in a parametric manner the set of all matrices satisfying ?    In real number algebra we know that . By contrast, show that there are infinitely many matrices satisfying .    In real number algebra we have the identity . Show that two matrices , satisfy if and only if .      For (a) set , compute , set this matrix equal to , and try and find some solutions to the corresponding (nonlinear) system of four equations in the unknowns .  Similar hint for (b), only now set .      Consider the matrix equation .     The following chain of implications is invalid. . For each implication in the chain, explain why it is valid or invalid.      Find all satisfying .    Write and set up a system of linear equations in the unknowns .       "
},
{
  "id": "th_matrix_alg_props",
  "level": "2",
  "url": "s_matrix_algebra.html#th_matrix_alg_props",
  "type": "Theorem",
  "number": "1.10.1",
  "title": "Properties of matrix multiplication.",
  "body": " Properties of matrix multiplication   In what follows will denote positive integers.   Associative law   for all     Left-distributive law   for all and .    Right-distributive law   for all and .    Scaling commutative law   for all , , .      "
},
{
  "id": "proc_matrix_equality",
  "level": "2",
  "url": "s_matrix_algebra.html#proc_matrix_equality",
  "type": "Procedure",
  "number": "1.10.2",
  "title": "Proving matrix equalities.",
  "body": " Proving matrix equalities   Let be an matrix, and let be an matrix. To show that proceed as follows.   Same dimensions  Show that and : , show that and have the same shape.    Same entries  Having shown that both matrices are of dimension , show that for all . Equivalently, if and , show that for all .      "
},
{
  "id": "ss_matrix_mult_props-7",
  "level": "2",
  "url": "s_matrix_algebra.html#ss_matrix_mult_props-7",
  "type": "Proof",
  "number": "1.10.1.1",
  "title": "Proof of Theorem 1.10.1: associative law.",
  "body": " Proof of : associative law  We prove only the associative law . Let , , . To show , we must show (1) that and have the same dimension, and (2) that for all possible .  Addressing the dimensions of the left and right sides, note that since , we have (using ) . Thus and are both matrices.  Next, given any with and , we have:   This proves that all entries of the two matrices are equal, and hence .  "
},
{
  "id": "eg_vid_prove_matrix_assoc",
  "level": "2",
  "url": "s_matrix_algebra.html#eg_vid_prove_matrix_assoc",
  "type": "Example",
  "number": "1.10.3",
  "title": "Video example: proving matrix equalities.",
  "body": " Video example: proving matrix equalities   Video: matrix multiplication is associative    "
},
{
  "id": "d_identity_matrix",
  "level": "2",
  "url": "s_matrix_algebra.html#d_identity_matrix",
  "type": "Definition",
  "number": "1.10.5",
  "title": "Identity matrix.",
  "body": " Identity matrix  identity matrix  matrix identity matrix    inverse matrix    The identity matrix , denoted , is the square matrix with ones along the diagonal and zeros everywhere else. In other words, for all and , we have . When there is no confusion about which dimension identity matrix is intended, we will often write simply instead of .   "
},
{
  "id": "th_matrix_add_mult_ident",
  "level": "2",
  "url": "s_matrix_algebra.html#th_matrix_add_mult_ident",
  "type": "Theorem",
  "number": "1.10.6",
  "title": "Multiplicative identities.",
  "body": " Multiplicative identities   Let be a positive integer. The identity matrix acts as a multiplicative identity among matrices in the following sense: for all we have .   "
},
{
  "id": "ss_matrix_mult_props-12",
  "level": "2",
  "url": "s_matrix_algebra.html#ss_matrix_mult_props-12",
  "type": "Proof",
  "number": "1.10.1.2",
  "title": "",
  "body": " Left as an exercise.  "
},
{
  "id": "c_matrix_additive_canc",
  "level": "2",
  "url": "s_matrix_algebra.html#c_matrix_additive_canc",
  "type": "Theorem",
  "number": "1.10.7",
  "title": "Additive cancellation of matrices.",
  "body": " Additive cancellation of matrices   Given matrices , and , we have if and only if . Using logical notation:     As simple as this claim might seem, remember that we are dealing with a completely new algebraic system here. We will prove both implications of if and only if statement separately.   Proof:  We prove this via a chain of implications: .    Proof:  This direction is obvious: if and are equal matrices, then they remain equal when we add to each of them.    "
},
{
  "id": "ss_cancellation-4",
  "level": "2",
  "url": "s_matrix_algebra.html#ss_cancellation-4",
  "type": "Remark",
  "number": "1.10.8",
  "title": "",
  "body": " The algebraic importance of is that we can perform additive cancellation in matrix equations just as we do in real number algebra. For example, we can solve the matrix equation for as follows:  . "
},
{
  "id": "ss_cancellation-5",
  "level": "2",
  "url": "s_matrix_algebra.html#ss_cancellation-5",
  "type": "Warning",
  "number": "1.10.9",
  "title": "",
  "body": " Though we can perform additive cancellation in matrix algebra, we can not always perform multiplicative cancellation . For example, consider the matrices . Check for yourself that , and yet . In other words, we cannot always cancel  from the matrix equation .  "
},
{
  "id": "th_matrix_abnormalities",
  "level": "2",
  "url": "s_matrix_algebra.html#th_matrix_abnormalities",
  "type": "Theorem",
  "number": "1.10.10",
  "title": "Matrix algebra abnormalities.",
  "body": " Matrix algebra abnormalities      Matrix multiplication is not commutative  Given matrices and , we do not necessarily have .    Products of nonzero matrices may be equal to zero  If the product of two matrices is the zero matrix, we cannot conclude that one of matrices is the zero matrix. In logical notation: .      "
},
{
  "id": "th_matrix_cancel",
  "level": "2",
  "url": "s_matrix_algebra.html#th_matrix_cancel",
  "type": "Corollary",
  "number": "1.10.11",
  "title": "Failure of multiplicative cancellation.",
  "body": " Failure of multiplicative cancellation     Suppose matrices satisfy and . We cannot conclude that . In logical notation:     Suppose matrices satisfy and . We cannot conclude that . In logical notation:      "
},
{
  "id": "ss_cancellation-11",
  "level": "2",
  "url": "s_matrix_algebra.html#ss_cancellation-11",
  "type": "Proof",
  "number": "1.10.2.1",
  "title": "",
  "body": " Again, we need only provide explicit counterexamples for each statement.    Let , , . Verify for yourself that . Thus , but clearly .    Let , , . We have . Thus , but .    "
},
{
  "id": "rm_cancel_failure",
  "level": "2",
  "url": "s_matrix_algebra.html#rm_cancel_failure",
  "type": "Remark",
  "number": "1.10.12",
  "title": "",
  "body": " Mark well this important abnormality of matrix algebra. Confronted with a real number equation of the form , we have a deeply ingrained impulse to declare that either or . (If we're sloppy we may forget about that first possibility.) The corresponding maneuver for the matrix equation is simply not available to us, unless we know something more about .  "
},
{
  "id": "th_trans_props",
  "level": "2",
  "url": "s_matrix_algebra.html#th_trans_props",
  "type": "Theorem",
  "number": "1.10.13",
  "title": "Properties of matrix transposition.",
  "body": " Properties of matrix transposition   In what follows will denote positive integers.    for all .     for all and .     for all .     for all .       We prove only the first statement. First observe that if is , then so is and . Then is by . Similarly, we see that is .  Next, given any with , , we have . Since the -entries of both matrices are equal for each , it follows that .   "
},
{
  "id": "eg_vid_prove_matrix_transpose",
  "level": "2",
  "url": "s_matrix_algebra.html#eg_vid_prove_matrix_transpose",
  "type": "Example",
  "number": "1.10.14",
  "title": "Video example: proving matrix equalities.",
  "body": " Video example: proving matrix equalities   Video: transpose property    "
},
{
  "id": "ss_matrix_algebra_ww-2",
  "level": "2",
  "url": "s_matrix_algebra.html#ss_matrix_algebra_ww-2",
  "type": "WeBWorK",
  "number": "1.10.16",
  "title": "",
  "body": "    Determine which of the following statements are true and which are false.    If and are square matrices of the same size then .    The matrices and are always square, regardless of the size of .    If and is a column vector, then is a linear combination of the columns of .    If and is a column vector, then is a linear combination of the rows of .    If and are square matrices of the same size, then .         "
},
{
  "id": "ss_matrix_algebra_ww-3",
  "level": "2",
  "url": "s_matrix_algebra.html#ss_matrix_algebra_ww-3",
  "type": "WeBWorK",
  "number": "1.10.17",
  "title": "",
  "body": "    Let be a 5 by 8 matrix. Then is a by matrix, and is a by matrix.                           "
},
{
  "id": "ss_matrix_algebra_ww-4",
  "level": "2",
  "url": "s_matrix_algebra.html#ss_matrix_algebra_ww-4",
  "type": "WeBWorK",
  "number": "1.10.18",
  "title": "",
  "body": "    Let   Then   where  ,  ,  ,  ,  and   where  ,  ,  ,  .                                               "
},
{
  "id": "s_matrix_algebra_ex-1-1",
  "level": "2",
  "url": "s_matrix_algebra.html#s_matrix_algebra_ex-1-1",
  "type": "Exercise",
  "number": "1.10.5.1",
  "title": "",
  "body": "  In this exercise you will complete the proof of .    Prove the .    Prove the .    Prove the .     "
},
{
  "id": "s_matrix_algebra_ex-1-2",
  "level": "2",
  "url": "s_matrix_algebra.html#s_matrix_algebra_ex-1-2",
  "type": "Exercise",
  "number": "1.10.5.2",
  "title": "",
  "body": "  Prove .   "
},
{
  "id": "s_matrix_algebra_ex-1-3",
  "level": "2",
  "url": "s_matrix_algebra.html#s_matrix_algebra_ex-1-3",
  "type": "Exercise",
  "number": "1.10.5.3",
  "title": "",
  "body": "  In this exercise you will complete the proof of .    Prove Statement .    Prove Statement .    Prove Statement .     "
},
{
  "id": "s_matrix_algebra_ex-1-4",
  "level": "2",
  "url": "s_matrix_algebra.html#s_matrix_algebra_ex-1-4",
  "type": "Exercise",
  "number": "1.10.5.4",
  "title": "",
  "body": "  Let an matrix. We define its square  as .    In real number algebra we know that . By contrast, show that there are infinitely many matrices satisfying .  Optional: can you describe in a parametric manner the set of all matrices satisfying ?    In real number algebra we know that . By contrast, show that there are infinitely many matrices satisfying .    In real number algebra we have the identity . Show that two matrices , satisfy if and only if .      For (a) set , compute , set this matrix equal to , and try and find some solutions to the corresponding (nonlinear) system of four equations in the unknowns .  Similar hint for (b), only now set .   "
},
{
  "id": "s_matrix_algebra_ex-1-5",
  "level": "2",
  "url": "s_matrix_algebra.html#s_matrix_algebra_ex-1-5",
  "type": "Exercise",
  "number": "1.10.5.5",
  "title": "",
  "body": "  Consider the matrix equation .     The following chain of implications is invalid. . For each implication in the chain, explain why it is valid or invalid.      Find all satisfying .    Write and set up a system of linear equations in the unknowns .    "
},
{
  "id": "s_invertible_matrices",
  "level": "1",
  "url": "s_invertible_matrices.html",
  "type": "Section",
  "number": "1.11",
  "title": "Invertible matrices",
  "body": " Invertible matrices   Picking up the thread of , we observe that the cancellation property enjoyed in real number algebra is a consequence of the fact that every nonzero real number has a multiplicative inverse , denoted or , that satisfies . Indeed, canceling the in the equation (assuming ) is really the act of multiplying both sides of this equation by the multiplicative inverse .  Ever on the lookout for connections between real number and matrix algebra, we ask whether there is a sensible analogue of multiplicative inverses for matrices. We have seen already that identity matrices play the role of multiplicative identities for matrices, just as the number does for real numbers. This suggests we should restrict our attention to matrices. The following definition is then the desired analogue of the multiplicative inverse of a nonzero real number.    Invertible matrices   Invertible matrix  invertible matrix  matrix inverse    inverse of    An matrix is invertible (or nonsingular ) if there is a matrix satisfying . When this is the case we call an inverse of , and we say that and are inverses of one another.  A matrix satisfying is called an inverse of , denoted .  A square matrix that is not invertible is called singular .    The phrase an inverse in is somewhat jarring. Shouldn't we speak of the inverse of a matrix? Not surprisingly, if a matrix is invertible, then it has one and only one inverse. As intuitive as this fact may seem, however, it still requires proof.   Inverses are unique   If is an invertible matrix, then its inverse is unique: that is, there is only one matrix satisfying .     Suppose matrices and both satisfy the properties of the multiplicative inverse: i.e., . Then . Thus we see that , showing that the inverse of , if it exists, is unique.   The next theorem tells us that we can multiplicatively cancel a matrix if it is invertible .   Cancellation with invertible matrices   Suppose is an invertible matrix.   Left-cancellation  Given matrices and , we have .    Right-cancellation  Given matrices and , we have .          We prove both implications of separately. The reverse implication ( ) is obvious: . For the forward implication ( ), we have .    The argument for right cancellation is exactly similar.       The next corollary shows how we can solve some matrix equations uniquely using invertible matrices.   Solving with invertible matrices   Suppose is an invertible matrix.   If and are matrices, then .    If and are matrices, then .          We have .    We have .       Without any additional theory at our disposal, to show a matrix is invertible we must exhibit an inverse. The onus is on us to find a matrix satisfying both and . (Remember: since we cannot assume , we really need to show both equations hold.)  By the same token, to show is not invertible we must show that an inverse does not exist: that is, we must prove that there is no satisfying . The next example illustrates this technique for a variety of matrices.   Invertible matrices      Identity matrices are invertible, and in fact we have , as witnessed by the fact that .    Square zero matrices are never invertible, since for any square matrix of the same dimension we have . Thus there is no matrix satisfying the inverse property with respect to .    The inverse of the matrix is . Indeed, we have , as you can easily verify.    The matrix is not invertible. Indeed, using the row method of matrix multiplication , we see that given any matrix , each row of is given by . It follows that all the rows of are identical, and hence that we cannot have , since the rows of are not identical.       As the preceding example illustrates, deciding whether a matrix is invertible is not so straightforward, especially if the matrix is large. For the case, however, we have a relatively simple test for invertibility.   Inverses of matrices   A matrix is invertible if and only if .  When this is the case, we have .     If , the proposed matrix is indeed an inverse of , as one readily verifies.  Assume . If , then is not invertible, as we saw in the example above. Thus we can assume is nonzero, in which case is also nonzero. An easy computation shows This implies is not invertible. Indeed if it were, then the inverse would exist, and we'd have , which is a contradiction. We have proved that if , then is not invertible.    Invertible matrices  Sage has a number of useful tools related to invertibility. The boolean function is_invertible() tests for invertibility, and the method inverse() computes the inverse of an invertible matrix. Below we generate a random matrix with rational coefficients, test whether it is invertible, and compute its inverse if it is invertible. The density=0.5 ensures that roughly half of the matrix entries are zero; and this in turn increases the likelihood that the matrix is singular, for reasons that will become somewhat clearer later.   Evaluate the Sage cell below multiple times.    When the matrix is invertible, verify that . If you like, use the blank Sage cell to compute and .    Try increasing the density setting in random_element() ( , density=0.75 , density=.875 ) and see if the matrix is more or less likely to be invertible.        The next theorem tells us that invertibility is preserved by matrix multiplication: that is, if and are invertible matrices, then so is .   Products of invertible matrices   Let be matrices. If and are both invertible, then so is their product . Using logical notation: . In fact when this is the case we have .     Assume and are invertible. The statement of the theorem proposes a candidate for the inverse of : namely, . We need only show that satisfies . Here goes: .    Products of invertible matrices   More generally, if are invertible matrices, then their product is invertible. Furthermore, we have in this case .     We prove by induction on the number of matrices, , that if the are invertible, then the proposed inverse formula is valid.  Base step:  For , the inverse formula reads , which is clearly true.    Induction step  For the induction step we assume that the inverse formula is valid for any collection of invertible matrices, and then show it is valid for any collection of invertible matrices. Let be invertible matrices. Define . Then .      Whenever confronted with a logical implication of the form , where and denote arbitrary propositions, you should always ask whether the implication goes the other way . In other words, does the converse implication also hold?  The answer with regard to the implication is yes, though the proof of this is more difficult then you think. (See .)  The following argument is a common invalid proof of the reverse implication:   Assume is invertible.    Then has an inverse matrix.    Then the inverse of is .    Then and exist. Hence and are invertible.   Where is the flaw in our logic here? The second statement only allows us to conclude that there is some mystery matrix satisfying . We cannot yet say that , as this formula from only applies when we already know that and are both invertible. But this is exactly what we are trying to prove! As such we are guilty here of begging the question , or petitio principii in Latin.     Powers of matrices, matrix polynomials  We end this section by exploring how the matrix inverse operation fits into our matrix algebra. First, we can now use the inverse operation to define matrix powers of the form , where is a square matrix and is an arbitrary integer.   Matrix powers  matrix powers    matrix power    Let be an matrix, and let be an integer. We define the power matrix as follows: .    Equipped with a notion of matrix powers, we can further define matrix polynomials for square matrices.   Matrix polynomials  matrix polynomials    matrix polynomial   Let be a polynomial with real coefficients. For any square matrix of size , we define the matrix as . We call the result of evaluating the polynomial at the matrix .     It is both easy and perilous to forget the identity matrix in the term appearing in . Take caution not to make this mistake; without an identity matrix of appropriate size, the expression simply does not make sense.    Matrix polynomials   Let . Evaluate at the matrices and .    We have and .     Matrix polynomials  An integer matrix power is computed in Sage as A^n .   Of course the matrix needs to be invertible for a negative of power to be computed. Sage will throw an error in this case if the matrix is singular.   Polynomial expressions can then be easily computed manually in Sage. The next cell computes and for .   We took care to heed the warning in , making sure to include for ( identity_matrix(3) ) and for ( identity_matrix(2) ). Interestingly, Sage is smart enough to figure out what we mean even if we are sloppy in this regard.     Properties of matrix powers   The following properties hold for all matrices , all scalars , and all integers for which the given expression makes sense.                        .       The proofs of the first three statements are elementary, and closely resemble proofs of similar results in real number algebra. We leave these as an (unassigned) exercise.  For the fourth statement to make sense, we must assume that is invertible. The claim here is that is invertible, and that its inverse is itself. To prove this we need only show , which follows from the definition of the inverse.  The fifth statement also tacitly assumes is invertible. To prove it, we consider the three cases , and .  If , then by definition .  If , then by definition .  Suppose . Then .     Inverse and transpose   Let be invertible. We have , in which case .    We prove both implications of the if and only if statement separately.  Suppose is invertible with inverse . To see that is invertible, with inverse as specified in , we need only show that . We verify the two equalities separately:  . In both chains of equality we make use of the obvious claim .  For the other direction, assume is invertible. Setting , we see that . By the first implication, we know that if is invertible, then so is .      Invertibility theorem  We saw in that verifying directly whether a matrix is invertible, using only , can be quite an involved task. The goal of this section is to make this less onerous by developing some equivalent methods of testing invertibility. Our work culminates in and , which draw connections between invertibility, solutions to linear systems, and row echelon forms of a square matrix. Not surprisingly, our old friend Gaussian elimination emerges as the fundamental computational tool.  We begin with a treatment of elementary matrices , which serve as the basic building blocks for invertible matrices, and provide a crucial link between row reduction and matrix multiplication.   Elementary matrices  elementary matrix  matrix elementary    Scaling elementary matrix     Row swap elementary matrix     Row addition elementary matrix    An elementary matrix is a matrix of one of the three types below.   Given and nonzero scalar , the scaling elementary matrix is the matrix whose -th entry is , whose -th entry is for all , and whose other entries are all zero.    Given distinct indices , a row swap elementary matrix is the matrix obtained from the identity matrix by swapping the -th and -th rows.    Given and any , the row addition elementary matrix is defined as . That is, is the result of taking the identity matrix and making the -th entry equal to .        Elementary matrices     Scaling elementary matrix       Row swap elementary matrix         Row addition elementary matrix         Naturally, the row method of multiplication is the key to connecting a given row operation with a particular elementary matrix. shows that once you fix the dimension, an elementary matrix is uniquely defined by the row operation it performs.   Elementary matrices and row operations   Let .   Let , and let be a nonzero scalar. The matrix is the result of multiplying the -th row of by .    Let be distinct indices. The matrix is the result of swapping the -th and -th rows of .    Let , and let . The matrix is the result of adding times the -th row of to the -th row of .       The proof is left as an exercise.    Elementary matrices provide us a way of understanding row reduction as a series of matrix multiplications (on the left). Recall that row operations on linear systems are useful in so far as they preserve the set of solutions, and that this is the result of each operation being in some sense reversible . In terms of matrix multiplication, this reversible attribute is reflected in the fact that elementary matrices are invertible .   Inverses of elementary matrices   Elementary matrices are invertible, and their inverses are elementary matrices. In fact, we have the following formulas:     Left as an exercise.     Inverses of elementary matrices   Fix . Verify that the following pairs of elementary matrices are indeed inverses of one another.                       We have and . You can verify for yourself that .    We have . You can verify for yourself that .    We have and . You can verify for yourself that .        Interlude on matrix equations  We take a moment to make the following simple, somewhat overdue observation. Namely, we can represent a system of linear equations  as a single matrix equation  , or , where , , .  Indeed if you expand out the left-hand side of into an column vector, using the definition of matrix multiplication, and then invoke the definition of matrix equality, then you obtain the linear system .  By the same token, an -tuple is a solution to the system of equations  if and only if its corresponding column vector is a solution to the matrix equation  .  We have thus recast the problem of solving linear systems to the problem of solving a certain matrix equation of the form for the unknown column vector . In particular, a homogeneous linear system can be represented as a matrix equation of the form .  Lastly, the use of Gaussian elimination to solve a linear system can now be understood in an algebraic way using matrix multiplication.  In more detail, suppose our given linear system has augmented matrix that row reduces to the row echelon matrix after performing a sequence of row operations. Denote the -th row operation , and denote by the result of applying to a matrix .  Our sequence of operations translates to the following sequence of matrix equations: .  Let correspond to the elementary matrix . Then we represent this same sequence using matrix multiplication: . This depiction of row reduction in terms of successive left-multiplication by elementary matrices will be useful to us in many ways. In particular, it follows from this discussion that two matrices and are row equivalent if and only if we have for some collection of elementary matrices .       For each matrix either provide an inverse or show the matrix is not invertible. Justify your answer.               , where .        Each below is invertible. Find by guess and check. You may want to use the row or column method of matrix multiplication to justify your answer.                       Suppose is an invertible matrix. Prove: for any nonzero  the matrix is invertible.      Assume is a square matrix with .    Prove: if has two identical columns, then is not invertible.    Prove: if has a row that is a scalar multiple of another row, then is not invertible.      Use the column and\/or row method of matrix multiplication to show directly that cannot have an inverse matrix.      Find all invertible matrices satisfying the given equation, or show there is no such . Justify your answer.     .     .                  Let . Find a formula for , where is an integer. Justify your answer using a proof by induction.      Let , the matrix consisting of all ones. Find a formula for , where is an integer. Justify your answer using a proof by induction.      Let , where is some fixed scalar. Suppose is an matrix satisfying .    Prove: if , then is invertible.    Suppose further that is not a scalar multiple of .  Prove: if , then is singular.       Expanding matrix products  Fix a positive integer . Given linear combinations of matrices , prove by induction on that . Note that each step (base and induction) of your induction on will require an argument that uses induction on ! This is sometimes called double induction . For example, in the base step you must show that for any ; this should be proved by induction on .    Polynomial expressions of commute   Let and be polynomials with real coefficients. For any square matrix , show that the matrices and commute: i.e., . You may use the result of .       Suppose is an matrix satisfying for some .  Show that is invertible, and that in fact . You may use the results of and\/or . .      "
},
{
  "id": "d_invertible_matrix",
  "level": "2",
  "url": "s_invertible_matrices.html#d_invertible_matrix",
  "type": "Definition",
  "number": "1.11.1",
  "title": "Invertible matrix.",
  "body": " Invertible matrix  invertible matrix  matrix inverse    inverse of    An matrix is invertible (or nonsingular ) if there is a matrix satisfying . When this is the case we call an inverse of , and we say that and are inverses of one another.  A matrix satisfying is called an inverse of , denoted .  A square matrix that is not invertible is called singular .   "
},
{
  "id": "th_inverse_unique",
  "level": "2",
  "url": "s_invertible_matrices.html#th_inverse_unique",
  "type": "Theorem",
  "number": "1.11.2",
  "title": "Inverses are unique.",
  "body": " Inverses are unique   If is an invertible matrix, then its inverse is unique: that is, there is only one matrix satisfying .   "
},
{
  "id": "subsec--5",
  "level": "2",
  "url": "s_invertible_matrices.html#subsec--5",
  "type": "Proof",
  "number": "1.11.1.1",
  "title": "",
  "body": " Suppose matrices and both satisfy the properties of the multiplicative inverse: i.e., . Then . Thus we see that , showing that the inverse of , if it exists, is unique.  "
},
{
  "id": "th_inverse_cancel",
  "level": "2",
  "url": "s_invertible_matrices.html#th_inverse_cancel",
  "type": "Theorem",
  "number": "1.11.3",
  "title": "Cancellation with invertible matrices.",
  "body": " Cancellation with invertible matrices   Suppose is an invertible matrix.   Left-cancellation  Given matrices and , we have .    Right-cancellation  Given matrices and , we have .          We prove both implications of separately. The reverse implication ( ) is obvious: . For the forward implication ( ), we have .    The argument for right cancellation is exactly similar.      "
},
{
  "id": "cor_solving_invertible",
  "level": "2",
  "url": "s_invertible_matrices.html#cor_solving_invertible",
  "type": "Corollary",
  "number": "1.11.4",
  "title": "Solving with invertible matrices.",
  "body": " Solving with invertible matrices   Suppose is an invertible matrix.   If and are matrices, then .    If and are matrices, then .          We have .    We have .      "
},
{
  "id": "eg_invertible_matrices",
  "level": "2",
  "url": "s_invertible_matrices.html#eg_invertible_matrices",
  "type": "Example",
  "number": "1.11.5",
  "title": "Invertible matrices.",
  "body": " Invertible matrices      Identity matrices are invertible, and in fact we have , as witnessed by the fact that .    Square zero matrices are never invertible, since for any square matrix of the same dimension we have . Thus there is no matrix satisfying the inverse property with respect to .    The inverse of the matrix is . Indeed, we have , as you can easily verify.    The matrix is not invertible. Indeed, using the row method of matrix multiplication , we see that given any matrix , each row of is given by . It follows that all the rows of are identical, and hence that we cannot have , since the rows of are not identical.      "
},
{
  "id": "th_2by2_inverse",
  "level": "2",
  "url": "s_invertible_matrices.html#th_2by2_inverse",
  "type": "Theorem",
  "number": "1.11.6",
  "title": "Inverses of <span class=\"process-math\">\\(2\\times 2\\)<\/span> matrices.",
  "body": " Inverses of matrices   A matrix is invertible if and only if .  When this is the case, we have .   "
},
{
  "id": "subsec--15",
  "level": "2",
  "url": "s_invertible_matrices.html#subsec--15",
  "type": "Proof",
  "number": "1.11.1.2",
  "title": "",
  "body": " If , the proposed matrix is indeed an inverse of , as one readily verifies.  Assume . If , then is not invertible, as we saw in the example above. Thus we can assume is nonzero, in which case is also nonzero. An easy computation shows This implies is not invertible. Indeed if it were, then the inverse would exist, and we'd have , which is a contradiction. We have proved that if , then is not invertible.  "
},
{
  "id": "sage_inv_matrix",
  "level": "2",
  "url": "s_invertible_matrices.html#sage_inv_matrix",
  "type": "Sage Example",
  "number": "7",
  "title": "Invertible matrices.",
  "body": " Invertible matrices  Sage has a number of useful tools related to invertibility. The boolean function is_invertible() tests for invertibility, and the method inverse() computes the inverse of an invertible matrix. Below we generate a random matrix with rational coefficients, test whether it is invertible, and compute its inverse if it is invertible. The density=0.5 ensures that roughly half of the matrix entries are zero; and this in turn increases the likelihood that the matrix is singular, for reasons that will become somewhat clearer later.   Evaluate the Sage cell below multiple times.    When the matrix is invertible, verify that . If you like, use the blank Sage cell to compute and .    Try increasing the density setting in random_element() ( , density=0.75 , density=.875 ) and see if the matrix is more or less likely to be invertible.       "
},
{
  "id": "th_invertible_prod",
  "level": "2",
  "url": "s_invertible_matrices.html#th_invertible_prod",
  "type": "Theorem",
  "number": "1.11.7",
  "title": "Products of invertible matrices.",
  "body": " Products of invertible matrices   Let be matrices. If and are both invertible, then so is their product . Using logical notation: . In fact when this is the case we have .   "
},
{
  "id": "subsec--19",
  "level": "2",
  "url": "s_invertible_matrices.html#subsec--19",
  "type": "Proof",
  "number": "1.11.1.3",
  "title": "",
  "body": " Assume and are invertible. The statement of the theorem proposes a candidate for the inverse of : namely, . We need only show that satisfies . Here goes: .  "
},
{
  "id": "c_invertible_prod",
  "level": "2",
  "url": "s_invertible_matrices.html#c_invertible_prod",
  "type": "Corollary",
  "number": "1.11.8",
  "title": "Products of invertible matrices.",
  "body": " Products of invertible matrices   More generally, if are invertible matrices, then their product is invertible. Furthermore, we have in this case .   "
},
{
  "id": "subsec--21",
  "level": "2",
  "url": "s_invertible_matrices.html#subsec--21",
  "type": "Proof",
  "number": "1.11.1.4",
  "title": "",
  "body": " We prove by induction on the number of matrices, , that if the are invertible, then the proposed inverse formula is valid.  Base step:  For , the inverse formula reads , which is clearly true.    Induction step  For the induction step we assume that the inverse formula is valid for any collection of invertible matrices, and then show it is valid for any collection of invertible matrices. Let be invertible matrices. Define . Then .    "
},
{
  "id": "subsec--22",
  "level": "2",
  "url": "s_invertible_matrices.html#subsec--22",
  "type": "Remark",
  "number": "1.11.9",
  "title": "",
  "body": " Whenever confronted with a logical implication of the form , where and denote arbitrary propositions, you should always ask whether the implication goes the other way . In other words, does the converse implication also hold?  The answer with regard to the implication is yes, though the proof of this is more difficult then you think. (See .)  The following argument is a common invalid proof of the reverse implication:   Assume is invertible.    Then has an inverse matrix.    Then the inverse of is .    Then and exist. Hence and are invertible.   Where is the flaw in our logic here? The second statement only allows us to conclude that there is some mystery matrix satisfying . We cannot yet say that , as this formula from only applies when we already know that and are both invertible. But this is exactly what we are trying to prove! As such we are guilty here of begging the question , or petitio principii in Latin.  "
},
{
  "id": "d_matrix_powers",
  "level": "2",
  "url": "s_invertible_matrices.html#d_matrix_powers",
  "type": "Definition",
  "number": "1.11.10",
  "title": "Matrix powers.",
  "body": " Matrix powers  matrix powers    matrix power    Let be an matrix, and let be an integer. We define the power matrix as follows: .   "
},
{
  "id": "d_matrix_polynomials",
  "level": "2",
  "url": "s_invertible_matrices.html#d_matrix_polynomials",
  "type": "Definition",
  "number": "1.11.11",
  "title": "Matrix polynomials.",
  "body": " Matrix polynomials  matrix polynomials    matrix polynomial   Let be a polynomial with real coefficients. For any square matrix of size , we define the matrix as . We call the result of evaluating the polynomial at the matrix .   "
},
{
  "id": "rem_matrix_polynomials",
  "level": "2",
  "url": "s_invertible_matrices.html#rem_matrix_polynomials",
  "type": "Remark",
  "number": "1.11.12",
  "title": "",
  "body": " It is both easy and perilous to forget the identity matrix in the term appearing in . Take caution not to make this mistake; without an identity matrix of appropriate size, the expression simply does not make sense.  "
},
{
  "id": "eg_matrix_polynomials",
  "level": "2",
  "url": "s_invertible_matrices.html#eg_matrix_polynomials",
  "type": "Example",
  "number": "1.11.13",
  "title": "Matrix polynomials.",
  "body": " Matrix polynomials   Let . Evaluate at the matrices and .    We have and .   "
},
{
  "id": "s_invertible_matrices-4-8",
  "level": "2",
  "url": "s_invertible_matrices.html#s_invertible_matrices-4-8",
  "type": "Sage Example",
  "number": "8",
  "title": "Matrix polynomials.",
  "body": " Matrix polynomials  An integer matrix power is computed in Sage as A^n .   Of course the matrix needs to be invertible for a negative of power to be computed. Sage will throw an error in this case if the matrix is singular.   Polynomial expressions can then be easily computed manually in Sage. The next cell computes and for .   We took care to heed the warning in , making sure to include for ( identity_matrix(3) ) and for ( identity_matrix(2) ). Interestingly, Sage is smart enough to figure out what we mean even if we are sloppy in this regard.   "
},
{
  "id": "th_power_rules",
  "level": "2",
  "url": "s_invertible_matrices.html#th_power_rules",
  "type": "Theorem",
  "number": "1.11.14",
  "title": "Properties of matrix powers.",
  "body": " Properties of matrix powers   The following properties hold for all matrices , all scalars , and all integers for which the given expression makes sense.                        .       The proofs of the first three statements are elementary, and closely resemble proofs of similar results in real number algebra. We leave these as an (unassigned) exercise.  For the fourth statement to make sense, we must assume that is invertible. The claim here is that is invertible, and that its inverse is itself. To prove this we need only show , which follows from the definition of the inverse.  The fifth statement also tacitly assumes is invertible. To prove it, we consider the three cases , and .  If , then by definition .  If , then by definition .  Suppose . Then .   "
},
{
  "id": "th_inverse_trans",
  "level": "2",
  "url": "s_invertible_matrices.html#th_inverse_trans",
  "type": "Theorem",
  "number": "1.11.15",
  "title": "Inverse and transpose.",
  "body": " Inverse and transpose   Let be invertible. We have , in which case .    We prove both implications of the if and only if statement separately.  Suppose is invertible with inverse . To see that is invertible, with inverse as specified in , we need only show that . We verify the two equalities separately:  . In both chains of equality we make use of the obvious claim .  For the other direction, assume is invertible. Setting , we see that . By the first implication, we know that if is invertible, then so is .   "
},
{
  "id": "d_elementary_matrix",
  "level": "2",
  "url": "s_invertible_matrices.html#d_elementary_matrix",
  "type": "Definition",
  "number": "1.11.16",
  "title": "Elementary matrices.",
  "body": " Elementary matrices  elementary matrix  matrix elementary    Scaling elementary matrix     Row swap elementary matrix     Row addition elementary matrix    An elementary matrix is a matrix of one of the three types below.   Given and nonzero scalar , the scaling elementary matrix is the matrix whose -th entry is , whose -th entry is for all , and whose other entries are all zero.    Given distinct indices , a row swap elementary matrix is the matrix obtained from the identity matrix by swapping the -th and -th rows.    Given and any , the row addition elementary matrix is defined as . That is, is the result of taking the identity matrix and making the -th entry equal to .      "
},
{
  "id": "fig_elem_matrices",
  "level": "2",
  "url": "s_invertible_matrices.html#fig_elem_matrices",
  "type": "Figure",
  "number": "1.11.17",
  "title": "",
  "body": " Elementary matrices     Scaling elementary matrix       Row swap elementary matrix         Row addition elementary matrix        "
},
{
  "id": "prop_elem_matrices",
  "level": "2",
  "url": "s_invertible_matrices.html#prop_elem_matrices",
  "type": "Proposition",
  "number": "1.11.18",
  "title": "Elementary matrices and row operations.",
  "body": " Elementary matrices and row operations   Let .   Let , and let be a nonzero scalar. The matrix is the result of multiplying the -th row of by .    Let be distinct indices. The matrix is the result of swapping the -th and -th rows of .    Let , and let . The matrix is the result of adding times the -th row of to the -th row of .       The proof is left as an exercise.   "
},
{
  "id": "th_inverse_elem",
  "level": "2",
  "url": "s_invertible_matrices.html#th_inverse_elem",
  "type": "Theorem",
  "number": "1.11.19",
  "title": "Inverses of elementary matrices.",
  "body": " Inverses of elementary matrices   Elementary matrices are invertible, and their inverses are elementary matrices. In fact, we have the following formulas:     Left as an exercise.   "
},
{
  "id": "eg_elem_inverse",
  "level": "2",
  "url": "s_invertible_matrices.html#eg_elem_inverse",
  "type": "Example",
  "number": "1.11.20",
  "title": "Inverses of elementary matrices.",
  "body": " Inverses of elementary matrices   Fix . Verify that the following pairs of elementary matrices are indeed inverses of one another.                       We have and . You can verify for yourself that .    We have . You can verify for yourself that .    We have and . You can verify for yourself that .     "
},
{
  "id": "s_invertible_matrices_ex-1-1",
  "level": "2",
  "url": "s_invertible_matrices.html#s_invertible_matrices_ex-1-1",
  "type": "Exercise",
  "number": "1.11.5.1",
  "title": "",
  "body": "  For each matrix either provide an inverse or show the matrix is not invertible. Justify your answer.               , where .     "
},
{
  "id": "s_invertible_matrices_ex-1-2",
  "level": "2",
  "url": "s_invertible_matrices.html#s_invertible_matrices_ex-1-2",
  "type": "Exercise",
  "number": "1.11.5.2",
  "title": "",
  "body": "  Each below is invertible. Find by guess and check. You may want to use the row or column method of matrix multiplication to justify your answer.                    "
},
{
  "id": "s_invertible_matrices_ex-1-3",
  "level": "2",
  "url": "s_invertible_matrices.html#s_invertible_matrices_ex-1-3",
  "type": "Exercise",
  "number": "1.11.5.3",
  "title": "",
  "body": "  Suppose is an invertible matrix. Prove: for any nonzero  the matrix is invertible.   "
},
{
  "id": "s_invertible_matrices_ex-1-4",
  "level": "2",
  "url": "s_invertible_matrices.html#s_invertible_matrices_ex-1-4",
  "type": "Exercise",
  "number": "1.11.5.4",
  "title": "",
  "body": "  Assume is a square matrix with .    Prove: if has two identical columns, then is not invertible.    Prove: if has a row that is a scalar multiple of another row, then is not invertible.      Use the column and\/or row method of matrix multiplication to show directly that cannot have an inverse matrix.   "
},
{
  "id": "s_invertible_matrices_ex-1-5",
  "level": "2",
  "url": "s_invertible_matrices.html#s_invertible_matrices_ex-1-5",
  "type": "Exercise",
  "number": "1.11.5.5",
  "title": "",
  "body": "  Find all invertible matrices satisfying the given equation, or show there is no such . Justify your answer.     .     .               "
},
{
  "id": "s_invertible_matrices_ex-1-6",
  "level": "2",
  "url": "s_invertible_matrices.html#s_invertible_matrices_ex-1-6",
  "type": "Exercise",
  "number": "1.11.5.6",
  "title": "",
  "body": "  Let . Find a formula for , where is an integer. Justify your answer using a proof by induction.   "
},
{
  "id": "s_invertible_matrices_ex-1-7",
  "level": "2",
  "url": "s_invertible_matrices.html#s_invertible_matrices_ex-1-7",
  "type": "Exercise",
  "number": "1.11.5.7",
  "title": "",
  "body": "  Let , the matrix consisting of all ones. Find a formula for , where is an integer. Justify your answer using a proof by induction.   "
},
{
  "id": "s_invertible_matrices_ex-1-8",
  "level": "2",
  "url": "s_invertible_matrices.html#s_invertible_matrices_ex-1-8",
  "type": "Exercise",
  "number": "1.11.5.8",
  "title": "",
  "body": "  Let , where is some fixed scalar. Suppose is an matrix satisfying .    Prove: if , then is invertible.    Suppose further that is not a scalar multiple of .  Prove: if , then is singular.     "
},
{
  "id": "ex_expand_matrix_prod",
  "level": "2",
  "url": "s_invertible_matrices.html#ex_expand_matrix_prod",
  "type": "Exercise",
  "number": "1.11.5.9",
  "title": "Expanding matrix products.",
  "body": " Expanding matrix products  Fix a positive integer . Given linear combinations of matrices , prove by induction on that . Note that each step (base and induction) of your induction on will require an argument that uses induction on ! This is sometimes called double induction . For example, in the base step you must show that for any ; this should be proved by induction on .  "
},
{
  "id": "ex_poly_inA_commute",
  "level": "2",
  "url": "s_invertible_matrices.html#ex_poly_inA_commute",
  "type": "Exercise",
  "number": "1.11.5.10",
  "title": "Polynomial expressions of <span class=\"process-math\">\\(A\\)<\/span> commute.",
  "body": " Polynomial expressions of commute   Let and be polynomials with real coefficients. For any square matrix , show that the matrices and commute: i.e., . You may use the result of .    "
},
{
  "id": "s_invertible_matrices_ex-1-11",
  "level": "2",
  "url": "s_invertible_matrices.html#s_invertible_matrices_ex-1-11",
  "type": "Exercise",
  "number": "1.11.5.11",
  "title": "",
  "body": "  Suppose is an matrix satisfying for some .  Show that is invertible, and that in fact . You may use the results of and\/or . .   "
},
{
  "id": "s_invertibility_theorem",
  "level": "1",
  "url": "s_invertibility_theorem.html",
  "type": "Section",
  "number": "1.12",
  "title": "The invertibility theorem",
  "body": " The invertibility theorem   We are now in a position to prove our first big theorem: the invertibilty theorem. Logically speaking, the theorem states that a number of conditions are all equivalent to a matrix being invertible. The advantage of having such a diverse collection of equivalent conditions is that we are provided with a powerful tool for determining when a matrix is invertible, and for computing the inverse matrix when it is.    The invertibility theorem   Invertibility theorem   Let . The following statements are equivalent.    is invertible.    The matrix equation has a unique solution for any .    The matrix equation has a unique solution: namely, .     is row equivalent to , the identity matrix.     is a product of elementary matrices.       Recall that to show two statements and are equivalent, we must show two implications: , and . Instead of doing this for each possible pair of sentences above, we ease our work load by instead showing the following cycle of implications: . Since implication is transitive, starting at any point in our cycle and making our way around the chain of implications, we see that any one of the propositions implies any other proposition.    Suppose exists. Given any column vector , we have , which shows that is the unique solution to .     Clearly, if has a unique solution for any choice of , then it has a unique solution for the particular choice . Since is clearly a solution to the equation, it must be the only solution.     Row reduce to a matrix in reduced row echelon form using Gauss-Jordan elimination. (See .) Since the set of solutions to is identical to the set of solutions to (apply to their corresponding linear systems), we see that is the only solution to . now implies has a leading one in each column. Since is and in reduced row echelon form, it follows that must be the identity matrix. (Convince yourself of this.) Thus is row equivalent to , the identity matrix.     If is row equivalent to , then according to our discussion after , we have for some collection of elementary matrices . Since elementary matrices are invertible we can multiply both sides of this equation by to conclude . Since inverses of elementary matrices are elementary ( ), we conclude that is a product of elementary matrices.     If is a product of elementary matrices, then it is a product of invertible matrices. Since products of invertible matrices are invertible, we conclude that is invertible.       The invertibility theorem has an immediate application to linear systems where the number of equations is equal to the number of unknowns. In this special situation, the system is equivalent to a matrix equation of the form , where is a square matrix . According to the theorem, if we know is invertible, then the matrix equation, and hence the linear system, has a unique solution: namely, .  What if is not invertible? Then the theorem only tells us that there is some column vector , not necessarily the given , such that the equation does not have a unique solution. In other words, the theorem alone doesn't allow us to conclude whether the given has a solution, and we must resort to our usual Gaussian elimination procedure to answer this question.    The family of triangular matrices (upper, lower, and diagonal) defined below provides an easy testing ground for our new invertibility theorem.   matrices diagonal  matrices triangular  matrices upper triangular  matrices lower triangular  Diagonal and triangular matrices   Let be .   For each the entry is called the -th diagonal entry of , and subarray of consisting of is called the diagonal . An off-diagonal entry of is any entry not among the diagonal entries.    The matrix is diagonal if all off-diagonal entries are zero: , if for all with .    The matrix is upper triangular if all entries below the diagonal are zero: , if for all .    The matrix is lower triangular if all entries above the diagonal are zero: , if for all .    The matrix is triangular if is upper triangular or lower triangular.        Triangular matrices   The set of all diagonal matrices can be described as . The set of all upper triangular matrices can be described as . The set of all lower triangular matrices can be described as .     Invertibility of triangular matrices   Let be a triangular matrix. Then is invertible if and only if for all .  In other words, is invertible if and only if the diagonal entries of are all nonzero.    Left as a homework exercise.     Invertibility algorithms  The proof of the implication of can be expanded into an algorithm that (1) decides whether a given matrix is invertible, and (2) computes if is invertible.   Inverse algorithm   Let To test for invertibility of proceed as follows.   Build the augmented matrix and use Gaussian elimination to row reduce to the form , where is in row echelon form.  The matrix is invertible if and only if has leading ones.    If has leading ones, row reduce further to a matrix of the form . Then .       From the proof of we know is invertible if and only if has leading ones. The question remains as to why reducing the augmented matrix to tells us that . Let be the elementary matrices representing the row operations involved in this process. Then we have . After a little algebra, we see that . Since is the result of applying same row operations to we have , as claimed.    From the proof of we also derive an algorithm for writing an invertible matrix as a product of elementary matrices. You should think of this as a first example of the great versatility of Gaussian elimination, as conveyed by our .   Product of elementary matrices algorithm   Let To (potentially) write as a product of elementary matrices, proceed as follows.   Attempt to row reduce to the identity, keeping track of your sequence of row operations in the form of elementary matrices.    If you are able to row reduce to with a sequence of row operatons corresponding to the elementary matrices , then Since the inverse of an elementary matrix is elementary, we have written as a product of elementary matrices.       See the proof of the implication in .     Inverse algorithms  Let . Combining both algorithms we can decide whether is invertible, and if so, compute and write as a product of elementary matrices. According to , the computation shows that is invertible and . Next, representing our row operations as elementary matrices, we see that , where . We conclude that .    Inverse algorithm   Use to decide whether the matrix is invertible.    Note that since in any case we do not half to produce an actual inverse, we can dispense with the super-sized augmented matrix described in , and instead just row reduce to row echelon form. We have . Since the row echelon form of has no leading one in the third column, we conclude that is not invertible.     Video example: inverse algorithm   Video: inverse algorithm       Some theoretical loose ends  The two inveribility algorithms above are nice examples of how a theoretical result like our invertibility theorem can pay some serious computational dividends. Namely, thanks to the theory we have discovered a method of computing the inverse of a matrix that essentially boils down to row reduction.  We finish this section with a number of theoretical implications that tie up some loose ends. The results below are all consequences in some way of . The fist shows that in fact one one of the defining equalities or suffices to define the inverse of a matrix.   Left-inverse if and only if right-inverse   Let and be . Then    .     .   In plain English: a matrix is a left-inverse of if and only if it is a right-inverse of .   Left as a homework exercise.  As a further consequence of , we can at last strengthen the implication to an equivalence.   Invertibility of product equivalence   Let and be . Then is invertible if and only if and are both invertible: ,     Left as a homework exercise.   We conclude with two results related to row reduction. The first provides an equivalent formulation of row equivalence in terms of matrix arithmetic: an elaboration of our discussion in .   Row equivalence and invertible matrices   Let and be matrices. The following statements are equivalent.   The matrices and are row equivalent.    There are elementary matrices such that .    There is an invertible matrix such that .       The equivalence of (1) and (2) was shown in the course of our discussion in . The equivalence of (2) and (3) is a direct consequence of (5) of since a matrix is invertible if and only if it can be written as for some elementary matrices .    As another corollary, we enlarge our invertibility theorem by three new statements.   Invertibility theorem: first expansion   Let . The following statements are equivalent.    is invertible.    The matrix equation has a unique solution for any .    The matrix equation has a solution for any .    The columns of are a spanning tuple for .    The matrix equation has a unique solution: namely, .    The columns of are linearly independent.     is row equivalent to , the identity matrix.     is a product of elementary matrices.       Left as a homework exercise.    Lastly, we provide at last the proof of the third statement of promised back in . This proof is due to Thomas Yuster Thomas Yuster. The reduced row echelon form of a matrix is unique: a simple proof , Mathematics Magazine 57 (1984), no. 2, 93-94. .   Uniqueness of reduced row echelon form   Any matrix is row equivalent to a unique matrix in reduced row echelon form.    Let be an matrix. Using Gauss-Jordan elimination, we can row reduce to a matrix in reduced row echelon form. Suppose is also row equivalent to the matrix in reduced row echelon form; then and are row equivalent, since the row equivalence relation is symmetric and transitive. Thus it suffices to show that if and are row equivalent matrices in reduced row echelon form, then . We do so by induction on . The base step is trivial, since there are only two matrices in reduced row echelon form: namely and the column vector with a one in the first row and zeros elsewhere.  For the induction step we assume that any two row equivalent matrices in reduced row echelon form are equal. Let and be row equivalent matrices in reduced row echelon form, and let and denote the columns of and , respectively. By there is an invertible matrix such that . The first columns of and form matrices and , respectively, that are in reduced row echelon form, as one easily checks. Furthermore, and are row equivalent: indeed, since for all , we see that , and thus and are row equivalent. By the induction hypothesis we must have , and it remains only to show that . We treat two cases: the case where one of and has a no leading one in its last column, and the case where both matrices have a leading one in their last column.  In the first case, suppose without loss of generality that the last column of does not have a leading one. Consider the linear system with augmented matrix . Since the last column of is free, it follows from that for all there is a solution to this system of the form , where is some function of . Since and are row equivalent, so are and , and thus the two systems corresponding to these augmented matrices have the same solution sets. It follows that for all , we have . Using the column method, we conclude that for all . Since , we have for all , and thus conclude that for all . Taking , we conclude that , and hence that in this case.  Finally, we consider the case where and both have leading ones in their last columns. Since and are in reduced row echelon form, it follows that the leading one in the last column of occurs in the row of whose corresponding row in is the first zero row of . Since the same statement mutatis mutandi applies to and , and since , we see that the leading ones in the last columns of and occur in the same row. Since all other entries in that last column must be zero, we conclude that , and hence that in this case as well.      WeBWork Exercises      If and are invertible matrices, then the inverse of is .   True   False         SOLUTION: False. For example, let , and , then , which is not invertible.            Solve for the matrix if . Assume that all matrices are and invertible as needed.         SOLUTION: Note that            Are the following matrices invertible?                          For what values of will be invertible?  For all such that  and  .             SOLUTION: The matrix is invertible provided the columns of are linearly independent, which will be the case if . Thus, we require that and .            Let   Then   where  ,  ,  ,  ,   where  ,  ,  ,  ,  and   where  ,  ,  ,  .                                                                        Linear systems and matrix equations   Find a matrix and column vectors and such that the given linear system is equivalent to the matrix equation .                   Solving linear systems with matrix inverses   Find an invertible matrix and column vectors and such that the given linear system is equivalent to the matrix equation . Compute and use this to find the unique solution to the linear system. (See .)                   Inverse algorithm   Use the inverse algorithm to determine whether each matrix is invertible, and to compute its inverse if possible.  You are not required to follow Gaussian elimination to the letter, and you may perform multiple operations at the same time, as long as they are independent of one another. For example, do not do and in the same step.          We use the inverse algorithm: . We conclude that .                            ,        ,       Product of elementary matrices algorithm   Each matrix below is invertible. Use the product of elementary matrices algorithm to write as a product of elementary matrices.  Here you should perform Gaussian elimination to the letter, one row operation at a time.          Row reduce to the identity matrix:   The corresponding elementary matrices are . It follows that , and hence that .       .              .       According to Statement (2) of the invertibility theorem, a matrix is invertible if and only if for all column vectors the matrix equation has a unique solution. Show that we can add the following, weaker-looking version of (2) to our list of equivalent statements:   (2') The matrix equation has a solution for any column vector .     Try to logically weave Statement (2') into our original list of equivalent statements by (a) finding a statement from our original list that implies (2'), and (b) find a statement in our original list that is implied by (2').  You may make use of in your argument.     Properties of row equivalence   Let denote that matrix is row equivalent to . Use to show that the relation is reflexive, symmetric, and transitive.      Let be an matrix, and let be an invertible matrix.  Show that the two matrix equations have the same set of solutions. In other words show that .      Suppose and are row equivalent square matrices. Prove: is invertible if and only if is invertible.      Use the provided information to determine whether the given square matrix is invertible. Justify your answer using the inveribility theorem or one of its corollaries.    There are column vectors such that .     is invertible.     for some .    The sum of the columns of is equal to the zero column vector.      Answer true or false. If true, provide a proof; if false, exhibit an explicit counterexample.    The product of two elementary matrices is elementary.    The product of two elementary matrices is invertible.    The sum of two invertible matrices is invertible.    If is a singular matrix, then the linear system has infinitely many solutions.    If is obtained from the invertible matrix by replacing its second row with the sum of its first and second rows, then is invertible.    If is square matrix, and is a column vector such that the matrix equation has a unique solution, then is invertible.    If and are row equivalent, then the matrix equations and have the same solution set.    If or is singular, then is singular.      "
},
{
  "id": "th_invertibility",
  "level": "2",
  "url": "s_invertibility_theorem.html#th_invertibility",
  "type": "Theorem",
  "number": "1.12.1",
  "title": "Invertibility theorem.",
  "body": " Invertibility theorem   Let . The following statements are equivalent.    is invertible.    The matrix equation has a unique solution for any .    The matrix equation has a unique solution: namely, .     is row equivalent to , the identity matrix.     is a product of elementary matrices.       Recall that to show two statements and are equivalent, we must show two implications: , and . Instead of doing this for each possible pair of sentences above, we ease our work load by instead showing the following cycle of implications: . Since implication is transitive, starting at any point in our cycle and making our way around the chain of implications, we see that any one of the propositions implies any other proposition.    Suppose exists. Given any column vector , we have , which shows that is the unique solution to .     Clearly, if has a unique solution for any choice of , then it has a unique solution for the particular choice . Since is clearly a solution to the equation, it must be the only solution.     Row reduce to a matrix in reduced row echelon form using Gauss-Jordan elimination. (See .) Since the set of solutions to is identical to the set of solutions to (apply to their corresponding linear systems), we see that is the only solution to . now implies has a leading one in each column. Since is and in reduced row echelon form, it follows that must be the identity matrix. (Convince yourself of this.) Thus is row equivalent to , the identity matrix.     If is row equivalent to , then according to our discussion after , we have for some collection of elementary matrices . Since elementary matrices are invertible we can multiply both sides of this equation by to conclude . Since inverses of elementary matrices are elementary ( ), we conclude that is a product of elementary matrices.     If is a product of elementary matrices, then it is a product of invertible matrices. Since products of invertible matrices are invertible, we conclude that is invertible.    "
},
{
  "id": "rm_inv_solutions",
  "level": "2",
  "url": "s_invertibility_theorem.html#rm_inv_solutions",
  "type": "Remark",
  "number": "1.12.2",
  "title": "",
  "body": "  The invertibility theorem has an immediate application to linear systems where the number of equations is equal to the number of unknowns. In this special situation, the system is equivalent to a matrix equation of the form , where is a square matrix . According to the theorem, if we know is invertible, then the matrix equation, and hence the linear system, has a unique solution: namely, .  What if is not invertible? Then the theorem only tells us that there is some column vector , not necessarily the given , such that the equation does not have a unique solution. In other words, the theorem alone doesn't allow us to conclude whether the given has a solution, and we must resort to our usual Gaussian elimination procedure to answer this question.   "
},
{
  "id": "d_diagonal_triangular",
  "level": "2",
  "url": "s_invertibility_theorem.html#d_diagonal_triangular",
  "type": "Definition",
  "number": "1.12.3",
  "title": "Diagonal and triangular matrices.",
  "body": " matrices diagonal  matrices triangular  matrices upper triangular  matrices lower triangular  Diagonal and triangular matrices   Let be .   For each the entry is called the -th diagonal entry of , and subarray of consisting of is called the diagonal . An off-diagonal entry of is any entry not among the diagonal entries.    The matrix is diagonal if all off-diagonal entries are zero: , if for all with .    The matrix is upper triangular if all entries below the diagonal are zero: , if for all .    The matrix is lower triangular if all entries above the diagonal are zero: , if for all .    The matrix is triangular if is upper triangular or lower triangular.      "
},
{
  "id": "eg_triang_matrices",
  "level": "2",
  "url": "s_invertibility_theorem.html#eg_triang_matrices",
  "type": "Example",
  "number": "1.12.4",
  "title": "Triangular <span class=\"process-math\">\\(3\\times 3\\)<\/span> matrices.",
  "body": " Triangular matrices   The set of all diagonal matrices can be described as . The set of all upper triangular matrices can be described as . The set of all lower triangular matrices can be described as .   "
},
{
  "id": "th_invertible_triangular",
  "level": "2",
  "url": "s_invertibility_theorem.html#th_invertible_triangular",
  "type": "Theorem",
  "number": "1.12.5",
  "title": "Invertibility of triangular matrices.",
  "body": " Invertibility of triangular matrices   Let be a triangular matrix. Then is invertible if and only if for all .  In other words, is invertible if and only if the diagonal entries of are all nonzero.    Left as a homework exercise.  "
},
{
  "id": "proc_inv_alg",
  "level": "2",
  "url": "s_invertibility_theorem.html#proc_inv_alg",
  "type": "Procedure",
  "number": "1.12.6",
  "title": "Inverse algorithm.",
  "body": " Inverse algorithm   Let To test for invertibility of proceed as follows.   Build the augmented matrix and use Gaussian elimination to row reduce to the form , where is in row echelon form.  The matrix is invertible if and only if has leading ones.    If has leading ones, row reduce further to a matrix of the form . Then .       From the proof of we know is invertible if and only if has leading ones. The question remains as to why reducing the augmented matrix to tells us that . Let be the elementary matrices representing the row operations involved in this process. Then we have . After a little algebra, we see that . Since is the result of applying same row operations to we have , as claimed.   "
},
{
  "id": "th_elem_matrices_alg",
  "level": "2",
  "url": "s_invertibility_theorem.html#th_elem_matrices_alg",
  "type": "Procedure",
  "number": "1.12.7",
  "title": "Product of elementary matrices algorithm.",
  "body": " Product of elementary matrices algorithm   Let To (potentially) write as a product of elementary matrices, proceed as follows.   Attempt to row reduce to the identity, keeping track of your sequence of row operations in the form of elementary matrices.    If you are able to row reduce to with a sequence of row operatons corresponding to the elementary matrices , then Since the inverse of an elementary matrix is elementary, we have written as a product of elementary matrices.       See the proof of the implication in .   "
},
{
  "id": "eg_inv_alg_example",
  "level": "2",
  "url": "s_invertibility_theorem.html#eg_inv_alg_example",
  "type": "Example",
  "number": "1.12.8",
  "title": "Inverse algorithms.",
  "body": " Inverse algorithms  Let . Combining both algorithms we can decide whether is invertible, and if so, compute and write as a product of elementary matrices. According to , the computation shows that is invertible and . Next, representing our row operations as elementary matrices, we see that , where . We conclude that .  "
},
{
  "id": "eg_inv_alg_singular",
  "level": "2",
  "url": "s_invertibility_theorem.html#eg_inv_alg_singular",
  "type": "Example",
  "number": "1.12.9",
  "title": "Inverse algorithm.",
  "body": " Inverse algorithm   Use to decide whether the matrix is invertible.    Note that since in any case we do not half to produce an actual inverse, we can dispense with the super-sized augmented matrix described in , and instead just row reduce to row echelon form. We have . Since the row echelon form of has no leading one in the third column, we conclude that is not invertible.   "
},
{
  "id": "vid_eg_inver_alg",
  "level": "2",
  "url": "s_invertibility_theorem.html#vid_eg_inver_alg",
  "type": "Example",
  "number": "1.12.10",
  "title": "Video example: inverse algorithm.",
  "body": " Video example: inverse algorithm   Video: inverse algorithm    "
},
{
  "id": "cor_left-right_inverse",
  "level": "2",
  "url": "s_invertibility_theorem.html#cor_left-right_inverse",
  "type": "Corollary",
  "number": "1.12.12",
  "title": "Left-inverse if and only if right-inverse.",
  "body": " Left-inverse if and only if right-inverse   Let and be . Then    .     .   In plain English: a matrix is a left-inverse of if and only if it is a right-inverse of .   Left as a homework exercise. "
},
{
  "id": "cor_inv_prod_eq",
  "level": "2",
  "url": "s_invertibility_theorem.html#cor_inv_prod_eq",
  "type": "Corollary",
  "number": "1.12.13",
  "title": "Invertibility of product equivalence.",
  "body": " Invertibility of product equivalence   Let and be . Then is invertible if and only if and are both invertible: ,     Left as a homework exercise.  "
},
{
  "id": "cor_row_equivalence_invertibility",
  "level": "2",
  "url": "s_invertibility_theorem.html#cor_row_equivalence_invertibility",
  "type": "Corollary",
  "number": "1.12.14",
  "title": "Row equivalence and invertible matrices.",
  "body": " Row equivalence and invertible matrices   Let and be matrices. The following statements are equivalent.   The matrices and are row equivalent.    There are elementary matrices such that .    There is an invertible matrix such that .       The equivalence of (1) and (2) was shown in the course of our discussion in . The equivalence of (2) and (3) is a direct consequence of (5) of since a matrix is invertible if and only if it can be written as for some elementary matrices .   "
},
{
  "id": "cor_invertibility_enlarged",
  "level": "2",
  "url": "s_invertibility_theorem.html#cor_invertibility_enlarged",
  "type": "Corollary",
  "number": "1.12.15",
  "title": "Invertibility theorem: first expansion.",
  "body": " Invertibility theorem: first expansion   Let . The following statements are equivalent.    is invertible.    The matrix equation has a unique solution for any .    The matrix equation has a solution for any .    The columns of are a spanning tuple for .    The matrix equation has a unique solution: namely, .    The columns of are linearly independent.     is row equivalent to , the identity matrix.     is a product of elementary matrices.       Left as a homework exercise.   "
},
{
  "id": "ss_invertible_loose_ends-11",
  "level": "2",
  "url": "s_invertibility_theorem.html#ss_invertible_loose_ends-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "57 "
},
{
  "id": "cor_RRE_uniqueness",
  "level": "2",
  "url": "s_invertibility_theorem.html#cor_RRE_uniqueness",
  "type": "Corollary",
  "number": "1.12.16",
  "title": "Uniqueness of reduced row echelon form.",
  "body": " Uniqueness of reduced row echelon form   Any matrix is row equivalent to a unique matrix in reduced row echelon form.    Let be an matrix. Using Gauss-Jordan elimination, we can row reduce to a matrix in reduced row echelon form. Suppose is also row equivalent to the matrix in reduced row echelon form; then and are row equivalent, since the row equivalence relation is symmetric and transitive. Thus it suffices to show that if and are row equivalent matrices in reduced row echelon form, then . We do so by induction on . The base step is trivial, since there are only two matrices in reduced row echelon form: namely and the column vector with a one in the first row and zeros elsewhere.  For the induction step we assume that any two row equivalent matrices in reduced row echelon form are equal. Let and be row equivalent matrices in reduced row echelon form, and let and denote the columns of and , respectively. By there is an invertible matrix such that . The first columns of and form matrices and , respectively, that are in reduced row echelon form, as one easily checks. Furthermore, and are row equivalent: indeed, since for all , we see that , and thus and are row equivalent. By the induction hypothesis we must have , and it remains only to show that . We treat two cases: the case where one of and has a no leading one in its last column, and the case where both matrices have a leading one in their last column.  In the first case, suppose without loss of generality that the last column of does not have a leading one. Consider the linear system with augmented matrix . Since the last column of is free, it follows from that for all there is a solution to this system of the form , where is some function of . Since and are row equivalent, so are and , and thus the two systems corresponding to these augmented matrices have the same solution sets. It follows that for all , we have . Using the column method, we conclude that for all . Since , we have for all , and thus conclude that for all . Taking , we conclude that , and hence that in this case.  Finally, we consider the case where and both have leading ones in their last columns. Since and are in reduced row echelon form, it follows that the leading one in the last column of occurs in the row of whose corresponding row in is the first zero row of . Since the same statement mutatis mutandi applies to and , and since , we see that the leading ones in the last columns of and occur in the same row. Since all other entries in that last column must be zero, we conclude that , and hence that in this case as well.   "
},
{
  "id": "ss_invertible_matrices_ww-2",
  "level": "2",
  "url": "s_invertibility_theorem.html#ss_invertible_matrices_ww-2",
  "type": "WeBWorK",
  "number": "1.12.17",
  "title": "",
  "body": "    If and are invertible matrices, then the inverse of is .   True   False         SOLUTION: False. For example, let , and , then , which is not invertible.       "
},
{
  "id": "ss_invertible_matrices_ww-3",
  "level": "2",
  "url": "s_invertibility_theorem.html#ss_invertible_matrices_ww-3",
  "type": "WeBWorK",
  "number": "1.12.18",
  "title": "",
  "body": "    Solve for the matrix if . Assume that all matrices are and invertible as needed.         SOLUTION: Note that       "
},
{
  "id": "ss_invertible_matrices_ww-4",
  "level": "2",
  "url": "s_invertibility_theorem.html#ss_invertible_matrices_ww-4",
  "type": "WeBWorK",
  "number": "1.12.19",
  "title": "",
  "body": "    Are the following matrices invertible?                     "
},
{
  "id": "ss_invertible_matrices_ww-5",
  "level": "2",
  "url": "s_invertibility_theorem.html#ss_invertible_matrices_ww-5",
  "type": "WeBWorK",
  "number": "1.12.20",
  "title": "",
  "body": "    For what values of will be invertible?  For all such that  and  .             SOLUTION: The matrix is invertible provided the columns of are linearly independent, which will be the case if . Thus, we require that and .       "
},
{
  "id": "ss_invertible_matrices_ww-6",
  "level": "2",
  "url": "s_invertibility_theorem.html#ss_invertible_matrices_ww-6",
  "type": "WeBWorK",
  "number": "1.12.21",
  "title": "",
  "body": "    Let   Then   where  ,  ,  ,  ,   where  ,  ,  ,  ,  and   where  ,  ,  ,  .                                                                   "
},
{
  "id": "s_invertibility_theorem_ex-1-1-3",
  "level": "2",
  "url": "s_invertibility_theorem.html#s_invertibility_theorem_ex-1-1-3",
  "type": "Exercise",
  "number": "1.12.5.1",
  "title": "",
  "body": "      "
},
{
  "id": "s_invertibility_theorem_ex-1-1-4",
  "level": "2",
  "url": "s_invertibility_theorem.html#s_invertibility_theorem_ex-1-1-4",
  "type": "Exercise",
  "number": "1.12.5.2",
  "title": "",
  "body": "      "
},
{
  "id": "s_invertibility_theorem_ex-1-2-3",
  "level": "2",
  "url": "s_invertibility_theorem.html#s_invertibility_theorem_ex-1-2-3",
  "type": "Exercise",
  "number": "1.12.5.3",
  "title": "",
  "body": "      "
},
{
  "id": "s_invertibility_theorem_ex-1-2-4",
  "level": "2",
  "url": "s_invertibility_theorem.html#s_invertibility_theorem_ex-1-2-4",
  "type": "Exercise",
  "number": "1.12.5.4",
  "title": "",
  "body": "      "
},
{
  "id": "s_invertibility_theorem_ex-1-3-3",
  "level": "2",
  "url": "s_invertibility_theorem.html#s_invertibility_theorem_ex-1-3-3",
  "type": "Exercise",
  "number": "1.12.5.5",
  "title": "",
  "body": "       We use the inverse algorithm: . We conclude that .   "
},
{
  "id": "s_invertibility_theorem_ex-1-3-4",
  "level": "2",
  "url": "s_invertibility_theorem.html#s_invertibility_theorem_ex-1-3-4",
  "type": "Exercise",
  "number": "1.12.5.6",
  "title": "",
  "body": "      "
},
{
  "id": "s_invertibility_theorem_ex-1-3-5",
  "level": "2",
  "url": "s_invertibility_theorem.html#s_invertibility_theorem_ex-1-3-5",
  "type": "Exercise",
  "number": "1.12.5.7",
  "title": "",
  "body": "      "
},
{
  "id": "s_invertibility_theorem_ex-1-3-6",
  "level": "2",
  "url": "s_invertibility_theorem.html#s_invertibility_theorem_ex-1-3-6",
  "type": "Exercise",
  "number": "1.12.5.8",
  "title": "",
  "body": "      "
},
{
  "id": "s_invertibility_theorem_ex-1-3-7",
  "level": "2",
  "url": "s_invertibility_theorem.html#s_invertibility_theorem_ex-1-3-7",
  "type": "Exercise",
  "number": "1.12.5.9",
  "title": "",
  "body": "   ,    "
},
{
  "id": "s_invertibility_theorem_ex-1-3-8",
  "level": "2",
  "url": "s_invertibility_theorem.html#s_invertibility_theorem_ex-1-3-8",
  "type": "Exercise",
  "number": "1.12.5.10",
  "title": "",
  "body": "   ,    "
},
{
  "id": "s_invertibility_theorem_ex-1-4-3",
  "level": "2",
  "url": "s_invertibility_theorem.html#s_invertibility_theorem_ex-1-4-3",
  "type": "Exercise",
  "number": "1.12.5.11",
  "title": "",
  "body": "       Row reduce to the identity matrix:   The corresponding elementary matrices are . It follows that , and hence that .   "
},
{
  "id": "s_invertibility_theorem_ex-1-4-4",
  "level": "2",
  "url": "s_invertibility_theorem.html#s_invertibility_theorem_ex-1-4-4",
  "type": "Exercise",
  "number": "1.12.5.12",
  "title": "",
  "body": "   .   "
},
{
  "id": "s_invertibility_theorem_ex-1-4-5",
  "level": "2",
  "url": "s_invertibility_theorem.html#s_invertibility_theorem_ex-1-4-5",
  "type": "Exercise",
  "number": "1.12.5.13",
  "title": "",
  "body": "      "
},
{
  "id": "s_invertibility_theorem_ex-1-4-6",
  "level": "2",
  "url": "s_invertibility_theorem.html#s_invertibility_theorem_ex-1-4-6",
  "type": "Exercise",
  "number": "1.12.5.14",
  "title": "",
  "body": "   .   "
},
{
  "id": "ex_th_inv_exists_sol",
  "level": "2",
  "url": "s_invertibility_theorem.html#ex_th_inv_exists_sol",
  "type": "Exercise",
  "number": "1.12.5.15",
  "title": "",
  "body": "  According to Statement (2) of the invertibility theorem, a matrix is invertible if and only if for all column vectors the matrix equation has a unique solution. Show that we can add the following, weaker-looking version of (2) to our list of equivalent statements:   (2') The matrix equation has a solution for any column vector .     Try to logically weave Statement (2') into our original list of equivalent statements by (a) finding a statement from our original list that implies (2'), and (b) find a statement in our original list that is implied by (2').  You may make use of in your argument.   "
},
{
  "id": "ex_row_equiv_props",
  "level": "2",
  "url": "s_invertibility_theorem.html#ex_row_equiv_props",
  "type": "Exercise",
  "number": "1.12.5.16",
  "title": "Properties of row equivalence.",
  "body": " Properties of row equivalence   Let denote that matrix is row equivalent to . Use to show that the relation is reflexive, symmetric, and transitive.   "
},
{
  "id": "s_invertibility_theorem_ex-1-7",
  "level": "2",
  "url": "s_invertibility_theorem.html#s_invertibility_theorem_ex-1-7",
  "type": "Exercise",
  "number": "1.12.5.17",
  "title": "",
  "body": "  Let be an matrix, and let be an invertible matrix.  Show that the two matrix equations have the same set of solutions. In other words show that .   "
},
{
  "id": "s_invertibility_theorem_ex-1-8",
  "level": "2",
  "url": "s_invertibility_theorem.html#s_invertibility_theorem_ex-1-8",
  "type": "Exercise",
  "number": "1.12.5.18",
  "title": "",
  "body": "  Suppose and are row equivalent square matrices. Prove: is invertible if and only if is invertible.   "
},
{
  "id": "s_invertibility_theorem_ex-1-9",
  "level": "2",
  "url": "s_invertibility_theorem.html#s_invertibility_theorem_ex-1-9",
  "type": "Exercise",
  "number": "1.12.5.19",
  "title": "",
  "body": "  Use the provided information to determine whether the given square matrix is invertible. Justify your answer using the inveribility theorem or one of its corollaries.    There are column vectors such that .     is invertible.     for some .    The sum of the columns of is equal to the zero column vector.   "
},
{
  "id": "s_invertibility_theorem_ex-1-10",
  "level": "2",
  "url": "s_invertibility_theorem.html#s_invertibility_theorem_ex-1-10",
  "type": "Exercise",
  "number": "1.12.5.20",
  "title": "",
  "body": "  Answer true or false. If true, provide a proof; if false, exhibit an explicit counterexample.    The product of two elementary matrices is elementary.    The product of two elementary matrices is invertible.    The sum of two invertible matrices is invertible.    If is a singular matrix, then the linear system has infinitely many solutions.    If is obtained from the invertible matrix by replacing its second row with the sum of its first and second rows, then is invertible.    If is square matrix, and is a column vector such that the matrix equation has a unique solution, then is invertible.    If and are row equivalent, then the matrix equations and have the same solution set.    If or is singular, then is singular.   "
},
{
  "id": "s_det",
  "level": "1",
  "url": "s_det.html",
  "type": "Section",
  "number": "1.13",
  "title": "The determinant",
  "body": " The determinant   The determinant is a function that assigns to each matrix a scalar . The definition given below of the determinant is far from intuitive, and we will do little to motivate it up front. Instead, we allow its various properties to speak for themselves by way of retroactive motivation. In particular, we will see that , making the determinant an important tool for investigating invertibility.    Definition of the determinant  Our definition of the determinant is a recursive one; given an matrix its determinant is defined in terms of the determinant of certain submatrices of dimension . This necessitates some notation to help our discussion along.   Submatrix notation  submatrix    submatrix of    Let be an matrix with . Given , the submatrix of obtained by removing the -th row and -th column of is denoted .     Do not conflate the submatrix notation with matrix entry notation : the former returns the submatrix of obtained by deleting the -th row and -th column; the latter returns the -th entry of .    The determinant  determinant    determinant of    Let . The determinant is defined as follows:   Base case:  When we have and we define .    Recursive case:  When we define .        Small cases  Let's look at determinant formulas for the cases. You may remember the formula for matrices from ; we will make the connection more explicit in .  Given , we have . The formula for the case is simple enough to serve as a second base case , allowing us to end the recursive process of computing a general matrix once we get to expressions involving matrices.  Given , we have .   The recursive nature of the determinant definition makes induction arguments particularly useful when proving properties of the determinant, as illustrated by the next theorem.   Determinant of triangular matrices   Let be triangular (upper, lower, or diagonal). Then . In other words, the determinant of a triangular matrix is the product of its diagonal entries.    We only give the proof for lower triangular matrices; the proof in the upper triangular case is nearly identical.  For any let denote the proposition: The determinant of any lower triangular matrix is the product of its diagonal entries . We prove by induction that is true for all .   Base step: show is true  In this case , and is indeed the product of the diagonal entries of .    Induction step: show for all  Let be a lower triangular matrix. Then for all , and hence the determinant of is given by . Claim: is lower triangular. Indeed, first observe that we have for all ; by deleting the first row and first column we effectively bump each index up by one. Since is lower triangular we have for all , and hence also for all , proving the claim.  Lastly, assuming is true (the induction hypothesis) we have , as desired.      Determinant of identity matrices   We have for all positive integers .    This follows directly from since the diagonal entries of are all ones.      Expansion along rows and columns  Morally speaking, we should give some examples of higher-dimensional determinants, but we first introduce some theory that affords us more leeway in our computations.   Minors and expansions along rows\/columns  minor of matrix  expansion along row\/column    the -th minor of a matrix    Given , for any pair the -th minor of is defined as .  For any the expression is called the expansion along the -th row of .  For any , the expression is called the expansion along the -th column of .     Expansion along rows   Let . For any we have . In other words, we can compute by expanding along any row of .    The proof is by induction on the size of the matrix.   Base step:  For there is nothing to prove. Given expanding along either row yields , as one easily verifies.    Induction step  Assume the claim is true of any matrix. Given we have . Expanding along the -th row of for any , on the other hand, we get . To show these two expressions are equal we use the induction hypothesis to compute each by expanding along its -th row: . The matrix is the result of first deleting row 1 and column from , and then deleting row and column of the resulting matrix. To deal with such iterated submatrices, we make some simple observations relating the rows and columns of and with those of .   The -th row of corresponds to the -th row of , and the first row of corresponds to the first row of .    If , then the -th column of corresponds to the -th column of ; if , then the -th column of corresponds to the -th column of .    If , then the -th column of corresponds to the -th column of ; if , then the -th column of corresponds to the -th column of .   From these observations we derive the following table of formulas: . We now begin to unpack : . This completes the induction step, and thus the proof is finished.     Surprisingly, it turns out that we can compute the determinant of a matrix by expanding along any column ( ). This is a consequence of the following theorem, which is useful in its own right. The proof below, taken from Robert Beezer's A First Course in Linear Algebra (see Theorem DT ), uses a wonderful trick starting from the observation that for any . However, it is only valid for fields in which the element is not equal to zero. For example, it is not valid for the field in the case . We include it nonetheless for its elegance, but assure the reader that we will be able to give a general proof of the result after introducing some more theory.   Determinant and transposition   Let be an matrix. Then .    As noted above, this proof is only valid if in the field . In particular, it is valid for and any .  The proof is by induction on . The base case ( ) is trivial since for any matrix .  For induction we assume that for all we have for any matrix. Suppose is an matrix. We have . This completes the proof by induction. (Note how in the second equality in the chain above we compute in the -th term of by expanding along the -th row of . A similar observation applies to the penultimate equality.)     Expansion along columns   Let . For any we have . In other words, we can compute by expanding along any column of .    For any , we have .      Compute for .    First we compute by expanding along the second row. The only nonzero term of this expansion is the last one, yielding . We have . To compute its determinant we expand along its third column: We conclude that .     Matrix of signs  When expanding along a row or column, it is easy to get tripped up by the sign in front of the -th coefficient. A matrix of signs is a sort of mnemonic device to help you in this regard. It is easily generated by observing that the sign in front of the -th entry is always a (since ), and that any horizontal or vertical step within the matrix is accompanied by a change of sign. As an example, for we have the following matrix of signs: .    Video example: determinant   Video: determinant     The freedom to compute the determinant by expanding along any row or column gives rise to the following intuitive property.    "
},
{
  "id": "d_minors",
  "level": "2",
  "url": "s_det.html#d_minors",
  "type": "Definition",
  "number": "1.13.1",
  "title": "Submatrix notation.",
  "body": " Submatrix notation  submatrix    submatrix of    Let be an matrix with . Given , the submatrix of obtained by removing the -th row and -th column of is denoted .   "
},
{
  "id": "rm_minors",
  "level": "2",
  "url": "s_det.html#rm_minors",
  "type": "Warning",
  "number": "1.13.2",
  "title": "",
  "body": " Do not conflate the submatrix notation with matrix entry notation : the former returns the submatrix of obtained by deleting the -th row and -th column; the latter returns the -th entry of .  "
},
{
  "id": "d_det",
  "level": "2",
  "url": "s_det.html#d_det",
  "type": "Definition",
  "number": "1.13.3",
  "title": "The determinant.",
  "body": " The determinant  determinant    determinant of    Let . The determinant is defined as follows:   Base case:  When we have and we define .    Recursive case:  When we define .      "
},
{
  "id": "rm_det_small_cases",
  "level": "2",
  "url": "s_det.html#rm_det_small_cases",
  "type": "Remark",
  "number": "1.13.4",
  "title": "Small <span class=\"process-math\">\\(n\\)<\/span> cases.",
  "body": " Small cases  Let's look at determinant formulas for the cases. You may remember the formula for matrices from ; we will make the connection more explicit in .  Given , we have . The formula for the case is simple enough to serve as a second base case , allowing us to end the recursive process of computing a general matrix once we get to expressions involving matrices.  Given , we have .  "
},
{
  "id": "th_det_triangular",
  "level": "2",
  "url": "s_det.html#th_det_triangular",
  "type": "Theorem",
  "number": "1.13.5",
  "title": "Determinant of triangular matrices.",
  "body": " Determinant of triangular matrices   Let be triangular (upper, lower, or diagonal). Then . In other words, the determinant of a triangular matrix is the product of its diagonal entries.    We only give the proof for lower triangular matrices; the proof in the upper triangular case is nearly identical.  For any let denote the proposition: The determinant of any lower triangular matrix is the product of its diagonal entries . We prove by induction that is true for all .   Base step: show is true  In this case , and is indeed the product of the diagonal entries of .    Induction step: show for all  Let be a lower triangular matrix. Then for all , and hence the determinant of is given by . Claim: is lower triangular. Indeed, first observe that we have for all ; by deleting the first row and first column we effectively bump each index up by one. Since is lower triangular we have for all , and hence also for all , proving the claim.  Lastly, assuming is true (the induction hypothesis) we have , as desired.    "
},
{
  "id": "cor_det_identity",
  "level": "2",
  "url": "s_det.html#cor_det_identity",
  "type": "Corollary",
  "number": "1.13.6",
  "title": "Determinant of identity matrices.",
  "body": " Determinant of identity matrices   We have for all positive integers .    This follows directly from since the diagonal entries of are all ones.   "
},
{
  "id": "d_minors_expansions",
  "level": "2",
  "url": "s_det.html#d_minors_expansions",
  "type": "Definition",
  "number": "1.13.7",
  "title": "Minors and expansions along rows\/columns.",
  "body": " Minors and expansions along rows\/columns  minor of matrix  expansion along row\/column    the -th minor of a matrix    Given , for any pair the -th minor of is defined as .  For any the expression is called the expansion along the -th row of .  For any , the expression is called the expansion along the -th column of .   "
},
{
  "id": "th_expansion_row",
  "level": "2",
  "url": "s_det.html#th_expansion_row",
  "type": "Theorem",
  "number": "1.13.8",
  "title": "Expansion along rows.",
  "body": " Expansion along rows   Let . For any we have . In other words, we can compute by expanding along any row of .    The proof is by induction on the size of the matrix.   Base step:  For there is nothing to prove. Given expanding along either row yields , as one easily verifies.    Induction step  Assume the claim is true of any matrix. Given we have . Expanding along the -th row of for any , on the other hand, we get . To show these two expressions are equal we use the induction hypothesis to compute each by expanding along its -th row: . The matrix is the result of first deleting row 1 and column from , and then deleting row and column of the resulting matrix. To deal with such iterated submatrices, we make some simple observations relating the rows and columns of and with those of .   The -th row of corresponds to the -th row of , and the first row of corresponds to the first row of .    If , then the -th column of corresponds to the -th column of ; if , then the -th column of corresponds to the -th column of .    If , then the -th column of corresponds to the -th column of ; if , then the -th column of corresponds to the -th column of .   From these observations we derive the following table of formulas: . We now begin to unpack : . This completes the induction step, and thus the proof is finished.    "
},
{
  "id": "th_det_transpose",
  "level": "2",
  "url": "s_det.html#th_det_transpose",
  "type": "Theorem",
  "number": "1.13.9",
  "title": "Determinant and transposition.",
  "body": " Determinant and transposition   Let be an matrix. Then .    As noted above, this proof is only valid if in the field . In particular, it is valid for and any .  The proof is by induction on . The base case ( ) is trivial since for any matrix .  For induction we assume that for all we have for any matrix. Suppose is an matrix. We have . This completes the proof by induction. (Note how in the second equality in the chain above we compute in the -th term of by expanding along the -th row of . A similar observation applies to the penultimate equality.)   "
},
{
  "id": "cor_expansion_columns",
  "level": "2",
  "url": "s_det.html#cor_expansion_columns",
  "type": "Corollary",
  "number": "1.13.10",
  "title": "Expansion along columns.",
  "body": " Expansion along columns   Let . For any we have . In other words, we can compute by expanding along any column of .    For any , we have .   "
},
{
  "id": "ss_expansion_rows_columns-8",
  "level": "2",
  "url": "s_det.html#ss_expansion_rows_columns-8",
  "type": "Example",
  "number": "1.13.11",
  "title": "",
  "body": "  Compute for .    First we compute by expanding along the second row. The only nonzero term of this expansion is the last one, yielding . We have . To compute its determinant we expand along its third column: We conclude that .   "
},
{
  "id": "rm_sign_matrix",
  "level": "2",
  "url": "s_det.html#rm_sign_matrix",
  "type": "Remark",
  "number": "1.13.12",
  "title": "Matrix of signs.",
  "body": " Matrix of signs  When expanding along a row or column, it is easy to get tripped up by the sign in front of the -th coefficient. A matrix of signs is a sort of mnemonic device to help you in this regard. It is easily generated by observing that the sign in front of the -th entry is always a (since ), and that any horizontal or vertical step within the matrix is accompanied by a change of sign. As an example, for we have the following matrix of signs: .  "
},
{
  "id": "fig_vid_det",
  "level": "2",
  "url": "s_det.html#fig_vid_det",
  "type": "Figure",
  "number": "1.13.13",
  "title": "",
  "body": " Video: determinant   "
},
{
  "id": "s_det_II",
  "level": "1",
  "url": "s_det_II.html",
  "type": "Section",
  "number": "1.14",
  "title": "Further properties of the determinant",
  "body": " Further properties of the determinant   Determinant is alternating and multilinear  For the next theorem, it is convenient to think of the determinant a function of the rows of an matrix . That is, instead of thinking of as a function , setting , we will think of it as a function . To facilitate arguments in this vein, we will adopt temporarily that convention of writing a matrix whose -th row is as . Yes, we are taking some notational liberties here, but we will drop this convention after this section is complete!   Determinant: alternating,skew-symmetric, multilinear   Let be a field, let be a positive integer, and let . We consider as a function on by defining as , where .   Alternating property  If satisfies for some indices , then . In terms of matrices, if a matrix has two identical rows, then .    Multilinear property  Given any , and index , and any vector , and scalar , we have .    Skew-symmetric  Suppose . We have . In terms of matrices, if is the result of swapping two rows of a matrix , then .          The alternating property is true vacuously for , and can be easily verified for via a direct computation. An induction argument then easily proves the result for all by expanding along a row of the matrix that is not equal to or . We leave this to the reader.    We can prove the multilinear properties of (2) directly by expanding along the -th row of the corresponding matrix. In more detail, let , where for all , and let , where . Letting , we have , where we have used the fact that as these three matrices are identical except for their -th rows.  Similarly, we have .    The skew-symmetric property now follows from the alternating and multilinear properties. Given , we have , by the alternating property. Expanding out the right side of the equation above using the multilinear property in succession yields , since by the alternating property again. In all, we have , or equivalently, .       The two properties taken together are summarized by saying the determinant is linear in each row, and hence multilinear overall. Note that by using the two properties in succession, we have for all . But what do these properties mean about the determinant of matrices? Property is easy enough to express in terms of matrices: if you scale a single row of a matrix by , then the value of the determinant is scaled by . Property , on the other hand, is a little more convoluted. Its treatment in the proof of probably is the best articulation of this: if , then . That ends up being a very powerful property of the determinant. In particular, when we pick to be , for some other index , we conclude that , where the second to last equality follows from the fact that the matrix obtained by replacing the -th row with the -th row has two identical rows, and hence determinant equal to zero. We have just shown that the row addition operation leaves the determinant of a matrix unchanged! Add to this the skew-symmetric property of the determinant, and our comment above about scaling single rows, and we have the following complete description of the effect of row operations on the determinant. For simplicity, we express the result in terms of elementary matrices multiplied on the left: recall that this is the same thing as applying an elementary row operation.   Row operations and determinant   Let .   For all and , we have .    For all , we have     For all and , we have .   In particular, taking above, we derive the following determinant formulas for elementary matrices: .     In the language of row operations, translates as follows:   Scaling a row of a matrix by has the effect of scaling the determinant by .    Swapping two rows of a matrix changes the sign of the determinant.    Performing a row addition operation on a matrix has no effect on the determinant.        Determinant and products of elementary matrices   Let be an matrix, and suppose we have for some collection of elementary matrices . Then .    This is an easy proof by induction on the number of elementary matrices involved, the base case ( ) of which is covered by .     has both computational and theoretical applications.  On the computational side, it suggests an alternative method of computing : first row reduce to a simpler matrix , making sure to keep track of the operations you use; set up an equation as in representing the row reduction; then solve the corresponding equation for in terms of and the .   Determinant via row reduction   Suppose the matrix can be row reduced to by perfomring the following sequence of row operations:   First swap the second and third rows.    Then scale the first row by     Then replace the second row with the second row plus the first row.   Compute .    In terms of elementary matrices we have and hence We conclude that .    On the theoretical side, implies both and .   Determinant and invertibility   Let be an matrix. Then is invertible if and only if .    The implication was proved in .  For the other direction, assume is invertible. Then implies is a product of elementary matrices: . Then implies . Since for all ( ), we conclude .     Determinant is multiplicative   Let and be matrices. Then .    We consider two cases based on the invertibility of and\/or .   or is not invertible  In this case is not invertible ( ), and hence by . By the same reasoning we must have or . It follows that in this case.    and both invertible  In this case we can write for some elementary matrices and ( ). Then .     We end this section and chapter with a slight expansion of our invertibility theorem. The equivalence of statement is a direct consequence of . The equivalence of the equivalence of statement was given earlier as an exercise. (See .)   Invertibility theorem   Let be an matrix. The following statements are equivalent.    is invertible.    The matrix equation has a unique solution for any .    The matrix equation has a solution for any .    The matrix equation has a unique solution: namely, .     is row equivalent to , the identity matrix.     is a product of elementary matrices.     .         Adjoint matrix   Adjoint matrix  adjoint matrix    adjoint of a square matrix    Let . The adjoint matrix of , denoted , is the matrix whose -th entry is defined as follows: .     Be careful of the order reversal in this definition. The -th entry of is equal to plus or minus the -th minor of . Let's see this in action for some small matrices.  For we have .  For we have .    Adjoint matrix formula   Given , we have . As a consequence is invertible if and only if , and in this case we have .    First observe that the second statement regarding invertibility follows directly from , since in this case setting we have .  Thus it suffices to prove . To do so, we must show that .   Case:  In this case we have . A similar argument shows that , though in this case we use expansion along a column.    Case:  When we have , where is the matrix obtained by replacing the -th row of with a copy of its -th row. Since has two identical rows implies , as desired. Once again, a similar argument using expansion along a column shows that .       Use the adjoint matrix formula to compute , where .    First compute by expanding along the third row: . Next, compute . Then we have .     Before you get too excited about the adjoint matrix formula, you should know that as grows, this procedure becomes much more costly in terms of number of arithmetic operations involved than our inverse algorithm based on Gauss-Jordan elimination. You get a sense of this already from the previous example. In general, the Gauss-Jordan inverse algorithm is the way to go.     WeBWork Exercises      Use the appropriate property of determinants to find  Do not evaluate the determinants. Answer:                  Consider the following Gauss elimination:   What is the determinant of ?                   Find such that the following matrix is singular.                   If and are matrices, , , then   ,   ,   ,   ,   .                                  "
},
{
  "id": "th_det_multilinear",
  "level": "2",
  "url": "s_det_II.html#th_det_multilinear",
  "type": "Theorem",
  "number": "1.14.1",
  "title": "Determinant: alternating,skew-symmetric, multilinear.",
  "body": " Determinant: alternating,skew-symmetric, multilinear   Let be a field, let be a positive integer, and let . We consider as a function on by defining as , where .   Alternating property  If satisfies for some indices , then . In terms of matrices, if a matrix has two identical rows, then .    Multilinear property  Given any , and index , and any vector , and scalar , we have .    Skew-symmetric  Suppose . We have . In terms of matrices, if is the result of swapping two rows of a matrix , then .          The alternating property is true vacuously for , and can be easily verified for via a direct computation. An induction argument then easily proves the result for all by expanding along a row of the matrix that is not equal to or . We leave this to the reader.    We can prove the multilinear properties of (2) directly by expanding along the -th row of the corresponding matrix. In more detail, let , where for all , and let , where . Letting , we have , where we have used the fact that as these three matrices are identical except for their -th rows.  Similarly, we have .    The skew-symmetric property now follows from the alternating and multilinear properties. Given , we have , by the alternating property. Expanding out the right side of the equation above using the multilinear property in succession yields , since by the alternating property again. In all, we have , or equivalently, .      "
},
{
  "id": "th_det_row_ops",
  "level": "2",
  "url": "s_det_II.html#th_det_row_ops",
  "type": "Theorem",
  "number": "1.14.2",
  "title": "Row operations and determinant.",
  "body": " Row operations and determinant   Let .   For all and , we have .    For all , we have     For all and , we have .   In particular, taking above, we derive the following determinant formulas for elementary matrices: .   "
},
{
  "id": "rm_det_row_ops",
  "level": "2",
  "url": "s_det_II.html#rm_det_row_ops",
  "type": "Remark",
  "number": "1.14.3",
  "title": "",
  "body": " In the language of row operations, translates as follows:   Scaling a row of a matrix by has the effect of scaling the determinant by .    Swapping two rows of a matrix changes the sign of the determinant.    Performing a row addition operation on a matrix has no effect on the determinant.     "
},
{
  "id": "cor_det_prod_elem",
  "level": "2",
  "url": "s_det_II.html#cor_det_prod_elem",
  "type": "Corollary",
  "number": "1.14.4",
  "title": "Determinant and products of elementary matrices.",
  "body": " Determinant and products of elementary matrices   Let be an matrix, and suppose we have for some collection of elementary matrices . Then .    This is an easy proof by induction on the number of elementary matrices involved, the base case ( ) of which is covered by .   "
},
{
  "id": "ss_det_multilinear_alt-10",
  "level": "2",
  "url": "s_det_II.html#ss_det_multilinear_alt-10",
  "type": "Example",
  "number": "1.14.5",
  "title": "Determinant via row reduction.",
  "body": " Determinant via row reduction   Suppose the matrix can be row reduced to by perfomring the following sequence of row operations:   First swap the second and third rows.    Then scale the first row by     Then replace the second row with the second row plus the first row.   Compute .    In terms of elementary matrices we have and hence We conclude that .   "
},
{
  "id": "th_inv_iff_det",
  "level": "2",
  "url": "s_det_II.html#th_inv_iff_det",
  "type": "Theorem",
  "number": "1.14.6",
  "title": "Determinant and invertibility.",
  "body": " Determinant and invertibility   Let be an matrix. Then is invertible if and only if .    The implication was proved in .  For the other direction, assume is invertible. Then implies is a product of elementary matrices: . Then implies . Since for all ( ), we conclude .   "
},
{
  "id": "th_det_mult",
  "level": "2",
  "url": "s_det_II.html#th_det_mult",
  "type": "Theorem",
  "number": "1.14.7",
  "title": "Determinant is multiplicative.",
  "body": " Determinant is multiplicative   Let and be matrices. Then .    We consider two cases based on the invertibility of and\/or .   or is not invertible  In this case is not invertible ( ), and hence by . By the same reasoning we must have or . It follows that in this case.    and both invertible  In this case we can write for some elementary matrices and ( ). Then .    "
},
{
  "id": "th_invertibility_expanded",
  "level": "2",
  "url": "s_det_II.html#th_invertibility_expanded",
  "type": "Theorem",
  "number": "1.14.8",
  "title": "Invertibility theorem.",
  "body": " Invertibility theorem   Let be an matrix. The following statements are equivalent.    is invertible.    The matrix equation has a unique solution for any .    The matrix equation has a solution for any .    The matrix equation has a unique solution: namely, .     is row equivalent to , the identity matrix.     is a product of elementary matrices.     .      "
},
{
  "id": "d_adjoint",
  "level": "2",
  "url": "s_det_II.html#d_adjoint",
  "type": "Definition",
  "number": "1.14.9",
  "title": "Adjoint matrix.",
  "body": " Adjoint matrix  adjoint matrix    adjoint of a square matrix    Let . The adjoint matrix of , denoted , is the matrix whose -th entry is defined as follows: .   "
},
{
  "id": "rm_adjoint",
  "level": "2",
  "url": "s_det_II.html#rm_adjoint",
  "type": "Remark",
  "number": "1.14.10",
  "title": "",
  "body": " Be careful of the order reversal in this definition. The -th entry of is equal to plus or minus the -th minor of . Let's see this in action for some small matrices.  For we have .  For we have .  "
},
{
  "id": "th_adjoint",
  "level": "2",
  "url": "s_det_II.html#th_adjoint",
  "type": "Theorem",
  "number": "1.14.11",
  "title": "Adjoint matrix formula.",
  "body": " Adjoint matrix formula   Given , we have . As a consequence is invertible if and only if , and in this case we have .    First observe that the second statement regarding invertibility follows directly from , since in this case setting we have .  Thus it suffices to prove . To do so, we must show that .   Case:  In this case we have . A similar argument shows that , though in this case we use expansion along a column.    Case:  When we have , where is the matrix obtained by replacing the -th row of with a copy of its -th row. Since has two identical rows implies , as desired. Once again, a similar argument using expansion along a column shows that .    "
},
{
  "id": "ss_adjoint_matrix-5",
  "level": "2",
  "url": "s_det_II.html#ss_adjoint_matrix-5",
  "type": "Example",
  "number": "1.14.12",
  "title": "",
  "body": "  Use the adjoint matrix formula to compute , where .    First compute by expanding along the third row: . Next, compute . Then we have .   "
},
{
  "id": "rm_adjoint_form",
  "level": "2",
  "url": "s_det_II.html#rm_adjoint_form",
  "type": "Remark",
  "number": "1.14.13",
  "title": "",
  "body": " Before you get too excited about the adjoint matrix formula, you should know that as grows, this procedure becomes much more costly in terms of number of arithmetic operations involved than our inverse algorithm based on Gauss-Jordan elimination. You get a sense of this already from the previous example. In general, the Gauss-Jordan inverse algorithm is the way to go.  "
},
{
  "id": "ss_det_ww-2",
  "level": "2",
  "url": "s_det_II.html#ss_det_ww-2",
  "type": "WeBWorK",
  "number": "1.14.14",
  "title": "",
  "body": "    Use the appropriate property of determinants to find  Do not evaluate the determinants. Answer:             "
},
{
  "id": "ss_det_ww-3",
  "level": "2",
  "url": "s_det_II.html#ss_det_ww-3",
  "type": "WeBWorK",
  "number": "1.14.15",
  "title": "",
  "body": "    Consider the following Gauss elimination:   What is the determinant of ?              "
},
{
  "id": "ss_det_ww-4",
  "level": "2",
  "url": "s_det_II.html#ss_det_ww-4",
  "type": "WeBWorK",
  "number": "1.14.16",
  "title": "",
  "body": "    Find such that the following matrix is singular.              "
},
{
  "id": "ss_det_ww-5",
  "level": "2",
  "url": "s_det_II.html#ss_det_ww-5",
  "type": "WeBWorK",
  "number": "1.14.17",
  "title": "",
  "body": "    If and are matrices, , , then   ,   ,   ,   ,   .                                "
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
