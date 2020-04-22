from django.db import models


class Company(models.Model):
    name = models.CharField(max_length=300)
    description = models.TextField(default='', blank=True)
    city = models.CharField(max_length=200)
    address = models.TextField(default='', blank=True)

    class Meta:
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'city': self.city,
            'address': self.address,
        }

    def __str__(self):
        return self.name


class Vacancy(models.Model):
    name = models.CharField(max_length=300)
    description = models.TextField(default='', blank=True)
    salary = models.FloatField()
    company = models.ForeignKey(Company, on_delete=models.CASCADE, blank=True, null=True)

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'salary': self.salary,
            'company': self.company.name,
        }

    def __str__(self):
        return self.name
