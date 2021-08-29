# group_project

## Proposal
Why do some countries do really well in the Olympics? What factors influence olypic performance at the country and athlete level? What countries and athleties will preform well at the next olympics? This proposal seeks to answer those questions. Using the vast dataset from the 2016 olympics, we seek to determine the most influencial factors that relate to medal performance of olympic atheletes, and build a predictive model that can forcast olympic performance for the next summer olympics. 

This analysis could provide multiple investment opportunities related to sports/olympic consumer market sizing, athelete endorsements, sports analytics, and sports betting, to name a few possibilities. 
 
## Data set 
Official dataset outlining olympic events, atheltes, participating countries, and medal counts. 
https://www.kaggle.com/rio2016/olympic-games

## Group Roles 
* Github master (square) - Janelle 
* Database (circle)- Ricardo 
* ETL/technology (X) - Kristina 
* Machine learning (triangle) - Matt 
* Final visuals/technology (X) - Billy 

## Machine Learning Model 
We plan on creating multiple models in order to find a model with the highest prediction score. Models under consideration are a simple linear regression, logistic regression (with a binary output of "won a medal" vs. "did not win a medal"), and a decision tree/random forest model. Optimally, we can rank predictions of olympic peformance at the athlete level, but also grouping them by country.  

Possible Independant Variables (observations at the individual athlete level): height, weight, age, home country GDP per capita, sex (dummy variable), sport (dummy variables) 
Possible Dependant Variables: total medals won, total gold/silver/bronze medals won, or a "placed" variable (a binary variable outlining if the athlete won any medal vs. not) 

Overall accuracy of the model will be the primary success metric. Sensitivity likely will be a prioirity over precision. While we would like to be able to correctly identify all of the medallists possible (higher precision), making sure the model's predicted medallists are actually winners (higher sensitivity) is a more important consideration. 

There will be a lot more observations on non-medallists than medallists, so it could be beneficial to include over/under sampling for our model in order to counteract some of the sampling biases inherent in the dataset. 

