# -*- coding: utf-8 -*-
# Generated by Django 1.11.11 on 2018-04-18 18:00
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('place', '0001_initial'),
        ('user', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Trip',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('userId', models.CharField(default='None', max_length=200)),
                ('tripName', models.CharField(max_length=200, default="None")),
                ('tripDescription', models.CharField(max_length=500, default="None")),
                ('guides', models.ManyToManyField(to='user.User')),
                ('places', models.ManyToManyField(to='place.Place'),),
            ],
        ),
    ]
