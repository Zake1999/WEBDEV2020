import json
from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt

from api.models import Company


# CRUD - For Category Model

@csrf_exempt
def company_list(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        companies_json = [c.to_json() for c in companies]
        return JsonResponse(companies_json, safe=False)
    elif request.method == 'POST':
        data = json.loads(request.body)


        # option 2
        company = Company.objects.create(name=data.get('name'))

        return JsonResponse(company.to_json())


@csrf_exempt
def company_detail(request, company_id):
    try:
        company = Company.objects.get(id=company_id)
    except Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)})

    # Get one objects
    if request.method == 'GET':
        return JsonResponse(company.to_json())

    # Update selected objects
    elif request.method == 'PUT':
        data = json.loads(request.body)

        company.name = data.get('name', company.name)
        company.save()

        return JsonResponse(company.to_json())

    # Delete selected object
    elif request.method == 'DELETE':
        company.delete()

        return JsonResponse({'deleted': True})