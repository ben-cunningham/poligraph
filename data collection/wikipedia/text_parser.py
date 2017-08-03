import csv

from textblob import TextBlob
from textblob.classifiers import NaiveBayesClassifier

class TextParser():
    
    def __init__(self):
        self.train()

    def classify(self, string):
        return self.cl.classify(string)

    def train(self):
        rows = []
        with open('test_data.csv', 'r') as fp:
            data = csv.reader(fp)
            for row in data:
                rows.append((row[0], row[1], ))

        self.cl = NaiveBayesClassifier(rows)
