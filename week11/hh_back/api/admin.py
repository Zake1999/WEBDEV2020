from django.contrib import admin

from .models import Vacancy, Company


@admin.register(Vacancy)
class VacancyAdmin(admin.ModelAdmin):
    pass


@admin.register(Company)
class CompanyAdmin(admin.ModelAdmin):
    pass
