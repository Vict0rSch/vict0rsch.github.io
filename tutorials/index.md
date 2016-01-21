---
layout: post

author:
  name: Victor Schmidt
  twitter: vict0rsch

title: Deep Learning
---


Table Of Contents
---

**[Presentation](#presentation)**  

**[How to use](#how-to-use)** 
 
**[Repository structure](#repository-structure)**  

**[The Toothbrush Technique](#the-toothbrush-technique)**

Presentation
---

This repository contains Deep Learning *implementations* tutorials. For more general knowledge regarding Machine/Deep Learning, have a look at **[useful_resources.md](/resources/useful_resources.md)**. 

Lasagne and Keras are Theano-based so I recommend you get familiar with Theano before starting these ones.  

However **Keras** is way closer to usual Python than Lasagne so it requires a weaker understanding of Theano. The main thing to understand to get started with Keras is Theano's graph structure.


We concentrate, in [theano.md](https://github.com/Vict0rSch/Deep-Learning/blob/master/theano.md), on a few features of Theano that will be needed in Lasagne mostly and just a little in Keras. You will not learn Theano there but get a glimpse at how it works and how it can be used in a Deep Learning context. Theano is about much more than this, especially regarding [GPU](http://deeplearning.net/software/theano/tutorial/using_gpu.html) calculation and [Automatic Differenciation](http://deeplearning.net/software/theano/tutorial/gradients.html).


See the official Theano tutorial [here](http://deeplearning.net/software/theano/tutorial/).

I have not worked a lot with Convolutional Networks so I won't mention them here, for now.

| Set up | Theano   | Keras | Lasagne | Resources | Lose Time |
|:---------:|:----------:|:-------:|:-----------:|:-----------:|:--------:|
|[![i1][setup-image]](/tutorials/setup)|[![i2][theano-image]](/tutorials/theano)|[![i3][keras-image]](/tutorials/keras)|[![i4][lasagne-image]](/tutorials/lasagne)| [![i5][resources-image]](/resources/) |[![i6][time-image]](http://9gag.com/)|

How to use
---
Machine learning is a vast area. Time and concentration are the two things you need the most to get into it. Don't jump to the next step if you're not sure you're clear with the present one's outcomes. 


1. Learn about Machine Learning -> Resources -> [Starting with Machine Learning](/tutorials/useful_resources.md#starting-with-machine-learning)
    * **Requirements**: None. Except basic knowledge in maths
    * **Outcomes**: Understand what ((un)supervised)learning and training mean, what are some of the most famous techniques and the importance of data (feature selection/extraction, overfitting).


2. Learn about Deep Learning Theory and feedforward networks (your best bet may very well be M. Nielsen's blog)  -> [Starting with Deep Learning](/tutorials/useful_resources.md#starting-with-deep-learning)
    * **Requirements**: Python, very basic linear algebra and analysis (vector products and differenciation basically) + outcome (1)
    * **Outcomes**: Understand how neural networks are built, trained, improved. Both on the theory and the implementation side. You'll also understand how networks are coded to get a sense of how frameworks work.


3. Get familiar with Theano -> [Theano](/tutorials/theano.md)
    * **Requirements**: Python
    * **Outcomes**: Be able to understand Theano code and write functions relying on (shared) variables. 


4. Get into some code 
	* Start easy with Keras -> [Keras](/tutorials/keras)
	   * **Requirements**: Python + outcomes (1) and (2)
	   * **Outcomes**: Understand how the Keras framework can be used and therefore implement any dense feedforward network you like.  
	* Go into the details with Lasagne -> [Lasagne](/tutorials/lasagne)
	   * **Requirements**: Python + outcomes (1), (2) and (3)
	   * **Outcomes**: Understand how the Lasagne framework can be used and therefore implement any dense feedforward network you like. Understand the differences with Keras.

  
5. Dig into Recurrent Networks -> [Resources](/tutorials/useful_resources.md#on-recurrent-neural-networks) 
    * **Requirements**: outcomes (1) and (2) (strong)
    * **Outcomes**: Understand the core concepts and usage of recurrent nets. Get the variety of structures.


6. Spend some time understanding the handling of dimensions in recurrent nets -> [Recurrent](/tutorials/recurrent.md)
    * **Requirements**: outcomes (1), (2), one of (4), (5)
    * **Outcomes**: Be able to create the appropriate dataset and format your data according to the task you seek.


7. Get back to code -> *[on the way]*  
    * **Requirements**:
    * **Outcomes**:

Repository Structure
---

* **Readme.md** -> present file (I know you knew)

* **[License](/tutorials/License)** -> GPL v2 ([choose a licence](http://choosealicense.com/))

	> The GPL (V2 or V3) is a copyleft license that requires anyone who distributes your code or a derivative work to make the source available under the same terms. V3 is similar to V2, but further restricts use in hardware that forbids software alterations.

	> Linux, Git, and WordPress use the GPL. 

* **[setup.md](/tutorials/setup.md)** -> Links and sketchy guide to install frameworks

* **[theano.md](/tutorials/theano.md)** -> A short introduction to Theano with the minimum required to go on with Lasagne and Keras. 

*  **[useful_resources.md](/tutorials/useful_resources.md)** -> a list of recommended ressources to either begin, discover or learn more on various topics of machine/deep learning.

* **[recurrent.md](/tutorials/recurrent.md)** -> a special focus on recurrent neural networks (RNNs) and how to handle your data's dimensions to train them

* **[keras](keras)** -> repository containing the tutorial about... Keras. Yep. 

	*  **[readme.md](/tutorials/keras/readme.md)** -> Choose between starting with feedforward networks or get deeper, into recurrent networks. 
	* **[feedforward\_keras\_mnist\_tutorial.md](/tutorials/keras/feedforward_keras_mnist_tutorial.md)** -> code introduction and explanation to easily run a neural network able to recognize digits (mnist dataset)
	* **[feedforward\_keras\_mnist.py](/tutorials/keras/feedforward_keras_mnist.py)** -> code to implement a feedforward (dense) neural network trained on mnist using keras.
	* **[recurrent\_keras.md](/tutorials/keras/recurrent_keras.md)** -> example using recurrent networks. Empty for now, example to come.
	
* **[lasagne](/tutorials/lasagne)** repository containing the tutorial about... Lasagne. Yep. Again. Repository organized as Keras's
	* **[readme.md](lasagne/readme.md)**
	* **[feedforward\_lasagne\_mnist\_tutorial.md](/tutorials/lasagne/feedforward_lasagne_mnist_tutorial.md)**
	* **[feedforward\_lasagne\_mnist.py](/tutorials/lasagne/feedforward_lasagne_mnist.py)**
	* **[recurrent\_lasagne.md](/tutorials/lasagne/recurrent_lasagne.md)**



The Toothbrush Technique
---
The Toothbrush technique is used to debug code. The concept is easy: pick up your toothbrush, a pen or a spoon and walk it through your code as if they understood it. Better yet use a friend or coworker: you won't need their brain, rather their ears. 

The thing is that debugging can be hard and the error might very well be silly. However looking as someone else's code is often hard and/or laborious, so asking a friend/coworker to debug it is hardly possible.  
On the other hand, explaining it to your toothbrush makes you rethink the whole coding process you went through and hopefully find that (silly?) mistake or incoherence. 

Contact [Clément](https://www.linkedin.com/in/cl%C3%A9ment-nicolle-18ba2267) to learn more.

<br> 

<sub>Icons made by [Freepik](http://www.freepik.com) from [Flaticon](http://www.flaticon.com) licensed by [CC BY 3.0](http://creativecommons.org/licenses/by/3.0/)
	
	
[theano-image]: http://s18.postimg.org/cuim8chtx/four56.png
[resources-image]: http://s22.postimg.org/6alksj4t9/idea14.png
[lasagne-image]: http://s24.postimg.org/5sotgm269/stack13.png
[keras-image]: http://s12.postimg.org/xvsdbaepl/unicorn.png
[setup-image]: http://s2.postimg.org/hgrwawlid/three115.png
[time-image]: http://s22.postimg.org/y0v2jhcf1/clock164.png
[recurrent-image]: http://s12.postimg.org/fdm1mirux/graph16.png

