
Learning2Learn: An Intelligent Tutoring System

----------------

This concept is known in academic literature as an intelligent tutoring system, or ITS. Here we limit our scope to only an ITS system with a focus on programming. One of the first attempts was LISPITS developed in 1989, a program that successfully aided students in learning LISP. A few other approaches were tried at this time but none seem to have gained widespread adoption.
Since then, there have been many different iterations of this same idea: AutoTutor from the University of Memphis and ESC101-ITS from IIT Kanpur as well as generalized frameworks for ITS such as the Army Research Lab’s open source GIFT.
Although many ITS systems have been shown to be successful (increasing student letter grades by anywhere from a half to a full grade), they all suffer from the laborious process of programming the ITS. One paper estimated that every hour of content in the commercial Cognitive Tutor system required 200 man-hours of programming time. [6] The key difference between this proposal and systems that have been tried in the past is the usage of unsupervised machine learning methods on programs created by students.
This is further underpinned by recent research into analyzing student programs using neural networks. Chris Peich at Stanford University has shown that it is possible to cluster student programs by their structure and separate different unsuccessful and successful approaches. [1] This makes intuitive sense: most solutions to a given exercise are similar in structure, and unsuccessful attempts tend to result from common pitfalls.

-

AI allows us to learn from examples rather than have to hard code the rules. Without AI, we would have to implement each rule manually. Similar intelligent tutoring systems have development to tutoring ratios of between 200-300:1 [4]

-

In line with the research of Piech et al [1], we could create a model that uses recurrent neural networks to map syntactically correct programs that produce AST (abstract syntax trees) to a number that can then be clustered and visualized. From there we could determine what each of the other clusters means, in terms of student comprehension. These techniques are similar to how sentence trees are analyzed in natural language processing, and in fact may be even more applicable because of the extremely regular structure of computer programs. This technique of analyzing syntax trees has its origin in Natural Language Processing (NLP). In fact, because of the extremely regular structure of computer programs, this sort of technique is even better suited for this sort of task.
The output of the network would be used to suggest an action to be taken by the student. One way to do this would be to annotate the clusters of incorrect programs with the pitfall that caused the students to cluster in that manner. After enough unsuccessful attempts, the program would attempt to guide the correct answer.

-

As more people use this system to write code via a web-based interface, we would have more data on which to train the network. As further analysis and review improves the performance of our model, we can simply update the weights on the back-end.

----------------

License: TODO

----------------
