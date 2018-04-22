import coverage

cov = coverage.Coverage()
cov.start()

coverage run manage.py test api

cov.stop()
cov.save()

cov.html_report()