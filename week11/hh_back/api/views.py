from django.shortcuts import render
from django.http.response import JsonResponse
from api.models import Company, Vacancy


def company_list(request):
    companies = Company.objects.all()
    companies_json = [company.to_json() for company in companies]
    return JsonResponse(companies_json, safe=False)


def company_detail(request, company_id):
    try:
        company = Company.objects.get(id=company_id)
    except Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)})
    return JsonResponse(company.to_json())


def vacancy_list(request):
    vacancies = Vacancy.objects.all()
    vacancies_json = [vacancy.to_json() for vacancy in vacancies]
    return JsonResponse(vacancies_json, safe=False)


def vacancy_detail(request, vacancy_id):
    try:
        vacancy = Vacancy.objects.get(id=vacancy_id)
    except Vacancy.DoesNotExist as e:
        return JsonResponse({'error': str(e)})
    return JsonResponse(vacancy.to_json())


def com_vacancies(request, company_id):
    vacancies = Vacancy.objects.filter(company_id=company_id)
    vacancies_json = [vacancy.to_json() for vacancy in vacancies]
    return JsonResponse(vacancies_json, safe=False)


def top_ten(request):
    vacancies = Vacancy.objects.all().order_by('-salary')
    vacancies_ten = vacancies[:10]
    vacancies_ten_json = [vacancy.to_json() for vacancy in vacancies_ten]
    return JsonResponse(vacancies_ten_json, safe=False)