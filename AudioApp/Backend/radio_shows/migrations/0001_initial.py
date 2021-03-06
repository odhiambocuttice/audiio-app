# Generated by Django 3.2.5 on 2021-07-31 18:50

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='RadioShows',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('show_poster', models.ImageField(upload_to='radioshows/%Y/%m/%d/')),
                ('poster_title', models.CharField(max_length=40)),
                ('show_description', models.CharField(max_length=255)),
            ],
        ),
    ]
