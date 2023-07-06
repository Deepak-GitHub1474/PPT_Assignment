# Explain Purpose of Try and Catch block.

Try and Catch block is used to handle exceptions, or errors, that may occur during 
the execution of code. It is crucial to use try and catch to prevent the risk of error 
which may cause the major problems like break the flow of execution of code, server crash 
etc. They provide a way to gracefully handle errors and prevent the program from crashing 
or producing unexpected results.

The general syntax for a try and catch block :

try {
  // Code that may throw an error
} catch (error) {
  // Code to handle the error
}

The try block is used to enclose the code that may potentially throw an error. It is followed 
by one or more catch blocks that specify how to handle specific types of exceptions. If an 
error occurs within the try block, the execution is immediately transferred to the corresponding 
catch block.

