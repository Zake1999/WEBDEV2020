from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=200)


    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
         }
    def __str__(self):
        return self.name


class Product(models.Model):
    name = models.CharField(max_length=300)
    price = models.FloatField()
    description = models.TextField(default='', blank=True)
    count = models.IntegerField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE, blank=True, null=True)

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'price': self.price,
            'description': self.description,
            'count': self.count,
            'category': self.category.name
            }

    def __str__(self):
        return self.name
