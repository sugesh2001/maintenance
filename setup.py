from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in maintenance/__init__.py
from maintenance import __version__ as version

setup(
	name="maintenance",
	version=version,
	description="maintenance for agnikul",
	author="sugesh",
	author_email="sugeshprabakaran@agnikul.in",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
